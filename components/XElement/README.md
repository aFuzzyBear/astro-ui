
# XElement

The **XElement.astro** component lets you create any element, conditionally run code with that element in client-side JavaScript, either when the document is ready or on any given event.

An as example, it can be used create a heading.

```astro
---
import XElement from '../components/XElement.astro'
---
<XElement @is="h1">Heading: Level 1</XElement>
```

As another example, it can be used to represent a heading available to JS.

```astro
---
import XElement from '../components/Ref.astro'
---
<XElement @is="h1" @once={element => {
  document.title = element.textContent
}}>Heading: Level 1: Available to JS</XElement>
```

As another example, it can be used to handle a click event in JS.

```astro
---
import XElement from '../components/Ref.astro'
---
<XElement @is="button" @click={element => {
  console.log('clicked')
}}>Button: Clickable</XElement>
```

## Properties

### @is

The `@is` property accepts a string indicating the type of element being created. By default, it is a `span`.

### @once

The `@once` property accepts a function with a reference the DOM Node for this element which is run when the document is ready.

### @ANY_EVENT

The `@` property followed by an event name indicates that the given function should listen to the given event name.

### @ANY_EVENT:once

The `@` property followed by an event name that the given function should listen to the given event name once.

### @ANY_EVENT:prevent

The `@` property followed by an event name indicates that the given function should listen to the given event name, preventing its default behavior.

### @visible

The `@visible` property indicates that the given function should run when the element is visible.