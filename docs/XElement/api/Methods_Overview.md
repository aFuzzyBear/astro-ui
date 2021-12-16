
# `XElement` Methods Overview

Here we provide you with cursory overview of the different methods that you can employ within your `XElement` to send your payload to the Client.

We are looking to add individual pages and more content to each, with better examples on how to use them, and in which circumstances.

-----

## `@do` : Callback ( element, store )

Here you have access to the `element` itself allowing you to **do** whatever you wish to it.

```js
@do={(element,store) => {
  console.log(element,store)
}}
```

The `@do` method accepts a function which runs when the element has loaded and document is ready.

The equivalent to using the Astro `client:load` hydration selector.

`@do` is the main entry for applying your code to the top-level of the component.

Anything you want your `XElement` to**do**, this is where you would apply your code.

To find out more about using the `@do` method please visit our API page discussing this subject matter in more detail.

-----

## XElement Observer Methods

`XElement` comes with access to the three main types of `Observer API`'s that are available at your disposal. These are:

- `@resize` : Resize Observer
- `@observe` : Mutation Observer
- `@visible` : Intersection Observer

Each observer is already setup for you, you just need to provide it a function to execute on whatever condition you set.

They also come with the ability to pass through your own options to provide an extra level of control over the observations on the element. These `[options]` vary between observers and we tell you about them in more details in their respective pages.

### `@resize` : void ( )

```js
@resize={() => {
  console.log("I've changed size!")
}}
```

This is equivalent to Astro's `client:media` hydration selector.

`@resize` come with only the option to have the observer fire only *once*, `@resize:once`, disconnecting and removing itself from the Element

For further guidance on using `@resize` observer with `XElement` please visit our dedicated API page on this subject matter.

### `@observe` : void ( )

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```
For further guidance on using `@observe` observer with `XElement` please visit our dedicated API page on this subject matter.


### `@visible` : void( )

This indicates that the given function should run when the element is visible to the viewport, or not.

```js
@visible={() => {
  console.log('Im Visible and Active')
}}
```

This is equivalent to Astro's `client:visible` hydration selector.

You can observe the `XElement` is visible to the viewport. You can even execute your code once `@visible:once`, ideal for lazy loading.

We also extend you the control you have over this observer to let you input additions `options={...}`. Giving you finer precision to your observations.

For further guidance on using `@visible` observer with `XElement` please visit our dedicated API page on this subject matter.

-----

## Using Events

A Large part of `XElement`s product offering is that we help to make applying any event listener on any element that you wish. Well within reason.

```js
@click | @fullscreenchange | @mouseenter ...
```

Events accept three arguments and executes a callback function.

```astro
@event={(event,store,options={...})=>{
  // Do something in here
}}
```

Like with using the `XElement` Observer Methods, we allow you to pass through additional options to control the behaviour of the `Event`. You can add and remove event listeners, control their propagation and bubbling behaviour.

For further guidance on using Events with `XElement` please visit our dedicated API page on this subject matter.

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