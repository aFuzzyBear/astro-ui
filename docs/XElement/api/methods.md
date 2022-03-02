---
title: "Overview of XElement @Methods"
page_description: "A collective overview of XElements @Methods. Here you can get a good understanding of XElements methods and how to use them, you can then explore each in more detail"
---

# `@` Methods Overview

XElement provides you with nine unique methods for interacting with XElement. These are created and implemented to help you apply your client-side interactivity with little effort.

XElements methods are applied using the `@` prefix. This instructs XElement to pick up on the different attributes being passed and apply the XMagic in the background.

For each of the methods described on this page we have individual pages for each method. Giving you further insight on how and when to use these powerful features.

-----

## `@is` : HTMLElementTag || Fragment

This tells XElement what your element **is** exactly. Is it a HTML Element or a custom DOM Element?

XElement is polymorphic in its nature, meaning that there is more than one way to instruct XElement as to what it is exactly.

We explore the `@is` in more detail [here](/docs/api/methods/is).

-----

## `@do` : Callback ( element, store )

Here you have access to the `element` itself allowing you to **do** whatever you wish to it.

```js
@do={(element,store) => {
  console.log(element,store)
}}
```

The `@do` method accepts a callback function which runs when the element has loaded and document is ready.

The equivalent to using the Astro `client:load` hydration selector.

`@do` is the main entry point for applying your code to the top-level of the component.

Anything you want your XElement to **do**, this is where you would apply your code.

You can find out more about XElement's `@do` method [here](/docs/api/methods/do)

-----

## XElement Observer Methods

`XElement` comes with access to the three main types of `Observer API`'s that are available at your disposal. These are:

- `@resize` : [Resize Observer](/docs/api/methods/resize)
- `@observe` : [Mutation Observer](/docs/api/methods/observe)
- `@visible` : [Intersection Observer](/docs/api/methods/visible)

Each observer is setup and ready for you to provide it a callback function which executes on which ever observation you wish to conduct.

Every observer method also come with the ability to pass through its own options. Providing an extra level of control over the observations that are occurring on the element. These `[options]` vary between observers and we tell you about them in more details in their respective pages.

-----

## Using Events

A Large part of XElement's product offering is that we help to make applying any event listener on any element that you wish. Well within reason.

```js
@click | @fullscreenchange | @mouseenter ...
```

Similar to using the XElement Observer Methods, we allow you to pass through additional options to control the behavior of the `Event`. You can add and remove event listeners, control their propagation and bubbling behavior.

For further guidance on using Events with XElement its own dedicated [API page](/docs/api/methods/event).

-----

## XAnimate 


-----

## Import


-----

## Fetch


-----

## define:vars


-----

## Store