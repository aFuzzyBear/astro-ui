---
title:
    page : "My First XElements"
description: 
    page: "Get Started with XElement by creating your first set of XElement Components, get to create and implement Client-side JS from your Astro file without using a single Renderer."
page: 
    number   : 3
    next     : "../induction/polymorphism"
    prev     : "../induction/introduction"

---

# My First Components

Here we are going to be giving you the briefest of introductions to XElement, and in fairness it really is all it needs. After which you will have a greater understanding of XElement, using these docs you can take these components further and do some truly amazing things.

## `<HelloWorld>`

Let's create your first XElement component!

We will create an [**Explicity named element**](polymorphism#const--tag--label-xelement-"explicitly-named-elements") using the following syntax to create our Hello World component.

`const { TraditionalHTMLElement : MyComponentName } = XElement`

```astro
---
import XElement from 'astro-xelement'

const { h1 : HelloWorld } = XElement
---
<HelloWorld>
    !! Hello World !!
</HelloWorld>
```

This renders as `<h1> !! Hello World !! </h1>` on the DOM itself. Excellent nothing out of the ordinary, here we are using XElements foremost responsibility of generating semantically correct `HTMLElements`

From here we can make this element *do* any number of things...

Using **JavaScript** or **TypeScript** we can make it dynamic when certain certain events are triggered or conditions are met.

An XElement can perform actions if it has been *clicked* on or if it is *visible* or if it has been *resized.* It can even `fetch` data and dynamically `import` files inside the element itself!

What you can do with this little `<HelloWorld>` component is entirely up to your imagination.

But let's demonstrate another one of XElements abilities, let us make our `<HelloWorld>` component fade in, using the supported **Web Animation API**.

```astro
---
import XElement from 'astro-xelement'

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

// Also declaring the timing options
const animationTiming = {
    duration: 1500,
    easing: 'ease-in',
    fill: 'both'
};

---
<HelloWorld
    @animate ={fadeIn}
    @timings ={animationTiming}
>
    !! Hello World !!
<HelloWorld>
```

Now, you should see the text 'Hello-World' fade nicely in to view.

-----------------------

## `<Counter>`

How could we not provide an example of a 'Counter'?

You will notice that Astro starter "framework" examples (e.g. React, Svelte etc.) all contain a counter component to show you how the different framework components work in Astro.

With XElement, you can have a fully-functioning, interactive *Astro* counter component, no other framework is required!

### Let Start

Our `<Counter>` component will be the same as the others, where it would take a value and increment or decrement the value on the screen. For this we need to declare a few different XElements, one to represent each HTML element we wish to create.

Our counter requires two buttons, as well as a counter display. We also need to create a parent `<Counter>` container element.

```astro
---
import XElement from 'astro-xelement'
const { button : Button, span : Display, Counter} = XElement
---
```

Here we are defining three different types HTML elements to create four distinct HTML elements (Remember, we're making two buttons. So they are distinct elements in the document, but they are the same type of element!)

Two types of these *Explicitly Named Elements* are familiar HTML Elements: `<button>` and `<span>`. The parent component is our `<Counter>` and is not named. It produces an HTML `<counter>` element which is a `DocumentFragment`, a special type of HTML element.

Let's see how we can make our XElement `<Counter>` component **do** some stuff like; Add, subtract, display the current count.

This is what the code for the `<Counter>` looks like:

```astro
---
import XElement from 'astro-xelement'
const { button:Button, span:Display, Counter} = XElement
---
<Counter
    @do={(element,store)=>{
        store.count = 0 
    }}
    >
    
    <Button 
        @click={(event,store)=>{ 
        display.textContent =  ++store.count
    }}>
        +
    </Button>
    
     <Display id="display">0</Display>
    
    <Button 
        @click={(event,store)=>{
        display.textContent = --store.count
    }}>
        -
    </Button>
</Counter>
```

### `@` methods

To start enhancing our component, we use one off XElements `@` methods to specify what type of action we wish it to perform.

`@do` is a common instruction to "do" something. And in our buttons, we will use `@click` to describe an `onClick` event listener that would fire when triggered.


### `store`

XElement also provides a [`store`](../api/store): a special non-persistent data object that is available to all XElements components.

It allows you too *store* your data to be used elsewhere on the page in other XElement components. We are keeping track of our counter's `count` in this store object.

### `id`

Giving an `id` to an XElement, as we have done with `<Display>`, allows us to target that element from elsewhere in the component tree. In this example, we can update the counter's displayed count by referencing, then changing the `<Display>` element's `textContent`.

### Summary

In this example, what we are asking our  parent element, the `<Counter>` to **do**  is initialize the `store` with a `count` of `0`.

And, we are telling the buttons that when they receive a `click` event, they should increment or decrement the `store.count` and update the `display.textContent`.

This `<Counter>` example renders the following HTML to the page:

```astro
<counter>
    <button>+</button> 
    <span id="display">0</span>
    <button>-</button> 
</counter>

```

-----

## Congratulations

You have successfully made your first set of XElement components. These two simple components server as XElements gateway into creating your own litany of creative and expressive components directly within Astro without the need for using an addition Framework to render partially hydrate your components on the client. XElement does this and a whole lot more for you.