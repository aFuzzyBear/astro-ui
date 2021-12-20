# Client Side Interactivity


`XElement` allows you to write your own client-side code in Astro for an HTML element, in either JavaScript or TypeScript. This code is packaged as independent, async `<script type="modules">` modules which are scoped to the element in question.

This non-blocking, asyncrhonous approach allows the DOM and all of its contents to be loaded first, then the JS is executed last. Each `XElement` is rendered at build time, and the page has a fast time to interactivity.

Since the payload is scoped to each element, the browser handles the majority of the work on the client-side, without any additional overhead cost of having to render everything out in JavaScript, or send down render files to the client.

This is how XElement gives you the ability to create interactive, web standard, Astro compliant, HTML elements without the use of any external framework or library.
