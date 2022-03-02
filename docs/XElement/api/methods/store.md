---
api_title: "store"
title: "XElement's Internal Data Store"
description: "XElement provides a special type of data transient data objet for bi-directional data exchange between different XElements"
order: 8
next_page: "/docs/api/methods/define_vars"
prev_page: "/docs/api/methods/import"
---

# XElement Data Store

Off all of the super powers that XElement provides, none is more powerful than that of the `store`.

We have used the store in some of the examples displayed elsewhere in these docs. They were done so with little explanation to the `store` what it is and what it does. This page seeks to provide you with all you need to know about XElement's data `store`.

A short description of the `store` would be that it is a transient data-object which exist purely on the page's memory.

There is no persistence to the store, meaning it doesn't keep its memory after the page has been closed or changed.

What it can do is allow you to communicated and pass data to and from other XElement's and within other UI framework based components on the page.

It is in effect just an empty data object `{}`.

This means you can *store* everything you normally can on a data object, basic primitive values such as: strings, numbers, arrays, other objects, functions and their return values.

There is no real limit to the size of the store either, since its really a single entity, you cant reassign it to something else. Its a safe form of inter-element communication. A bridge in effect between individual elements.

## How to use

The `store` is always the **second argument** that is passed into all of XElement's methods. This allows for access to the `store` within the scope of that method.

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

This lets the object `store.answer` to be accessed from any other XElement on the page.

------

### Coming Soon

Look out for the complete guide on using the `store` with XElement.

