## What is `XElement`?

> "`XElement` allows you to build HTML-first, interactive web components by generating dynamic HTML elements in Astro... All without the addition of any other JavaScript framework or library involved!"

It comes with a set of rich features that allow you to enhance html elements natively within Astro. It gives you the power to customize how and when dynamic interactions are applied to your elements.

All from a single interface.

Its really powerful, highly performant, very scaleable, simple and straight forward to use.

XElement is an Astro only component factory. You tell it what you want your components to do and render as, and it will get to work putting together compliant html spec elements. With its own encapsulated interactivity.

------------------

## Astro & `XElement`

Currently, to apply any form of client side interactivity in Astro requires the use of an external UI Framework. These interactive components are predominately made from React, Solid, Svelte, Vue etc.

XElement addresses the desire to have client-side interactivity *natively in Astro* to provide dynamic components for the client.

This can provide a substantial performance boost over the conventional methods by not requiring any additional framework rendering or delivery of their respective payloads.

------------------

## Why would you need it?

XElement serves to provide you with a single place to form and create components within the safety that it would obey and conform to both Astro and the Web.

### Creating Spec Compliant Web Components

It can be used to create anything from your standard html elements, to custom html elements.

XElement is html first, interactivity last. It works with Astro to provide a user interface that would help generate the correct final output for your components.

### Interactivity without adding any JavaScript framework

Presently to achieve client-side interactivity in Astro. It can be done through the addition of using anyone of Astro's supported frameworks.

XElement can be used *instead* of these frameworks. To provide fine-grained interactivity for your element on your site.

This way you have access to the DOM and all the client API's directly from inside your xelement component.

### Combine other JavaScript framework components for increased interactivity

Each framework component rendered individually in Astro creates its own, isolated “island of interactivity.”

Framework components cannot "talk" to each other: they cannot share or pass data even when they are rendered in the same Astro layout, component or page.

Furthermore, its child components must be components of the same framework. A React component can only have React children components; A Svelte component can only have Svelte children components...

`XElement` can unite these separate components by wrapping them into a specialised parent container. This component can provide and execute dynamic, run-time actions based on data received from any and all child elements, even from multiple frameworks at the same time!

------------------

## How does it work?

XElement only generates HTML elements. For those elements that need or use any interactivity we achieve this by attaching a `<script type="module">` to each element.

This `<script>` is inserted at build time, then removed, completely invisible to the DOM tree on the client. 

It provides pure *element encapsulation* where each dynamic component is isolated from, but can interact with, each other.

------------------

## Next Steps

## Examples

Visit our ['Getting Started'](Getting_Started.md) guide to take you through making your first set of `XElements`.

## API reference

Visit the API reference doc to find all the `XElement` API reference points and information on how to use each one correctly.

## Guides
Explore our guides to see common/popular ways to use XElement in your project.

## Tutorials
Learn about using XElement by building some sample web components in an example site.