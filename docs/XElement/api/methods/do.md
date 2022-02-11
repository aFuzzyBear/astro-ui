---
title: "@do"
meta_title: "Do something special"
meta_description: "Each XElement lets you 'do' client-side interactivity. Here you can'do' whatever you wish, by writing simple vanilla JS/TS that gets scoped and encapsulated to only that XElement" 
description: "XElement lets you take your HTML element and lets you 'do' things with it on the client. By passing through JS/TS to the client, we let you write client-side interactions without the need for an external UI framework in Astro"
order: 1
next_page: './observers'
---
# `@do` : Callback (element, store)

`@do` is the main entry point for applying your code to the top-level of the component.

Here you have access to the `element` itself allowing you to **do** whatever you wish to it.

The `@do` method accepts a callback function which runs when the document has *loaded* and the element is ready.

It can accept the following optional parameters. These allow them to be access and used easily inside the scope of the `@do` function.

```js
@do={(element,store) => {
  console.log(element,store)
}}
```

This is the equivalent to using the Astro `client:load` hydration selector.

Inside the `@do` method is an immediately executed function within the scope of the XElement.

This contains all the logic and actions to within its own microcosm and doesn't leak out.

This also applies for sharing functionality from inside the `@do` method with other methods, we will explore how to do separately  this on our page for `define:vars`, and with the `store`.

In terms of order of execution. It is important to note what gets fired and when.

Naturally any of `XElement`s Observer Methods execute immediately upon the observable event occurring.

For instance, an element being immediately `@visible` will execute before the `@do` method.

Similarly the `@resize` observer will execute before the `@visible`.

Any `@event` handler would be executed only upon that event being triggered, but generally speaking these are executed last.

You cannot link-up multiple `@do's` together, an XElement can only **do** one thing in a sense, but it can *do many things* well.

## Arguments

The `@do` method accepts only two optional arguments that can be passed through into the scope of function body.

```astro
@do={(element, store)=>{}}
```

### `element`

 By passing through the element as an optional parameter, you get to access it and play about with its DOM properties.

### `this`

Refers to directly to the `XElement`

### `store`

By passing through the `store` you get access to the internal `XElement` store object. This is a transient data store that comes with XElement which acts like a *store* letting you pass through variables, functions, objects, etc. to other elements.

### `@do` async

You can use `await` inside your `@do` methods by turning them into `async` functions. This is recommended if you are doing anything like using `fetch` or `import`.

### Notes on usage

The `@do` is the primary function body for each element, it is really a self-invoking function wrapped within the body of the XElement payload.

You cannot export values from it, nor does it have a `return` value. You can write out the body of your payload and control children from within the `@do` method.

Here you can use native `fetch()` to call data from external sources. Use `await import()` to dynamically call scripts to provide additional functionality to your element.