# XElement Events

`XElement` is able to react to any `Event` possible.

The vast majority of `Event`'s are able to be subscribed to by using the `@` decorator followed by the 'name' of the event you wish the payload to execute on.

Certain events only work on certain parts of the document.

Given that we wont restrict you from writing out all the 180+ different events known, not including the synthetic ones that can be use.

These non applicable events themselves will fail silently.

It is best to only apply events outside of any `customEvent` that might be declared in the `@do` method, to the right element that you are consuming.

This would help you react to the right events on the element without to much difficulty.

For a full list of Events that are available and which elements they are fired on, please visit [MDN's Event Reference guide](https://developer.mozilla.org/en-US/docs/Web/Events)

It works by applying relevant `add` or `removeEventListeners` in JavaScript over using inline html `GlobalEventTargets`.

We expose some options on customising the nature of the Event Handler itself, providing you with control over the Event bubbling and capturing phases of the event action.

## Arguments

Events are written out in the manner displayed below.

```astro
@event={(event, store,options={option:value})=>{
    // Act upon event
}}
```

Events accepts three optional arguments: `event`, [`store`](Store) and passing through any customisation `options`. It then executes a function on said `@event` being targeted.

To obtain the `XElement` inside the event you can declare it simply by:

### `this`

Inside the event, normally `this` would infer the `global` context. With `XElement` `this` would always return the xelement that you are targeting.

```astro
@event={()=>{
    console.log(this)
}}
```

This should make it easier for you to write your instructions to the element, simply by targeting the `this` property or by using `event.currentTarget`

-------------

## `@event` Methods

Here we illustrate the main mechanism for interacting with the `Event` Interface, along with some options that are associated to controlling the behaviour with the `@event` handler.

### `@event` : EventTarget< Callback(event,store,options) >

The `@eventTarget` property is `@` followed by an event name that indicates the given function should listen to that given event name.

```js
@click | @fullscreenchange | @mouseenter ......
```

You can apply any event you wish to any element, however events that don't apply to certain elements will gracefully fail silently.

You can find out more about these events and where best they apply [here](https://developer.mozilla.org/en-US/docs/Web/Events)

To apply an event on an element simply apply the `@event` method inside your `XElement` like so:

```astro
---
    const {button: Button} = XElement
---
    <Button @click={()=>console.log('Ive been clicked!')}>
        Press me
    </Button>
```

This behaviour comes without any Event capturing properties attached, it would propagate through the branch that it is attached to.

To direct for the propagation properties you can do by passing in the third optional parameter `options={once:'true',.....}`.

You can apply as many events as you wish to on your element, you are not limited to using only one event listener per element.

-----

## Controls & Options

We provide you with some extra levels of control over your `@event` listener.

### `@event:remove` : EventTarget< void >

The `@event:remove` property is the **removal of event listeners** of a given type from an element.

```js
@click:remove={() => console.log("Removed the click event!")}
```

This is the equivalent to using [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).

### `@event:once` : EventTarget< Callback(event,store,options)

The `@event:once` property that the given function should listen to the given event name and **fire only once**, removing itself when done.

```js
@click:once={() => console.log('Im a one time deal')}
```

### `@event:prevent` : EventTarget< Callback(event,store,options)

The `@event:prevent` property followed by an event name indicates that the given function should **prevent the default behaviour** of that particular event listeners effects.

```js
@click:prevent={() => console.log('Prevent default behaviour in full effect')}
```

### `options` : Object{}

Events have effects on the dom, where one event might bubble up through to the parent or it might be captured on the element.

To exert your own control over the event itself, you can pass in the third optional argument: `options`.

Below describes the options that this can take and their respective inputs.

```astro
options={
    [capture: Boolean]: true || false,
    [once: Boolean]: true || false,
    [passive: Boolean]: true || false,
    [signal: AbortSignal],
}
```

-----

## DOM Event Interfaces

The browser provides many types of DOM specific `Event` interfaces. These allow you to access and interact with the browser making it provide additional functionality to the user.

There is a whole raft of standardised browser API's and their subsequent `Event` interfaces that you can freely utilize with `XElement`.

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

The above example demonstrates using two `XElement`s the first being a standard html `<input>` the other an interactive `<button>`, that takes the contents of the input and copies it to the clipboard.

As a general rule of thumb if its on the `document` you can use it as is.

-----------

## Further Information

To find out more about `Events` and the different ones you can interact with