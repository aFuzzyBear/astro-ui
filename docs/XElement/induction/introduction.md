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

Astro's first and currently, only Web Component Framework.

XElement is designed and created to help enhance the DX of other Astronauts, using Astro in their projects.

A trusty and reliable swiss-army knife in their arsenal. Giving you additional superpowers to help make more of your `HTMLElements`.

Letting you write good Astro and be super charged as you go.

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

XElement has a very simple and intuitive interface that aims to provide a very easy DX. Write your HTML as you normally would in Astro using its powerful, HTML & JSX syntax.

XElement takes further advantage of this to allow you to collocate all of your client-side interactions directly within the HTML itself.

Letting you express your interactions in either **JavaScript** or **TypeScript** without any additional setup involved.

### Archipelagos for Islands Architecture

Combine other UI frameworks for even more interactivity.

Each framework component rendered individually in Astro creates its own, isolated “island of interactivity.”

Framework components cannot "talk" to each other: they cannot share or pass data even when they are rendered in the same Astro component, layout or page. Furthermore, its child components must be components of the same framework.

This results in a composition model where a React component can only have React children components; A Svelte component can only have Svelte children components...

XElement can unite these separate components by providing a parent container element that can provide and execute dynamic, run-time actions based on data received from any and all child elements, even from multiple frameworks at the same time!

And since XElement components are in effect HTML elements they can be used as children within these frameworks. Whereas you cant pass through Astro components into UI Frameworks, with XElement components you can!

------------------

## How does it work?

Each XElement component generates HTML elements first, whilst giving the option to also creating a dynamic region of interactive HTML elements on the page by producing its own `<script type="module">` element.

This `<script>` is inserted at build time, It is read by the browser and is then immediately removed and made invisible to the DOM tree on the client.

XElement requires no special DOM renderer is to do this.

It provides pure *element encapsulation* where each XElement is self-contained, isolated from, but can interact with, each other.

All methods are scoped to each element. So if one element decides not to work as intended, it will not interfere nor block any other element on the page.

------------------

## Epilogue

We have just introduced you to XElement, all the wonders it contains has yet to be truly explored. We have been documenting this really amazing tool for some time and still finding new ways to use XElement with Astro.

Our Induction pages are here to provide you with theoretical information needed.

We discuss [client-side interactivity](interactivity) along with introducing you the the [methods](methods) and [observations](observations) that can be implemented with XElement. We also delve into other concepts pertaining to XElement which we feel that for the user of our framework we should empower them with the both the conceptual and practical knowledge to get the most out of XElement.
