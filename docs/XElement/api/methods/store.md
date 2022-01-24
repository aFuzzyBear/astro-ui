<<<<<<< HEAD
=======
---
title: XElement Data Store



---

>>>>>>> www-xelement
# XElement Data Store

Off all of the additional powers that XElement provides to enhance your elements, none is more powerful than the `store`.

We have used the store in some of the examples already in these docs, this page should provide you with a suitable overview as to what it is and how to use it.

In short the `store` is a transient data-object that exist purely on the page memory.

There is no persistence to the store, meaning it doesn't keep its memory after the page has been closed or changed.

What it can do is allow you to communicated and pass data to and from other xelement and ui frame-work components on the page.

It is in effect just an empty data object `{}`.

This means you can *store* everything you normally can on a data object; strings, numbers, arrays and other objects. Functions and their return values.

There is no real limit to the size of the store either, since its really a single entity, you cant reassign it to something else, its a safe form of inter-element communication. A bridge in effect between individual elements.

## How to use

The `store` is always the second argument that is passed into all of xelement's methods. This allows for access to the store within the scope of that method.

To use it you need to declare it as part of the optional parameters to pass into the scope of that method.

```astro
@do={(element,store)=>{
    console.log(store) // {}
    store.answer = {
        a:42
    }
    console.log(store.answer.a) // 42
}}
```

<<<<<<< HEAD
This would then let the object `store.answer` to be accessed from any other xelement on the page.
=======
This would then let the object `store.answer` to be accessed from any other xelement on the page.

>>>>>>> www-xelement
