# XElement

**XElement** allows you to generate any type of specialised Web Component from within Astro from a single interface.

You can choose *when* to run JS on the Client-side, whether it be when the document is ready or on any given event.

Respecting Astro's unique approach to Island's Architecture, **XElement** expands this concept with some innovative ways to work with your standard Elements, with some really surprising results.

--------------------------------------------------------------------

## Getting Started

Import **XElement** from from npm:

```bash
npm i astro-xelement -D
```

Import into your Astro file:

```astro
---
  import XElement from 'astro-xelement'
---
```

There is no additional dependencies that are required to operate XElement. This is fully Astro compliant.

--------------------------------------------------------------------

## How to use

XElement directly ties in JS to your HTML Element directly, this gives you complete granular control over the Element with JS directly from a single interface. And it is really simple to use, take a look over some of these examples.

```astro
---
import XElement from '../components/XElement.astro'
---
<XElement @is="h1" class="joy">Here Comes A Title</XElement>
<!-- Outputs -->
<h1 class="joy">Here Comes A Title<h1>
```

In this example, we are representing a article heading as a page title via JS.

```astro
---
import XElement from './XElement.astro'
---
<XElement @is="h1"
    @once={element => {
      document.title = `${element.textContent} - Pushed to the Page Title via JS`
      }} >
    Some Article Title
    </XElement>
<!-- Output -->
<title>Some Article Title - Pushed to the Page Title via JS</title>
```

As another example, it can be used to handle a click event in JS on the Element.

```astro
---
import XElement from './XElement.astro'
---
<XElement
  @is="button"
  @click={element => { console.log('clicked')}}>
    Button: Clickable
</XElement>
<!-- Outputs to Console -->
"Clicked"
```

The next example is the pinnacle of all framework examples, setting up a counter.

```astro
---
import XElement from "./XElement.astro";
---

<XElement @is="div">
  <XElement @is="button"
    @once={() => {
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
</XElement>

```

👆 This works 🤯

--------------------------------------------------------------------

## Properties

This is the shape of the `XElement` props:

```ts
/** @typedef Tag - Valid HTML Tag names */
type Tag = keyof HTMLElementTagNameMap | (string & {})

export interface Props {
	'@is': Tag
	...attr?: any
}
```

### `Tag` : HTMLElementTagName

Here we allow you to generate spec-compliant semantic HTML tag names for your Web Element. This is provided from TS `index.d.ts` type bindings. A full list can be found [here](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)

### `@is` : Tag

The `@is` property accepts a string indicating the type of element being created. By default, it is a `span`.

```jsx
 @is = "div" | "p" | "a" | "audio" | "img" | "video" ...
```

This is a necessary property to allow `XElement` to generate the HTML Element that you wish to consume for you component. For further information on HTML Elements and their representations, please visit [MDN-Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### `attr` : HTMLAttributes

Can utilize as many of the [HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes) that are registered for the element created by the `@is` property. You can use  `aria-` and `data-` attributes, specify the elements `id` and apply `class` and inline `style` attributes.

--------------------------------------------------------------------

## `XElement` Client-Side JS

Now the purpose of `XElement` is to help facilitate generating and consuming Astro compliant, Web standard HTML Elements.

In order to respect Astro's Island's ethos, and hydration policies `XElement` has been structured in such a way that the JS sent to the client is packaged as modules and only attached to the element in question, and any children it may inherit.

Since the JS is scoped directly to each `HTMLElement` in a way not previously possible it allows you to specify when you wish to run your script, and how.

This can be done either on an event handler or by providing a payload to run on certain conditions.

These are the following methods to apply client-side JS using `XElement`:

--------------------------------------------------------------------

### `@once` : void

The `@load` property accepts a function which runs when the element has loaded and document is ready.

```js
@load = {(element)=>{
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

The `@observe` property runs whenever there is a DOM Mutation change to the Element or its sub-components.

```js
@observe={()=>{
  console.log("Something's Changed")
}}
```

### `@observe:all` : void

This allows to observe any changes that are made to the Elements: Attributes, Children, Modifications made to the Components Subtree and also its data.

```js
@observe:all={()=>{
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
@observe:attr={()=>{
  console.log("Something's Changed with the element's children")
}}
```

### `@observe:sub` : void

This allows to observe any changes that are **only** made to the Elements subtree

```js
@observe:attr={()=>{
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

The `@event:useCapture` property followed by an event name indicates that the given function should listen to the given event name, preventing its default behaviour.

```js
@click:prevent={()=>console.log('Initiate Capture of the Event')}
```

--------------------------------------------------------------------

## Animate `XElement`

`XElement` allows you to animate the element directly by specifying your animations and key-frames as normal when utilising the standard [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

```astro
<XElement @is="p"
  @animate={[
    // keyframes
  { transform: 'translateX(0px)' },
  { transform: 'translateX(300px)' }
]}
  @animateOptions={
    // timing options
    duration: 1000,
    iterations: Infinity
  }
  >
  See, I'm a Text in motion
</XElement>
```

--------------------------------------------------------------------

## Credits

This project owes a tremendous amount of gratitude and thanks to [jonathantneal](https://github.com/jonathantneal) for supporting and guiding this whimsical fantasy into creation.
