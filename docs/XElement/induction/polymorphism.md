---
title:
    page : "Polymorphism in XElement"
description: 
    page: "XElement is a Polymorphic Element. This means there are a number of different ways to create and declare your own XElement components. All in the name of providing a better DX in Astro"
page: 
    number   : 4
    next     : "../induction/interactivity"
    prev     : "../induction/my-first-components"

---

# Polymorphism in XElement

XElement is HTML first, but the DX of writing HTML can be a bit off.

To make things more interesting, XElement really is a **polymorphic element**, meaning it can take multiple different forms. This behavior takes hold when it comes to instantiating or declaring  XElement inside your projects.

Due to its *polymorphism* it does need to be told what it is XElement needs to generate.

And there are a number of different ways to inform XElement of what it is going to be.

Depending on your flavour of expression, each have to be written out as they are shown, so please pay particular attention to the differences with their respective implementations.

## `<XElement @is="...">` "Explicit Naming"

The first polymorphic implementation that we are demonstrating is XElement's original implementation.

```astro
<!-- (1) using `@is`-->
<XElement @is="div">
    <XElement @is="p"> A Paragraph element inside a "div" </XElement>
</XElement>
```

Here we are using the `<XElement>` tag and declaring it directly using the [`@is`](../api/is) property. This explicit behavior is used when you are wanting to have its parent inform the child of its nature.

```astro
---
const {ElementType} = Astro.props
---

<XElement @is={ElementType}>

```

This lets you to generate different types of elements based on properties inherited from the parent via its `props`

```astro
<!-- A self closing div -->
<XComponent ElementType="div"/>
<div/>
<!-- A paragraph element -->
<XComponent ElementType="p">Time is an illusion...</XComponent>
<p>Time is an illusion...</p>
<!-- A link element -->
<XComponent ElementType="a">A Link</XComponent>
<a>A Link</a>
--------
```

## `<XElement.>` "Dot-Notation"

```astro
<!-- (2) using `.` notation-->
<XElement.div>
  <XElement.p>This is a paragraph statement</XElement.p>
</XElement.div>
<!-- Renders as -->
<div>
  <p>
    This is a paragraph statement
  </p>
</div>
```

This Dot-Notation format is the shorthand replacement for using the `@is` selector.

Dot-Notation was the first introduction of XElement's polymorphism.

To pass through custom elements using dot-notation, you would write your components like this:

```astro
<XElement.CustomComponent/>
<!-- Renders as -->
<custom-component>
```

--------

## `const { Tag : Label }=XElement` "Explicitly Named Elements"

Explicitly Named Elements is where XElement's polymorphism abilities really starts to shine.

The purpose behind this polymorphic behavior is to allow for a cleaner DX as you can declare the individual html elements that you wish XElement to generate, separating the declaration of the element away from the component tags.

This is the method that is shown throughout these guides, we have done so to make it easier for users to acclimate themselves with XElement.

To implement this method you need to firstly inside the Astro front-matter, declare the elements that we want by writing in the following manner:

```astro
---
  const { Tag : label } = XElement
---
```

In this following example, we are providing labels for the developer to give the developer greater semantic meaning to their components. Where as XElement would only create the corresponding `HTMLElements`

```astro
---
  const {div:Container, p:Text} = XElement
---
  <Container>
    <Text>Must say this is a lot cleaner to look at</Text>
  </Container>
  <!-- Renders as -->
<div>
  <p>Must say this is a lot cleaner to look at </p>
</div>
```

--------

## `const { Tag } = XElement` "Implicitly Naming Elements"

Implicitly named elements is another easier more developer friendly way of instantiating your XElements.

As with declaring your XElements Explicitly, where you can apply a label to your element.

```astro
---
  const { Tag : label } = XElement
---
```

Here we drop the `label` and let you just pass in the `Tag` directly to XElement.

```astro
---
  const { Tag } = XElement
---
```

You can pass through any of the known `HTMLElement` as the Tag and it would render them as such.

```astro
---
  const {Div, P} = XElement
---
  <Div>
    <P>Even Cleaner</P>
  </Div>
  <!-- Renders as -->
<div>
  <p>...</p>
</div>
```

### Custom Elements

We can also create custom Elements using a similar process.

If the `Tag` does not have a corresponding `HTMLElementTag`.

XElement will default into its most basic representation of a DOM Element and that is as a `DocumentFragment`

Take the following example:

```astro
---
  const {Card} = XElement
---
  <Card>
    ....
  </Card>
  <!-- Renders as -->
  <card>....</card>
```

Do note when using XElements to create custom components, it is best to follow standard convention, where you would place a `H` in front of your label.

```astro
---
  const {HCard} = XElement
---
  <HCard>
    ....
  </HCard>
  <!-- Renders as -->
  <h-card>....</h-card>
```

This is to keep your custom elements safe from any future threat of your element's name being assigned to a future `HTMLElement` creating a possible, yet very minimal potential conflict with your component.

