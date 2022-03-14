---
title:
    page : "XElement/API-@event"
    api  : "@event"
    meta : "Event Driven Execution with XElement"
description: 
    page: "The `@event` methods page . By letting you write your interactions in either JavaScript or Typescript you can do all sorts of wonderful and fully interactive user interactions."
    meta: "XElement takes your HTML element and lets you 'do' things with it on the client. By passing through JS/TS to the client, we let you write client-side interactions without the need for an external UI framework or renderer in Astro"
page: 
    number   : 5
    next     : "../api/event"
    previous : "../api/is"
---

# XElement Event Handlers

XElement is able to react to any `Event` possible.

The vast majority of events are able to be subscribed too by using the `@` decorator followed by the `EventName` of the event you wish the callback function to execute on.

Certain events only work on certain elements.

Given that we wont restrict you from writing out all the 180+ different events known, not including the synthetic ones that can be use, in a single component. We suggest you use the `Events` with some care and diligence.

For a full list of Events that are available and which elements they are fired on, please visit [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)

It works by applying the relevant `add` or `removeEventListeners` in JavaScript over using inline html [`GlobalEventTargets`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers).

We have created additional methods and exposed all the options on customizing the nature of the Event Handler itself, providing you with control over the Event [bubbling and capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) better known as propagation phases for each the event action.

-------

## `@event`

**Type** : `EventTarget`

**Params** : ` Callback(event,store,options={...}) `

The `@event` method is indicates that XElement should listen for that given `Event` executing a callback function when triggered.

```js
@click | @fullscreenchange | @mouseenter | all 180+ Events......
```

You can apply any event you wish to any element, however only certain events apply to certain elements, those that don't apply will silently fail.

You can find out more about these events and where best they apply [here](https://developer.mozilla.org/en-US/docs/Web/Events)

To apply an event on an element simply apply the `@event` method inside your XElement like so:

```astro
---
    const {button: Button} = XElement
---
    <Button @click={()=>console.log('Ive been clicked!')}>
        Press me
    </Button>
```

This behavior comes without any Event capturing properties attached, so it would propagate through the branch that it is attached to.

To direct for the propagation properties you can do by passing in the third optional parameter `options = { capture : true,}`.

You can apply as many events as you wish to on your element, you are not limited at all.

-------

## Arguments

Events accepts three optional arguments: `event`, [`store`](../api/store) and [`options`](#controls--options). It then executes a callback function on the `@event` being targeted.

```jsx
@event={(event,store,options={ ... })=>{
    //Act upon Event
}}
@event={async(event,store,options={ ... })=>{
    ...
    }}
@event={function(event,store,options={ ... })=>{
    ...
    }}
@event={async function(event,store,options={ ... })=>{
    ...
    }}
```

To obtain the XElement inside the scope of the event callback function, you can declare it simply by utilizing `this`

### `event`

Returns the corresponding `EventInterface`

```jsx
@event={(event)=>{
    console.log(event)
}}
```

Depending on which event you wish to react to, XElement would only return the event's `interface` object if it is called.

This is normally the object that would contain the information relating to the `event`.

### `store`

Passing through the store as the second parameter, gives you access to XElements internal Data Object. This is a transient data object that which acts like a global store letting you pass through variables, functions, objects, etc. out from the scope of the method and into other elements.

```jsx
 @event={(element,store)=>console.log(store)} //{}
```

### `this`

Normally inside an event `this` would infer the `global` context. However with XElement `this` would always return a reference to the XElement.

```jsx
@event={()=>{
    console.log(this)
}}
```

*This* should make it easier to write your instructions for the element, simply referencing `this` property or by using [`event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

### `options={}` : Object

Certain Events have certain effects on the DOM, where one event might bubble up through to the parent or another event might be captured only on the element.

To exert your own control over the event itself, you can pass in the third optional argument: `options={}`.

Below describes the options that this can take and their respective inputs. For adding Event Listeners, this is the options that are available to you.

```js
options={
    [capture: Boolean]: true || false,
    [once: Boolean]: true || false,
    [passive: Boolean]: true || false,
    [signal: AbortSignal],
}
```

For `@event:remove` the options are a lot less:

```js
options={
    [capture: Boolean]: true || false,
}
```

------

## Additional Methods

XElement provides you with extra levels of fine-grained control over your `@event` listener.

### `@event:remove`

**Type** : `EventTarget`

**Params** : `Callback(event,store,options={...})`

The `@event:remove` property is the **removal of event listeners** of a given type from an element.

```jsx
@event:remove={() => console.log("Removed the event!")}

@click:remove={() => console.log("Removed the click event!")}
```

This is the equivalent to using [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) inside your JS code.

### `@event:once`

**Type** : `EventTarget`

**Params** : `Callback(event,store,options={...})`

The `@event:once` property instructs XElement that the given `Event` should **fire only once**, removing itself when done.

```js
@event:once={() => console.log('Only Executed Once')}

@click:once={() => console.log('Im a one time deal')}
```

This is an easier way of applying the `options = { once : true }` to your `@event`.

### `@event:prevent`

**Type** : `EventTarget`

**Params** : `Callback(event,store,options={...})`

The `@event:prevent` property followed by an event name indicates that the given function should **prevent the default behavior** of that particular event listeners effects.

```js

@event:prevent={() => console.log('Prevent the events default behavior')}

@click:prevent={() => console.log('Prevent click behavior in full effect')}
```

This convenient additional method is the equivalent to the following in JS:

```js
element.addEventListener('click',(event)=>event.preventDefault())
```

------