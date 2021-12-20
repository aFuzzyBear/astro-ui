# Getting Started

In this soft introductory page on how to get started with using `XElement`.

We will try to let you create your first set of `XElement` components, establish some of the methods that you can use with `XElement` such as animations and using vanilla JS to make a custom `<counter>` component.

It is our intention that by the end of the page you would have a slightly better understanding on how to begin composing your components using `XElement`

Without much further fanfare, let the journey begin.....cue the music!

## Setup

Lets quickly go over the setup procedure once again.

To setup `XElement` you simply need to acquire it from the package registry using your preferred package manager.

```bash
npm i astro-xelement -D
```

Here we are saving it as a developer dependency `-D` since its not needed as part of the final build of the project.

Once you have it added to your `node_modules`, at the top of your `.astro` component file, layout or page simply `import` it in.

```astro
---
import XElement from 'astro-xelement'
---

```

And that is it, you are now ready to start developing your first `XElement` component.

## `<HelloWorld>`

The first thing we are going to be doing together will be to create your first `XElement` component.

As with all maiden components when trying out any new *frameworks*, for our first component we too shall create our own `hello-world` component.

```astro
---
import XElement from 'astro-xelement'

// Using Named Elements { HTMLElement : NamedElement }

const { h1 : HelloWorld } = XElement
---
<HelloWorld>
    !! Hello World !!
</HelloWorld>
```

This renders out as a simple `<h1> !! Hello World !! </h1>` HTML string.

`XElement` is designed to be [*polymorphic*](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) by default.

All this means is that there are a couple of different way's to write out your `XElement` components.

We will demonstrate them all in good time, suffice to say, the manner shown above is called 'Named Elements' and is but one of many *happy* path's that can be taken when creating your Elements.

From here we can make this element do any number of things we wish.

For instance, we can apply choose to apply either **JavaScript** or **TypeScript** to the element to make it dynamic and have it interact upon certain certain events being triggered or conditions being met.

Like if it has been *clicked* on or if it is *visible* or if it has been *resized* etc.

We can even apply with little effort the **Web Animation API** to the element itself. Heck, it can even `fetch` data and dynamically `import` files inside the element itself!

What one can do with this little `<HelloWorld>` component is entirely up to you.

Their is plethora of possible components that can be created, what you can do with `XElement` is only bounded by ones own imagination.  

Why not make our `<HelloWorld>` component fade in, its a simple animation, and you can play about with this as much as you like.

```astro
---
import XElement from 'astro-`xelement`'

const {h1:HelloWorld} = XElement

//Declaring the Keyframe sequence inside Astro
const fadeIn = [
    { 
        opacity: 0
    },
    {
        opacity: 1
    }
];
// Also need the timing options
const animationTiming = {
    duration: 1500,
    easing: 'ease-in',
    fill: 'both'
};

---
<HelloWorld class="hello"
    @animate ={fadeIn}
    @timings ={animationTiming}>
    !! Hello World !!
<HelloWorld>
```

Refresh the page if Astro's Hot-Module Reload doesn't automagically take effect, and you should see the text 'Hello-World' fade nicely in to view.

-----------------------

## An Brief Exploration into the `<Counter>`

The quintessential demonstrative component given by all frameworks is most arguably the 'Counter'.

A simple component where it displays a button and upon pressing, increments a value on the screen by one.

Since Astro lets you Bring Your Own Frameworks to the party, there is a number of different ways to write this simple component out.

And we will explore them all only briefly for contextual purposes, don't worry if you are not familiar with any of these UI frameworks, its not a prerequisite, if anything it's here to help give some insight on the many ways one could possibly use to count with Astro.

There is the React way, with Preact having a *lighter* implementation and footprint,

```jsx
import React, { useState } from 'react';

export const Counter = (props) => {
  const [count, setCount ] = useState(0)

  return (
    <div id="mainArea">
      button count: <span>{count}</span>
      <button id="mainButton" onClick={() => {setCount(count + 1)}}>Increase</button>
    </div>
  );

}
```

Likewise with SolidJS

```jsx
import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

export const CountingComponent = () => {
	const [count, setCount] = createSignal(0);
	return 
        <div>
            <button onClick ={()=>setCount(count++)}>Increment</button>
            <p>Count value is {count()}</p>
        </div>;
};
```

Similar to the (P)React method, but wholly different in its execution.

Vue wants to have the component be written in their own `.vue` component syntax, using `<templates>` and `<scripts>`

```astro
<template>
	<div class="button-area">
		<button @click="counter--" class="dec-button">-</button>
		{{ counter }}
		<button @click="counter++" class="inc-button">+</button>
	</div>
</template>

<script>
export default {
	name: "Counter",
	data() {
		return {
			counter: 0,
		};
	},
};
</script>
```

Svelte does so in a similar style,

```svelte

<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	clicks: {count}
</button>
```

Given the examples of the different frameworks, there is striking similarities between some of them, yet there is a vast differences in how to implement this pretty simple and straight forward feature.

There are other considerations to be highlighted, one is that already learned knowledge in the basic fields of HTML, CSS and JS is often blurred when using different forms of UI frameworks.

A case can be made that this learned knowledge becomes *tainted* over time. In a sense with some foreign patterns and or behaviours that are only adopted within their respective frameworks becoming standard practice.

This can lead to a slightly muddled developer experience when we should be aiming for a holistic synergy between the trinity of web languages.

`XElement` has been designed to allow one to keep *true* in the sense to the core languages of the web, thus allowing us to practice the fundamentals, embracing the shared skill-sets that really unites us developers together.

It applies little to no opinions other than how to apply JavaScript or TypeScript to your element, the rest obeys and conforms only to the rules of the respective languages, and how its implemented inside Astro.

We will be returning later to the Frameworks later on in our journey, with more on a comparison on how they work with Astro along with `XElement`.

<!-- TODO: Write up comparision guide: Frameworks how to use them compared to XElement -->

## `<Counter>`

With out further ado, let's create our own `<Counter>` component to be next to our animating `<HelloWorld>` component.

```astro
---
import XElement from 'astro-`xelement`'

const {..., button:Button, span:Display, Counter} = XElement

---

...
<Counter
    @do={(element,store)=>{
        store.count = 0 
    }}
    >
    <Display id="display">0</Display>
    <Button 
        @click={(event,store)=>{ display.textContent =  ++store.count}}>
             Increment
    </Button>
    <Button 
        @click={(event,store)=>{ display.textContent = --store.count}}>
             Decrement
    </Button>
</Counter>

<!-- renders as -->
<counter>
    <span id="display">0</span>
    <!-- increments `counter_output` when clicked -->
    <button>Increment</button> 
</counter>

```

All we are doing here is creating four distinct HTML elements: `const {..., button:Button, span:Display, Counter} = XElement}`.

Two of these *Named Elements* are known HTML Elements, two `<button>`'s and a `<span>`, the parent component is our `Counter`, this is deliberately unreferenced, it results in a html `<counter>` element which is a `DocumentFragment`, a special type of HTML element and one we would explain in more detail later on.
 <!-- TODO: Link to the HTML FRAGMENT AND ITS BEHAVIOUR ONCE WRITTEN UP -->

To apply the JavaScript we use one of many special `@` decorators that comes with `XElement` to inform the element of what type of action we wish it to perform.

Breaking this magic trick out, in our `<Counter>` parent element, we are asking it to **do** is initialise the `store` with a `count` of `0`. The `store` is a special non-persistent data object that is available to all `XElement` components. This lets you *store* your data and allow it to be used elsewhere.

Giving the `id` to the `<Display>` allows us to target that element from elsewhere in the component tree. Now we are mearley telling the buttons that when they receive a `click` event to increment the `store.count` or decrement the count value updating the `display.textContent` as well.

And voila, that is us, we have our very own bona fide `XCounter`...sorry `<Counter>`, and the great thing is, it can be displayed many times and in as many different places around your Astro site as you wish.

## Next Steps

There is more still to come, and we strongly encourage you to continue this journey with us.

Still to demonstrate to you; how to exchange props around the place, pass them too and from the server to the client, from parent to child.

All the different ways you can style your components, and how to make them interactive.

Component composition, shared data states, dynamic imports, observer's and a whole lot more.

It really is *exciting* to be developing with `XElement`
<!--  -->