---
title:
    page : "Web API's & XElement"
description: 
    page: "Explaining the relationship between XElement and native Web API's"
page: 
    number   : 7
    previous : "../induction/polymorphism"
---

# Web API's & XElement

Interacting with the native Web API's in Astro is one of those exercises that heavily inspired XElement to make it easier and as close to the native API's implementations as possible.

Basically if it is on [MDN](https://developer.mozilla.org/en-US/docs/Web/API), you can use as described.

The browser provides many types of specialized API's. Giving access and allowing for interactions with the browser in more creative and innovative ways. All with the aim of making the browser provide additional functionality to the end-user.

There is a whole raft of standardized browser API's and their subsequent `Event` interfaces that you can freely utilize with `XElement`.

Interacting with these DOM based API's that are located on the `window` or `document`, is as easy to use as it is calling them in the console.

```astro
<Input type='text' id="name" name="name"/>
<Button
    @click=((element)=>{
        name.select()//Selecting the name element content from the Input
        document.execCommand('copy') // Copy the Value to Clipboard
    })    
>
    Copy Name
</Button>
```

The above example demonstrates using two different types of XElements the first being a standard html `<input>` and the other, an interactive `<button>`, that takes the contents of the input and copies it to the clipboard.

As a general rule of thumb if its on the `document || window` you can use it with XElement as you would normally expect.

------
