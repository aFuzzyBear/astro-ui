# XElement Observers

`XElement` comes with access to the three main types of `Observer API`'s that are available at your disposal. These are:

- [`@resize` : Resize Observer](#resize)
- [`@observe` : Mutation Observer](#observe)
- [`@visible` : Intersection Observer](#visible)

Each observer is already setup for you, you just need to provide it a function to execute on whatever condition you want to observe.

They also come with their own set of options to provide an extra level of control over the observations made on the element.

These `[options={}]` vary between observers, for instance, the 'Resize Observer' accepts no additional properties, where as the 'Mutation Observer'  can accept up to seven different configuration properties.

There is more information on each observer and their respective properties together in their allotted sections.

## Arguments

Observers are written out in the manner displayed below.

```astro
@Observation={(ObservableEvent?, store?, options={}?)=>{
    // Act upon an observation
}}
```

Observers can accept the following optional arguments:

- `Observation`: This is the observable `event` that is attached to the element.
- [`store`](Store): Provides access to XElements internal data object `{}`
- `options={...}`, To pass additional configuration details to the observation.

Each argument is optional, and each parameter passed **must** be in their respected format.

Ever Observation executes a callback function on the client in accordance to each `observableEvent` that is being fired.

### `this`

You would be interested to know that `this` when used for each observer returns only the element that it is targeted on.

This makes it easier to access only `this` xelement DOM properties.

-----

## `@visible` : CallBack ( event, store, options={ ... })

The `@visible` is a `XElement`'s [Intersection observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) method.

This indicates that the given function should only run when the element is visible to the viewport, or not.

```js
@visible={() => {
  console.log('Im Visible and Active')
}}
```

This is equivalent to Astro's `client:visible` hydration selector.

### `@visible:once` : CallBack ( event, store, options={ ... } )

`@visible:once` method only runs once when it becomes visible on the viewport, it then removes and disconnects itself from the Element.

```js
@visible:once={() => {
  console.log('See me Once, run me Once')
}}
```

### `@visible={(,,options={...})}` : Object

The `@visible` observer is setup by default to accept only the basic values that the observe provides.

These can be overwritten by passing in your own set of controls that you wish to exert over the xelement.

```astro

options={
  [root : HTMLElement] : document.querySelector('#something')
  [rootMargin : string] : "10px 10px 10px 10px" || "10%",
  [threshold : number[]] : [0.25,0.5,1]
}
```

-----

## `@resize` : CallBack ( event, store )

The `@resize` is a `XElement`'s [Resize observer](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) method.

This allows you to preform interactions upon the element as its own dimensions change.

Firing a callback when changes to either its content or border box sizes occurs.

```js
@resize={() => {
  console.log("I've changed size!")
}}
```

This is equivalent to Astro's `client:media` hydration selector.

### `@resize:once` : CallBack ( event, store )

The `@resize:once` method only runs **once** when the element has been resized only *once*, it then would remove and disconnect itself from the Element.

```js
@resize:once={() => {
  console.log("I've only changed size Once!!")
}}
```

#### Note

Of all of our `@` decorators the `@resize` method is the only one that name-squats on another registered event-target: `document.resize`.

The reason for this was that the `@resize` functionality is not applied to the the document instead it is applied directly to the element in the form of the `ResizeObserver API`, reflecting this namespace to keep true with other observers we felt to be apt.

You can still utilize the `document.resize` event target by using it inside your callback functions, for example:

```astro
@do={()=>{
  document.addEventListener('resize',()=>{})
}}
```

-----

## <a href="#observe">`@observe` : CallBack ( event, store, options={ . . . } )</a>

The `@observe` is a `XElement`'s [Mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) method.

This runs whenever there is a DOM Mutation change to the Element or its sub-components, such as: Attributes, Children, Modifications made to the Components Subtree and also any data changes.

By default it would observe all the aforementioned attributes unless specified, then it would only observe that one property.

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```

### <a name="observeOnce">`@observe:once` : CallBack ( event, store, options={ . . . } )</a>

The `@observe:once` method only runs **once** when the element has been observed only the *once*, it then removes and disconnect itself from the Element.

```js
@observe={() => {
  console.log("Something's Changed with the element's properties")
}}
```

### <a name="observeOptions"> `options={...}` : Object { . . . }</a>

With the `@observe` method you can interact and change the options as you see fit.

Here are the following options that it accepts and the manner it is expressed.

```astro
@observe=((observation,store,options={
  [subtree:Boolean]:'true'||'false' // Optional, true by default  
  [childList:Boolean]:'true'||'false' // Optional, true by default  
  [attributes:Boolean]:'true'||'false' // Optional, true by default  
  [attributeFilter:number[]]:[0,<,x,<,1] // Optional,   
  [attributeOldValue:Boolean]:'true'||'false' // Optional, false by default  
  [characterData:Boolean]:'true'||'false' // Optional, false by default  
  [characterDataOldValue:Boolean]:'true'||'false' // Optional, false by default  
})=>{})

```

By default the `MutationObserver` requires at least one of the aforementioned options, we have instead turned on three of the most common options by default for you.

-----


## <a name="furtherInfo">Further Information:</a>

For further information on the using the Intersection Observer:
- [MDN : Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)