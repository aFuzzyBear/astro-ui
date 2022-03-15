# Client Side Interactivity

Client side interactivity in Astro can be achieved in a number of ways, and when we talk about 'client-side interactivity', we are referring to using JS on the browser.

Here we will be discussing how this is achieved in Astro presently, and how XElement helps to add to the existing developer experience to make this process of applying client-side interactions easier.

## Astro & UI Frameworks

Astro being a meta-framework lets you create statically generated content on the server with islands of interactivity using a mix of UI frameworks, to display high quality interactions on the client.

This process is very unique as it can let you apply on a single page for instance a React component, alongside a Vue component and if you wish to have it alongside a Svelte component.

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

This example component demonstrates this sharing of multiple different UI Frameworks in an `.astro` file. Using partial hydration: `client:*` directives we instruct Astro when we wish the JS for these components to be sent down and activated on the client. You can read more about this on Astros doc site where they discuss [framework components](https://docs.astro.build/en/core-concepts/framework-components/) and [partial hydration](https://docs.astro.build/en/core-concepts/partial-hydration/) in more detail

Where as this developer experience helps when it comes to the cross reusability of existing UI components within Astro projects. Applying client-side interactivity natively in Astro is another experience entirely.

## JS in Astro

The developer authoring experience in Astro is much better and more powerful than other meta-frameworks that exist. And we do find more ways of removing parts from our UI frameworks into Astro.

This really speaks to Astro's powerful templating abilities, but mostly it comes from the ability to suitably collocate many parts of the component logic together in a single file. From the Server-side behavior within the Astro Front-matter, to the HTML-JSX syntax for templating out the component, to having the components `<style>` also located within the same scope of the file.

JS in Astro is equally powerful with this collocating of `<script>` within your components.These have the ability to be hoisted and bundled with Astro on each page they are being used on. Giving you the ability to apply client-side interactions in this way.

```astro
---
// Server-side logic
// Ran at build-time
const answer = await fetch('deepthought.ai')
---
<style>
/* Apply the components styles in here
   Either in CSS, SASS, SCSS, LESS, and a few more
*/
</style>

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

This synergistic cohabitation of different parts of the component creation logic helps make Astro a truly wonderful meta-framework for Front-End development.

For us authors of XElement, we wished too of made this experience that one step better and more easier, friendlier and simpler for other developers using Astro.

## Interactivity with XElement

XElement takes applying writing your own client-side code in Astro to a whole new level of experience for developers.

XElement is there to enhance existing HTML elements, using either **JavaScript** or **TypeScript** all without the need for using a UI framework or client-side renderer.

The above example where we demonstrated the collocation of all parts of an `.astro` file. This would be a similar implementation with XElement.

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

Each XElement is rendered at build time, with a total cost of 98bytes per element of XElement boilerplate. Resulting in the page having perhaps one of the fastest fast time to interactivity comparative to the other UI frameworks as a result of our methods.

All client-side code is packaged as independent, async `<script type="modules">` modules which are scoped directly to the element in question.

This non-blocking, asynchronous approach allows the DOM and all of its contents to be loaded first, then the XElement client-side JS is executed directly afterwards, prior to any execution of partially hydrated content.

Since the payload is scoped directly to each element is pure vanilla JS, we can let the browser handle the majority of the work, without any additional overhead cost of having any render and hydration processes involved.

This is how XElement gives you the ability to create interactive, web standard, HTML elements without the use of any external framework or library.

XElement only has a dozen methods and API's in total that are setup to help provide performant mechanisms to help deliver the client-side interactions that is demanded of modern-day web applications.


