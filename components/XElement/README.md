![Galaxy fonts](https://see.fontimg.com/api/renderfont4/GD6D/eyJyIjoiZnMiLCJoIjo3MSwidyI6MTAwMCwiZnMiOjcxLCJmZ2MiOiIjMkYyNzY2IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WEVsZW1lbnQtbmV4dA/atures-500-personal-use-only.png)

> ⚠️ XElement-next is still a in early beta, stable, and welcome to testing.

`XElement` is an Astro only, **HTML Web Component Generator**.

It lets you to create any type of Custom HTML Web Components to use within Astro, from a single interface.

`XElement` lets you choose *when* to run JS on the client-side, whether it be when the document is ready or on any given event, or on any type of observer.

<!-- It can allow for **Data** to be passed between parent and children and vice versa. -->

Supports native features such as; Browser `fetch` API, and Web `animation` API. If its on the `window` you can use it.

You can even directly render content within the  **Shadow DOM** and more.

Respecting Astro's unique approach to Island's Architecture, `XElement` expands this concept in some innovative ways to work with your collection of web components, with some really surprising results.

--------------------------------------------------------------------

## Compatability

`XElement-next` is supported on all versions of  Astro >`v0.21`

This particular version of XElement will not be supported on Astro versions <`0.20.12`.

--------------------------------------------------------------------

## Getting Started

Import `XElement` from from npm:

```bash
npm i astro-xelement-next -D
```

Import into your Astro file:

```astro
---
  import XElement from 'astro-xelement-next'
---
```

`XElement` components are *polymorphic* in the way its implemented.

This means that you can specify in a number of different ways how to use `XElement` for creating and designing your own components.

--------------------------------------------------------------------

## How to use

`XElement` lets you generate simple HTML Elements and complex Web-Components with JS from a single place. This provides the component with a form of *Element encapsulation* for fine-grained interactivity and dynamism.

It'll let you choose how to directly tie in JS to your HTML Element.

And it is really simple to use, take a look over some of these examples.

```astro
---
  import XElement from 'astro-xelement-next'
---
<XElement @is="h1" class="joy">Here Comes A Title</XElement>
<!-- Outputs -->
<h1 class="joy">Here Comes A Title<h1>
```

In this example, we are representing an article heading as a page title via JS.

```astro
---
  import XElement from 'astro-xelement-next'
---
<XElement @is="h1"
  @do={element => {
    document.title = `${element.textContent} - Pushed to the Page Title via JS`}} >
      Some Article Title
</XElement>

<!-- Outputs -->
<h1>Some Article Title</h1>
<!-- JS Outputs -->
<title>Some Article Title - Pushed to the Page Title via JS</title>
```

Another example, here it can be used to handle a click event in JS on the Element.

```astro
---
  import XElement from 'astro-xelement-next'
---
<XElement.button
  @click={element => { console.log('clicked')}}>
    Button: Clickable
</XElement.button>
<!-- Outputs -->
<button>Button: Clickable</button>
<!-- Outputs to Console -->
"Clicked"
```

The next example is the pinnacle of all framework examples, setting up a 'Counter' HTML Web Component.

```astro
---
  import XElement from 'astro-xelement-next'
  const {Counter} = XElement //Creating a named Web Component
---

<Counter>
  <XElement.button
    @do={() => {
      //JS in Here
      let count = 0
      this.onclick = () => {
        counter_output.textContent = ++count
      }
    }}>
    Increment
  </XElement>
    &nbsp; <!-- HTML In Here -->
  <span id="counter_output"></span>
</Counter>

<!-- Outputs -->

<counter>
  <button>Increment</button>
  &nbsp;
  <span><span id="counter_output"> 0 </span>
</counter>
```

👆 A Working HTML Counter Web Component 🤯

--------------------------------------------------------------------

## Properties

This is the shape of the `XElement` props:

```ts
/** @typedef Tag - Valid HTML Tag names */
type Tag = keyof HTMLElementTagNameMap | (string & {})

export interface Props {
   '@is': Tag,
   shadowroot,
...attrs?: any
}
```

### type `Tag` : HTMLElementTagName | string

Here we allow you to generate spec-compliant semantic HTML tag names for your Web Element. This is provided from TS `index.d.ts` type bindings. A full list can be found [here](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)

The `Tag` can be extended to incorporate custom Tags, allowing you to specify and create HTML compliant Web Components, that render to the DOM.

### type `@is` : Tag

The `@is` property accepts a string indicating the type of element being created. By default, it is a `span`.

```jsx
 @is = "div" | "p" | "a" | "audio" | "img" | "video" ...
```

This is a necessary property to allow `XElement` to generate the HTML Element that you wish to consume for you component.

Since `XElement` is polymorphic in its nature, it does need to know what type of Element it is to generate. There are three ways to inform `XElement` of the *type of element* its to create.

```astro

<!-- (1) using `@is`-->
 <XElement @is="div"></XElement>

<!-- (2) using `.` notation-->
 <XElement.button></XElement.button>

<!-- (3) using a `named` reference -->
---
const {Container} = XElement
---
<Container></Container>
```

For further information on HTML Elements and their representations, please visit [MDN-Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### type `attrs` : HTMLAttributes

Can utilize as many of the [HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) that are registered for the element specified.

You can use the full compliment of associated `aria-` attributes, access and modify the `data-` attributes, specify the elements `id` and apply `class` and inline `style` attributes.

--------------------------------------------------------------------

## `XElement` Client-Side JS

Now the purpose of `XElement` is to help facilitate generating and consuming Astro compliant, Web standard HTML Elements, that need JS without the use of an external framework.

In order to respect Astro's Island's ethos, and hydration policies `XElement` has been structured in such a way that the JS sent to the client is packaged as modules, attached only to the element in question, and any children it may inherit.

Since the JS is scoped directly to each `HTMLElement` in a way not previously possible it allows you to specify when you wish to run your script, and how.

This can be done either on an event handler or by providing a payload to run on certain conditions.

These are the following methods to apply client-side JS using `XElement`:

--------------------------------------------------------------------

### `@do` : void

The `@do` property accepts a function which runs when the element has loaded and document is ready.

```js
@do = {(element)=>{
  console.log(element)
}}
```

This is the equivalent to using the Astro `client:load` hydration selector.

--------------------------------------------------------------------

### `@visible` : void

The `@visible` property indicates that the given function should run when the element is visible to the viewport.

```js
@visible={()=>{
  console.log('Im Visible and Active')
}}
```

This is equivalent to Astro's `client:visible` hydration selector.

### `@visible:once` : void

This `@visible:once` property only runs **once** when it becomes visible on the viewport, it then removes and disconnects itself from the Element.

```js
@visible:once={()=>{
  console.log('See me Once, run me Once')
}}
```

--------------------------------------------------------------------

### `@resize` : void

The `@resize` property fires a callback whenever there is a change to `XElement`'s dimensions, either its content or border box.

```js
@resize={()=>{
  console.log("I've changed size!")
}}
```

This is equivalent to Astro's `client:media` hydration selector.

### `@resize:once` : void

The `@resize:once` property only runs **once** when the element has been resized only *once*, it then would remove and disconnect itself from the Element.

```js
@resize:once={()=>{
  console.log("I've only changed size Once!!")
}}
```

--------------------------------------------------------------------

### `@observe` : void

The `@observe` property runs whenever there is a DOM Mutation change to the Element or its sub-components, such as: Attributes, Children, Modifications made to the Components Subtree and also its data. By default it would observe all the aforementioned attributes unless specified.

```js
@observe={()=>{
    console.log("Something's Changed with the element's properties")
}}
```

### `@observe:attr` : void

This allows to observe any changes that are **only** made to the Elements Attributes

```js
@observe:attr={()=>{
  console.log("Something's Changed with the element's attributes")
}}
```

### `@observe:children` : void

This allows to observe any changes that are **only** made to the Elements children

```js
@observe:children={()=>{
  console.log("Something's Changed with the element's children")
}}
```

### `@observe:sub` : void

This allows to observe any changes that are **only** made to the Elements subtree

```js
@observe:sub={()=>{
  console.log("Something's Changed with the element's subtree")
}}
```

### `@observe:data` : void

This allows to observe any changes that are **only** made to the Elements character data

```js
@observe:data={()=>{
  console.log("Something's Changed with the element's character data")
}}
```

--------------------------------------------------------------------

### `@ANY_EVENT` : EventTarget

The `@event` property followed by an event name indicates that the given function should listen to the given event name.

```js
@click | @fullscreenchange | @mouseenter ...
```

### `@ANY_EVENT:once`

The `@event` property followed by an event name that the given function should listen to the given event name and fire only once, removing itself when done.

```js
@click:once={()=>console.log('Im a one time deal')}
```

### `@ANY_EVENT:prevent`

The `@event:prevent` property followed by an event name indicates that the given function should listen to the given event name, preventing its default behaviour.

```js
@click:prevent={()=>console.log('prevent default behaviour in full effect')}
```

### `@ANY_EVENT:useCapture`

The `@event:useCapture` property followed by an event name indicates that the given function should listen to the given event name, capturing the bubbling behaviour of that event to the element.

```js
@click:useCapture={()=>console.log('Initiate Capture of the Event')}
```

### `@ANY_EVENT:remove`

The `@event:remove` property followed by an event name to remove the registered event listener of that type,

```js
@click:remove={()=>console.log('Initiate Capture of the Event')}
```

--------------------------------------------------------------------

## `@animate` && `@animateOptions`

`XElement` allows you to animate the element directly by specifying your animations and key-frames as normal when utilising the standard [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

Use the `@animate` to provide a list of keyframes to animate over. `@animateOptions` is an Object which contains the timing options for the animation. These two are used in concert with each other.

```astro
<XElement @is="p"
  @animate={[
    // keyframes
  { transform: 'translateX(0px)' },
  { transform: 'translateX(300px)' }
  ]}
  @animateOptions={
    {
      // timing options
      duration: 1000,
      iterations: 'Infinity'
    }
  }
  >
  See, I'm a Text in motion
</XElement>
```

--------------------------------------------------------------------

## `Fetch()`

XElement also supports client-side's native `fetch()` API through `Fetch()`. Letting you to `GET` data from the internet, letting you `POST` your form's and data back to your servers, all directly from the Element itself.

```astro

<XElement 
  @is="button"
  @click={()=>{
   Fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log("Here is the Fetched Data", json))
  }}
>
```

--------------------------------------------------------------------

## Dynamic Imports

XElement allows you to **dynamically import** scripts into your Element.Either from the file system using `Astro.resolve('path/to/file.mjs)`, or via a URL `http://packageRegistry.com/somePackage.{browser | esm}.js`.

Since `XElement` utilises `ES Modules`, it lets you use other module script files `.mjs`. This allows you to `export` the Elements logic from one place and *dynamically* `import` them to work within the browser, for more information on [`.js` vs `.mjs`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aside_%E2%80%94_.mjs_versus_.js).

You can also **import third party modules** from around the ecosystem providing they are `esm` compliant, this allows you to have a form of *package-manager-less* type of development.

Not needing to install packages to use with your `XElement`, instead just pulled using an URL from sources such as:  [Skypack](https://www.skypack.dev/), [jspm.io](https://jspm.org/), [jsDelivr](https://www.jsdelivr.com/) or [esm.sh.](https://esm.sh/).

This way you can load and consume any from of packages or scripts from npm sources without installing them to `node_modules` first.

### `@imports` : Record <"ImportName","path">

You can import any exported module, object, function or variable from any file located on the file system or externally.

`@imports` can accept as many different imports as needed. There is a few ways to specify declaring the manner in which the import occurs.

```jsx
// Imports take the following types shape
@imports={
  {
    //Import defaults
    "ImportNS:default":Astro.resolve('../functions/moduleWithDefault.mjs')
    //Import Multiple Modules
    "ImportNS,SecondaryImport,....": Astro.resolve('../functions/namedExportsModule.mjs'),
    //Reassign the Import Namespace
    "NewReference:ImportNS": Astro.resolve('../functions/namedExportsModule.mjs'),
    //Multiple reassignments and imports from external source
    "a:modA,b:modB,modC":"https://skypack.dev/somePkg/file.esm.js?url",
  }
}
```

This will then provide the imports and its referenced `namespaces` to the scope of the `XElement` that it is being consumed in.

### `@import:http` : string< URL >

To import directly from an external resource you can do so using its own `@` handler:

```jsx
@import:https={'https://cdn.skypack.dev/canvas-confetti'}
```

### `@import:key` : string

This allows you to attach any external scripts Sub-Resource Integrity Tag to the `<script>` tag as an attribute. This has to comply with the `sha` specifications for handling [SRI](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) keys.

```jsx
@import:key="sha256-2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
<!-- renders -->
<script src="https://cdn.com/some/file.js" 
    integrity="sha256-2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
    crossorigin="anonymous"
    referrerpolicy="origin"
    >

```

### Confetti Example

This example encapsulates `XElement` within a Confetti Web Component, here we are calling the `canvas-confetti` module via a URL import. We then can call the `confetti()` directly within the `@click` event handler.

```astro
<Confetti class=".confetti"
        @imports:={"confetti": "https://cdn.skypack.dev/canvas-confetti"}
>
  <ConfettiButton @is='button' class=".btn"
      @click={()=>confetti()}
  >
      Confetti
  </ConfettiButton>
</Confetti>

```

--------------------------------------------------------------------

<!-- TODO:Write up about SHADOWROOT  -->

--------------------------------------------------------------------

--------------------------------------------------------------------

<!-- TODO:Write up about Data Binding  -->

--------------------------------------------------------------------

## Credits

This project owes a tremendous amount of gratitude and thanks to [jonathantneal](https://github.com/jonathantneal) for supporting and hacking away, helping to guide this whimsical fantasy into creation.
