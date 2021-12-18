# XElement

Welcome to the home of XElement, an Astro **Customisable HTML Web Component Generator**.

XElement allows you to create dynamic HTML elements with interactivity (e.g. animations, transitions, event listeners) natively in an Astro page or component... without the need for writing and importing a component in one of the many JavaScript frameworks Astro supports (React, Vue, Svelte, Solid, Preact).

XElement web components give you the option to choose *when* and *how* to run JavaScript or TypeScript on the client-side on a per-component basis, similar to the way Astro controls the hydration of framework components via `client:*` directives.

Unlike other framework components, XElement-generated components can even contain other framework components. This allows you to combine the outputs of otherwise isolated islands of interactivity.

----------

### To use XElement components in your project, follow these steps:

1. Add `XElement` to your Astro project via the terminal
```bash
npm i astro-xelement -D
```


2. Import `XElement` into any `.astro` file (page, layout, or component):

```astro
---
import XElement from 'astro-XElement'
---
```

That is it, you are now ready to start using `XElement`! Choose your next step...

## Examples

Visit our ['Getting Started'](Getting_Started.md) guide to take you through making your first set of `XElements`.

## API reference

Visit the API reference doc to find all the `XElement` API reference points and information on how to use each one correctly.

## Guides
Explore our guides to see common/popular ways to use XElement in your project.

## Tutorials
Learn about using XElement by building some sample web components in an example site.


## Showcase

Show us your stuff! We'd love to see what you've made with `XElement` and Astro. Share your creations with the Astro Discord Community in the `#Showcase` channel, Tweet them at us, send them to us via Github or find us on Discord.

As more people build web components with XElement, we will gather components from users and showcase them here. 

----------

## Versions

`XElement` is now on `v3.1.0` which is designed to be compatible with Astro `>v0.21`.

The `XElement` tool itself is considered to be stable and safe for use in production environments.

----------

## Get Involved

Our github repo is active and we welcome any issues or PR requests. This is the best way to provide feedback, report bugs, and help improve documentation.

----------

## Acknowledgements

This project owes a tremendous amount of gratitude and thanks to jonathantneal for his continuous support, guidance and hacking away at it. Pivotal in turning this whimsical fantasy into creation.

Special acknowledgement to the Astro Core team for their dedication and hard work towards building Astro as a fantastic framework for Frontend development.

### Further Mentions

Its only fair to those who have assisted in this project from their support and input to being the first adopters, to be mentioned and appreciated for their individual contributions.

- Chris Bongers - dailytechtips
- Okikio
- p13rnd
- sarah11918
- Tony-Sull - Navillus.dev

Thank you all for being patient and brave when it came to testing and exploring `XElement` for us, and for helping us to realise its potential.

----------

`XElement` was built of the back of good old curiosity, off-world magic and Irn-bru.

We assure you that no animals were harmed too seriously in the process.