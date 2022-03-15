---
title:
    page : "Home of XElement's Docs"
description: 
    page: "The official home to XElement's documentation, this is where we keep the information pertaining to XElement, its api, methods, usages and guides. All located here."
page: 
    number   : 1
    next     : "../induction/introduction"

---
# XElement

Welcome to the home of XElement, **Astro's first and only\* HTML Web Component Framework**

XElement lets you to create dynamic HTML elements in Astro and enhance them with client-side interactivity (e.g. animations, transitions, event listeners) natively in an Astro page or component... All without the using one of the many JavaScript frameworks Astro supports (React, Vue, Svelte, Solid, Preact).

XElement takes the HTML and makes them into interactive web components. It gives you the option to choose *when* and *how* to run your client-side interactions on a per-component basis.

Since XElement is an *enhanced* Astro Component, it has no need for any hydration or `client:*` directives. It in-fact has no renderer, instead deferring to using vanilla JS on the client to achieve our interactions.

And unlike other framework components, XElement-generated components can even contain other framework components. This allows you to combine the outputs of otherwise isolated islands of interactivity, augmenting the overall Island experience both for the client and the developer.

----------

## Getting Started

1. Add XElement to your Astro project via the terminal

```bash
npm i astro-xelement -D
```

2. Import XElement into any `.astro` file (page, layout, or component):

```astro
---
import XElement from 'astro-xelement'
---
```

That is it, you are now ready to start using XElement!

We have taken some time to arrange the documentation in a manner that would allow you to get both the conceptual and the practical knowledge to use XElement efficiently in your projects.

## Induction

Our Induction and Onboarding process is designed to be a high-level overview to XElement, giving insights on its various methods and behaviors. We highly endorse that you take the time to be familiar with the content provided within the Induction section of our Documentation.

<button> [Go To: Introduction](../induction/introduction)</button>

## API reference

XElements `api/` section provides all twelve off XElement's API reference points. With information on how to use each one in more detail.

<button> [Go To: API's](../api/overview)</button>

## Guides

Guides is a living part of our documentation and over time would be filled with documents showing how to use XElement in Astro, creating truly fantastic components as a result.

<button> [Go To: Guides](../guides/overview)</button>

## Showcase

Show us your stuff! We'd love to see what you've made with XElement and Astro. Share your creations with the Astro Discord Community in the `#Showcase` channel, Tweet them at us, send them to us via Github or find us on [Discord](https://discord.com/channels/830184174198718474/951614170351145010).

As more people build web components with XElement, we will gather components from users and showcase them here.

----------

## Versions

XElement is now on `v3.1` which is designed to be compatible with Astro `>v0.21`.

The XElement tool itself is considered to be stable and safe for use in production environments.

----------

## Get Involved

Our github repo is active and we welcome any issues or PR requests. This is the best way to provide feedback, report bugs, and help improve documentation.

----------

## Acknowledgements

This project owes a tremendous amount of gratitude and thanks to [jonathantneal](https://github.com/jonathantneal) for his continuous support, guidance and hacking away at the internet. Pivotal in turning this whimsical fantasy into creation.

Special acknowledgement to the [Astro Core team](https://github.com/orgs/withastro/people) for their dedication and hard work towards building Astro as a fantastic framework for Frontend development.

### Further Mentions

Its only fair to those who have assisted in this project from their support and input to being the first adopters, to be mentioned and appreciated for their individual contributions.

- [Chris Bongers](https://github.com/rebelchris) - dailytechtips
- [Okikio](https://github.com/okikio)
- [p13rnd](https://github.com/p13rnd)
- [sarah11918](https://github.com/sarah11918) - Editor-In-Chief
- [Tony-Sull](https://github.com/tony-sull) - Navillus.dev
- [lostra01](https://github.com/lostra01)

Thank you all for being patient and brave when it came to testing and exploring XElement for us, and for helping us to realise its potential.

----------
<!--TODO: Move this to the footer text
XElement was built of the back of good old curiosity, off-world magic and Irn-bru.

We assure you that no animals were harmed too seriously in the process. -->