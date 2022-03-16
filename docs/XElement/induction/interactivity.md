# Client Side Interactivity

Client side interactivity (using JS on the browser) in Astro can be achieved in a number of ways.

Let's see how this is currently achieved in Astro, and how XElement gives you an additional tool to make applying client-side interactions easier.

## Astro & UI Frameworks

Astro lets you create statically generated content on the server with islands of interactivity using a mix of UI frameworks.

This process is unique among current website frameworks, as it lets you apply, for example, a React component alongside a Vue component and even alongside a Svelte component, on a single page.

```astro
---
import MyReactComp from './MyReactComp.jsx'
import MyVueComp from './MyVueComp.vue'
import MySvelteComp from './MySvelteComp.svelte'
import MySolidComp from './MySolidComp.tsx'
---
<div class="ui-friends">
    <MyReactComp client:load />
    <MyVueComp client:idle />
    <MySvelteComp client:visible />
    <MySolidComp client:visible />
</div>
```

This example demonstrates multiple different UI Frameworks, each independently sending JavaScript to the client at different times, in a single `.astro` component file. 

> Read more about Astro's [partial hydration](https://docs.astro.build/en/core-concepts/partial-hydration/) of [framework UI components](https://docs.astro.build/en/core-concepts/framework-components/).

This helps developers reuse existing UI components, tools and experience from other projects within Astro. But, it does not achieve client-side interactivity natively in Astro.

## JS in Astro

The developer authoring experience in Astro is much better and more powerful than other meta-frameworks that exist. Astro is able to avoid shipping parts of our UI frameworks to the client, reducing the JavaScript load and improving performance.

Astro can also use a `<script>` within your components. These have the ability to be hoisted and bundled on each page, giving you the ability to also apply client-side interactions via JavaScript in this way.

```astro
---
// Server-side logic
// Ran at build-time
const answer = await fetch('deepthought.ai')
---

<!-- Component HTML Template goes here -->
<div id="deepthought">
    <h1>The answer is : {answer}</h1>
    <button id="btn">Click Me</button>
<div>

<!--  -->
<script>
// Any client side JS would go here
console.log(document.querySelector('#deepthought'))

const button = document.querySelector('#btn')
  
button.addEventListenter('click',()=>console.log('Clicked'))

</script>
```

XElement makes this experience one step better, easier, friendlier and simpler for developers using Astro.

## Interactivity with XElement

XElement takes writing your own client-side code in Astro to a whole new level of experience.

XElement enhances existing HTML elements, using either **JavaScript** or **TypeScript**, all without the need for any UI framework or client-side renderer.

Let's see how we can recreate the above `.astro` file's functionality with XElement:

```astro
---
import XElement from 'astro-xelement'

const { Div , Button } = XElement

const answer = await fetch('deepthought.ai')
---
<Div @do={(element)=>console.log(element)}>
    <h1>The answer is : {answer}</h1>
    <Button @click={()=>console.log('clicked')}> Click Me </Button>
<Div>
```

Each XElement is rendered at build time, with a total cost of 98bytes per element of XElement boilerplate, perhaps one of the fastest fast time to interactivity among UI frameworks!

All client-side code is packaged as independent, async `<script type="modules">` modules which are scoped directly to the element in question.

This non-blocking, asynchronous approach allows the DOM and all of its contents to be loaded first. Then, the XElement client-side JS is executed directly afterwards, prior to any execution of partially hydrated content.

Since the payload scoped directly to each element is pure vanilla JS, we can let the browser handle the majority of the work, without any additional overhead cost of having render and hydration processes involved.

This is how XElement gives you the ability to create interactive, web standard, HTML elements without the use of any external framework or library.

XElement's methods and APIs have been designed to provide exceptionally performant mechanisms that can still deliver the client-side interactions demanded of modern-day web applications.


