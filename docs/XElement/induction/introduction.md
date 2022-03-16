---
title:
    page : "Intro XElement"
description: 
    page: "Introducing XElement, Astro's first and only Web Component Framework, here we provide you with an overview of XElement, all the good stuff is yet to come"
    meta: "Introducing XElement, Astro's first and only Web Component Framework"
page: 
    number   : 2
    next     : "../induction/interactivity"
    previous : "../induction/overview"

---
# Introducing XElement

Welcome to Astro's first, and currently only, Web Component Framework.

XElement was designed to improve the DX for developers of Astro projects.

It is a trusty and reliable swiss-army knife that you can reach for that adds a wide variety of interactions to your HTML components in Astro.

## What is XElement?

> "XElement allows you to build HTML-first, interactive web components by generating dynamic HTML elements for Astro... all without the addition of any other JavaScript framework, renderer or library involved!"

It comes with a set of rich features that allow you to develop interactive client side components natively within Astro, and provides the option to customize how and when dynamic interactions are applied to your elements.

Its highly performant, scalable, simple and straight forward to use.

------------------

## Astro & XElement

Currently, to apply any form of client side interactivity in Astro requires the use of an external UI Framework. These interactive components are predominately made from React, Solid, Svelte, Vue etc.

XElement addresses the desire to have client-side interactivity *natively in Astro* to provide dynamic components hydrated on the client. This can provide a substantial performance boost over the conventional methods by not requiring any additional framework rendering.

------------------

## Why would you need it?

### Interactivity without adding any JavaScript framework

Although dynamic, client-side interactivity can be achieved in Astro already through the addition of React, Svelte, Vue etc. components, XElement can be used *instead* of a framework component to provide full interactivity on your site.

### Create Components intuitively

- XElement has a very simple and intuitive interface. Write your HTML as you normally would in Astro using its powerful HTML & JSX syntax.

- XElement takes further advantage of this to allow you to collocate all of your client-side interactions directly within the HTML itself.

- XElement lets you express your interactions in either **JavaScript** or **TypeScript** without any additional setup involved.

### Archipelagos for Islands Architecture

Combine other UI frameworks for even more interactivity.

Each framework component rendered individually in Astro creates its own, isolated “island of interactivity” in a composition model wherein a React component can only have React children components; A Svelte component can only have Svelte children components...

XElement can unite these separate components by providing a parent container element that can provide and execute dynamic, run-time actions based on data received from any and all child elements, even from multiple frameworks at the same time! And since XElement components are in effect HTML elements they can be used as children within these frameworks.

------------------

## How does it work?

Each XElement component generates HTML elements first, while giving the option to also create a dynamic region of interactive HTML elements on the page by producing its own `<script type="module">` element.

This `<script>` is inserted at build time, read by the browser, and is then immediately removed and made invisible to the DOM tree on the client.

XElement requires no special DOM renderer is to do this.

It provides pure *element encapsulation*: each XElement is self-contained, and isolated from, but can still interact with, each other.

All methods are scoped to each element. So if one element does not work as intended, it will neither interfere with nor block any other element on the page.

------------------
