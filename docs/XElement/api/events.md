---
title: "XElement Event Handlers"
api_title: "@events"
meta_title: "XElement-@events"
description: "Overview on XElement's Event Handlers, gain a better insight on how XElement lets you use any* Event behaviors that you wish your XElement to react to" 
page_number: 3
next_page: "/docs/api/methods/animate"
previous_page: "/docs/api/methods/observers"
---

# XElement Events Handlers

XElement is able to react to any `Event` possible.

The vast majority of `Event`'s are able to be subscribed to by using the `@` decorator followed by the 'name' of the event you wish the payload to execute on.

Certain events only work on certain parts of the document.

Given that we wont restrict you from writing out all the 180+ different events known, not including the synthetic ones that can be use. We suggest you use the `Events` with some diligence.

Any non applicable events themselves will fail silently.

It is best to only apply events outside of any [`customEvent`](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events) that might be declared in the [`@do`](/docs/api/methods/do) method, to the right element that you are consuming.

This would help you react to the right events on the element without to much difficulty.

For a full list of Events that are available and which elements they are fired on, please visit [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)

It works by applying the relevant `add` or `removeEventListeners` in JavaScript over using inline html [`GlobalEventTargets`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers).

We expose some options on customizing the nature of the Event Handler itself, providing you with control over the Event [bubbling and capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture) phases of the event action.

## Arguments

Events are written out in the manner displayed below.

```js
@event={(event, store, options={option:value})=>{
    // Act upon event
}}
@event={async(event, store, options={option:value})=>{ }}
@event={function(event, store, options={option:value})=>{ }}
@event={async function(event, store, options={option:value})=>{ }}
```

Events accepts three optional arguments: `event`, [`store`](/docs/api/methods/store) and `options`. It then executes a callback function on the `@event` being targeted.

To obtain the XElement inside the scope of the event callback function, you can declare it simply by utilizing `this`

### `this`

Normally inside an event `this` would infer the `global` context. However with XElement `this` would always return a reference to the XElement.

```astro
@event={()=>{
    console.log(this)
}}
```

*This* should make it easier to write your instructions for the element, simply referencing `this` property or by using [`event.currentTarget`](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

------

## `@event` Methods

Here we illustrate the main mechanism for interacting with the `Event` Interface, along with the options that are associated to controlling the behavior with the `@event` handler.

### `@event` : EventTarget < Callback(event , store, options) >

The `@eventTarget` property is `@` followed by an event name that indicates the given `Event` that XElement should listen for.

```js
@click | @fullscreenchange | @mouseenter ......
```

You can apply any event you wish to any element, however events that don't apply to certain elements will silently fail.

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

To direct for the propagation properties you can do by passing in the third optional parameter `options={once:'true',}`.

You can apply as many events as you wish to on your element, you are not limited to using only one event listener per element.

------

## Controls & Options

XElement provides you with extra levels of fine-grained control over your `@event` listener.

### `@event:remove` : EventTarget < Callback(event,store,options) >

The `@event:remove` property is the **removal of event listeners** of a given type from an element.

```js
@click:remove={() => console.log("Removed the click event!")}
```

This is the equivalent to using [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

### `@event:once` : EventTarget < Callback(event,store,options) >

The `@event:once` property instructs XElement that the given `Event` should **fire only once**, removing itself when done.

```js
@click:once={() => console.log('Im a one time deal')}
```

### `@event:prevent` : EventTarget < Callback(event,store,options) >

The `@event:prevent` property followed by an event name indicates that the given function should **prevent the default behavior** of that particular event listeners effects.

```js
@click:prevent={() => console.log('Prevent default behavior in full effect')}
```

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

## DOM Event Interfaces

The browser provides many types of DOM specific `Event` interfaces. These allow you to access and interact with the browser making it provide additional functionality to the user.

There is a whole raft of standardized browser API's and their subsequent `Event` interfaces that you can freely utilize with `XElement`.

Interacting with events that are located on the `window` or `document` it is as easy to use as it is calling them.

```astro
<Input type='text' id="name" name="name"/>
<Button
    @click=((element)=>{
        name.select()//Selecting the name element content from the Input
        document.execCommand('copy') // Copy the Value to Clipboard
    })    
>
    Copy Name
</Button>
```

The above example demonstrates using two different types of XElements the first being a standard html `<input>` and the other, an interactive `<button>`, that takes the contents of the input and copies it to the clipboard.

As a general rule of thumb if its on the `document || window` you can use it as is.

------

## Further Information

To find out more about `Events` and the different ones you can interact and how to use them in more detail.

- [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)
- Understand more about [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- Find out more about using [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- Information about using [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
- Learn more about [`customEvent`](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)
- Understand [bubbling and capturing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture)