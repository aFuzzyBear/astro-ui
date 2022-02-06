---
api_title: "fetch()"
page_title: "Fetch Data with XElement"
page_description: "You can utlitize browser native Fetch API to obtain data on the client and be able to use it within that element"

---
# Fetch Data

`XElement` allows you to use the native `fetch` api as one normally would if they are using fetch elsewhere in Astro, or in the browser.

This allows you to make client-side data calls to remote servers and api's to get your data fed through dynamically, and have it update on the client.

You can use `fetch()` from inside anyone of xelements `@` methods.

```astro
---
    import XElement from 'astro-xelement'

    const {button:Button} = xelement
---

    <Button @click={async()=>{
        const typicode = await 
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        console.log(typicode)
    }}>Click For Data</Button>

```

This extended example, will demonstrate how to create a suspenseful loading action to await the data and then print it to the screen.

```astro
---
    import XE from './XE/XE.js'

    const {button:Button,div:Display} = XE
---

   <Display @do={(element,store)=>{
        store.typicode = {id:1}

        const fetchData = async (callback) =>{
          await fetch(`https://jsonplaceholder.typicode.com/posts/${store.typicode.id}`)
          .then(response => response.json()).then(json=>callback(json))}
        
        store.printTypicode=()=>{
          try{
            fetchDisplay.textContent="Loading..."
            fetchData((data)=>{
              fetchDisplay.textContent = `Post Id:${data.id}\nTitle: ${data.title}\nBody:\n${data.body}`
            })
          }catch(err){
            fetchData.textContent = "Error Fetching Data"
          }
        }
    }}>

      <p id='fetchDisplay'></p>
    
       <Button @click={(event,store)=>{
          store.printTypicode()
          store.typicode.id++
         this.textContent="Click for more data"
       }}>Click for Data</Button>

    </Display>
```

Let us quickly explain what is happening above.

Lets break out the `<Display>` parent component. Its here we have bundled up the logic for this component.

All we are doing is using the `store` to keep track of the id, `store.typicode={id:1}`. We are calling this value within our fetch request string.

```jsx
const fetchData = async (fn) =>{
          await fetch(`https://jsonplaceholder.typicode.com/posts/${store.typicode.id}`)
          .then(response => response.json())
          .then(json=>fn(json))}
```

This `async` fetchData function, accepts a `callback` function, this is known as *thunking*, where we pass in a function to execute on the data that the original function returns.

So here we `await` the fetched response taking the id of the request from the `store`. We *then* turn the response into JSON and from there we *then* send that json as the data into our callback function `fn`.

Given that there can be an unknown amount of time between requesting and receiving the response, its good practice to provide some form of *hold* music for the end-user, a suspended loading between two states separated through time.

In this next part we preform the actual *suspenseful* loading, and updating the content on the screen.

```jsx
store.printTypicode = async()=>{
          try{
            fetchDisplay.textContent="Loading..."
            await fetchData((data)=>{
              fetchDisplay.textContent = `Post Id:${data.id}\nTitle: ${data.title}\nBody:\n${data.body}`
            })
          }catch(error){
            fetchData.textContent = `Error Fetching Data: ${error}`
          }
        }
```

Here we are placing the callback function onto the `store` itself so we can call this from outside the scope of the element and in this case from the `<Button>`. Using a `try-catch` block we ask it to try and do a couple of things if it cant capture the error and spit it out on the screen.

What we are *trying* here is to update the `textContent` of the display with a placeholder, `fetchDisplay.textContent="Loading..."`. This way we can patiently *await* the return data of from our `fetchData()` and gracefully update the contents on the screen, providing a nice UX throughout.  
