
# Polymorphism

XElement is a polymorphic element, meaning it can take multiple different forms. This behavior takes hold when it comes to instantiating or declaring  XElement inside your projects.

Due to its Polymorphism it does need to be told what it needs to generate.

And there are a number of different ways to inform XElement of what it is going to be.

Depending on your flavour of expression, each have to be written out as they are shown, please pay particular attention to the differences in their respective implementations.

## `<XElement @is="...">` "Explicit Naming"

```astro
<!-- (1) using `@is`-->
<XElement @is="div">
    <XElement @is="p"> A Paragraph element inside a "div" </XElement>
</XElement>
```

The first polymorphic implementation that we are demonstrating is XElement's original implementation.

Here we are using the `<XElement>` tag and declaring it directly using the `@is` property. This explicit behavior is used when you are wanting to have its parent inform the child of its nature.

```astro
---
const {ElementType} = Astro.props
---

<XElement @is={ElementType}>
```

This lets you to generate different types of elements based on properties inherited from the parent via its `props`

--------

## `<XElement.>` "Dot-Notation"

```astro
<!-- (2) using `.` notation-->
<XElement.div>
  <XElement.p>This is a paragraph statement</XElement.p>
</XElement.div>
```

This Dot-Notation format is the shorthand replacement for using the `@is` selector.

Dot-Notation is the first introduction of XElement's polymorphism.

To pass through custom elements using dot-notation, you would write your components like this:

```astro
<XElement.CustomComponent/>
```

--------

## `const {div:Container}=XElement` "Explicit Named Elements"

Explicit Named Elements is where XElement's polymorphism abilities really starts to shine.

The purpose behind this polymorphic behavior is to allow for a cleaner DX as you can declare the individual html elements that you wish XElement to generate, separating the declaration of the element away from the component tags.

This is the method that is shown throughout these guides, we have done so to make it easier for users to acclimate themselves to this style of declaring elements a lot easier.

To implement this method you need to firstly inside the Astro front-matter, declare the elements that we want by writing in the following manner:

```js
---
  const { Tag : name } = XElement
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
```

### Explicitly Declared, Custom Elements

Using the Explicit-Named-Functions we can also create custom Elements using a similar process.

Here we only pass in the name by itself, if the name is does not have a corresponding `HTMLElementTag` and without referencing a html element: `const { Name } = XElement`.

This would have default XElement into its most basic representation on the DOM and that is as a `DocumentFragment`

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

--------

## `const { Tag } = XElement` "Implicit Naming"

Implicitly naming Elements is another easier more developer friendly way of instantiating your XElements.

As with declaring your XElements Explicitly, where you would follow 