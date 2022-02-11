# XElement Properties

This page is setup to provide you with a higher overview to `XElements` properties.

Here we explain `XElement` features and what happened under the hood in a bit more detail.

In all honesty you will never directly interact with some of the things mentioned here, but having some understanding would help you when it comes to using `XElement` in full swing.

## Props

This is the types and shape of the `XElement` props:

```ts
/** @typedef Tag - Valid HTML Tag names */
type Tag = keyof HTMLElementTagNameMap | (string & {})

export interface Props {
   '@is': Tag,
   shadowroot,
  ...attrs?: any
}
```

This might seem a bit weird if you are not familiar with TypeScript, don't worry, all we are doing here is displaying using inputs and their settings for the primary properties that `XElement` utilizes 'under-the-hood', lets break this out.

----------

## [type Tag : HTMLElementTagName | string](#Tag)

This `Tag` is an internal property of `XElement` its never exposed outwards. So you will never really see it nor use it directly.

It can only be accessed by using the `@is` property, or by using a *polymorphic* named attribute.

This is where we generate spec-compliant, semantically correct, html tag names for your web-element.

So if you were to tell `XElement` that you wanted a '`<h1>`' or a '`<div>`' etc. This is how we do so. Under the hood `XElement` forms the correct mapping to the corresponding HTML tags.

Full HTML bindings are taken from Typescript's own types definition: `HTMLElementTagName`. A full list of these can be found [here](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)

The `Tag` can be extended to allow you to enter in a custom `string` into `XElement` and have it create a custom [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment), we discuss this in our guide on [Custom Components](#).

This means should you wish to have a `<FancyElement>` you can do, since this would render out as `<fancy-element>` on the DOM.

-----------

## [`@is` : Tag](#Is)

The `@is` accepts a [`Tag`](#Tag) as its input. This is a necessary property which only accepts a `string` that informs `XElement` what type of component you wish it to be.

```astro
@is =  "div" | "p" | "a" | "audio" | "img" | "video" ...
```

You can choose from all [118 HTML elements](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html) to generate with `XElement`

By default if no html tag is provided `XElement` would generate a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment). These are a minimal DOM object that has no associated parent element. This has some advantages and implications which we explore further in our guide [Creating Components](#)

You can also generate custom elements also by entering in a custom value such as:

```astro
@is = "CustomComponent"
```

This would render out as `<custom-component>` on the DOM. The reason for this is to provide you with the ability to create new semantically meaningful html components, a lot easier.

-----------

## [Polymorphism](#polymorphism)

Since `XElement` is a polymorphic element, it does need to be told what it needs to generate.

However there are three unique ways to inform `XElement` of what it is going to be.

NB: These elements, depending on your flavour have to be written out as they are shown, please pay particular attention to the differences in their respective implementations.

### `<XElement @is>` "Explicit Naming"

```astro
<!-- (1) using `@is`-->
<XElement @is="div">
    <XElement @is="p"> A Paragraph element inside a "div" </XElement>
</XElement>
```

The first we are using the `<XElement>` tag and declaring it directly using the `@is` property. This explicit behaviour is used when you are wanting to have its parent inform the child of its nature.

```astro
---
const {ElementType} = Astro.props
---

<XElement @is={ElementType}>
```

This type of behaviour, allows you to generate different types of elements based on derived behaviour from the parent that is passing in the `props`

### `<XElement.>` "Dot-Notation"

```astro
<!-- (2) using `.` notation-->
<XElement.div>
  <XElement.p>This is a paragraph statement</XElement.p>
</XElement.div>
```

This Dot-Notation format is the shorthand replacement for using the `@is` selector.

### `const {div:Container}=XElement` "Named Elements"

This is by far the most preferential method out of the three. It allows for a cleaner DX as you can declare the individual html elements that you wish XElement to generate separately away from the component tags.

This is the method that is shown throughout these guides, we have done so to make it easier for users to acclimate themselves to this style of declaring elements a lot easier.

To implement this method you need to first in the Astro Code-block, declare the elements that we want by writing in the following manner:

```js
  const { html : name } = XElement
```

```astro
---
  const {div:Container, p:Text} = XElement
---
  <Container>
    <Text>Must say this is a lot cleaner to look at</Text>
  </Container>
```

### [Custom Named Elements](#CustomNamedElements)

To use Custom Named Elements is a similar process however we only pass in the name by itself, without referencing any other html element: `const { name } = XElement`.

This would have `XElement` default to its most basic representation on the DOM and that is as a `DocumentFragment`

Take the following example:

```astro
---
  const {Card} = XElement
---
  <Card>
    ....
  </Card>
  <!-- renders as -->
  <card>....</card>
```

The `DocumentFragment` has no real html entity, so it is limited in some ways, such as using the `Web Animation API`. Its not overly polite to think of them as *souless divs*, but in reality that is not a bad description for them.

We use `DocumentFragment` to create any custom html element that you wish for, so `<Card>` can be rendered out as `<card>` on the DOM.

We have a separate guide that shows you how to create components. Demonstrating the individual methods shown here in further detail. If you wish to find out more please visit [Creating Components](#).

-----

## shadowroot

`XElement` allows for you to define if element should interact with the [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM).

This can be achieved by appending the property `shadowroot` to the element:

```astro
---
  const {p:ShadowText} = XElement
---
  <ShadowText shadowroot> This is now available to the shadow DOM.</ShadowText>
```

The shadow Dom allows for hidden DOM trees to be cheaply attached to the elements on the regular DOM tree.

This allows for DOM elements to be created in a less expensive fashion when doing so on the client and appended to the DOM using regular DOM methods.

We will have a guide to explain this particular functionality in more detail soon, in the meantime you can gather a better understand from [MDN: "Using Shadow DOM"](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
<!-- TODO! Need a guide written up about using the shadow DOM -->
----------

## [`...attrs` : HTMLAttributes](#htmlattributes)

`XElement` allows you to utilize as many of the [HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) that are registered for the element specified.

This lets you access the full compliment of html attributes such as;

- `aria-` attributes
- `data-` attributes
- standard html attributes such as `id` and `class` are fully respected.

`XElement` does not name squat on any html attribute. This allows you the freedom to work with around all the [174 existing attributes](https://devdocs.io/html/attributes). Just remember to apply the appropriate tags to the correct html elements.

Attributes can be passed in the following ways:

```astro
---
  const { div : Container } = XElement
---
  <Container tab-index="0" role="container" data-value='42' contenteditable  aria-volume="75">
```

The above is an illustrative attempt to show you how one would pass in attributes just like you normally would when using html attributes on standard html elements.

You can even use the [`GlobalEventHandlers`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) as part of 'passing down any html attributes', although we would highly discourage this pattern of behaviour as `XElement` provides its own interface for handling `Events`.

This is explained more in our API section about [Client Side Interactivity](#) where we document the interfaces and their related usage in more detail.

----------

## Further Information

To find out more about the topics that are discussed on this page, here are the references used and some extra information pertaining to their usage that you might find interesting.

### Document Fragment

- [XElement Guide: Creating Components](#)
- [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

### HTML Attributes

- [TypeScript HTMLElementTagNameMap](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.htmlelementtagnamemap.html)
- [MDN: HTML Element Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [Devdocs: list of 174 existing attributes](https://devdocs.io/html/attributes)
