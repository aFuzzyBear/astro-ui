---
title: "@animate"
meta_title: "Animate with XElement"
description: "XElement has its very own way to help make it easy to utilise the Web Animation API. It allows you to animate any element just by providing a set of keyframes and timing instructions, similar to passing them in CSS-land. This way you can animate pretty much anything using XElement."
meta_description: "XElement comes with native support over the Web Animation API, using @animate and @timings you can pass through your animation keyframes and its timings, and you are good to go."
order: 5
next_page: './fetch'
previous_page: "./define_vars"
---
# Animate XElement

XElement allows you to animate just about *any* element just by passing it a set of keyframes and timing instructions.

With XElement, animations that you would normally define with CSS are instead described directly *inside any element.* XElement employs the native `Web Animation API` to make your HTML elements sing, dance, roll over, play dead... all sorts of crazy and wonderful things. This brings your site and content to life.

XElement uses two reserved `@` methods to pass animation instructions: `@animate:Record<Object>` and `@timings:Object`. Both are required in order to peform a transformation, as animations are a sequence of actions over time. The first method describes a list of actions to be performed, and the second method describes the timing at which these transformations should occur.

## How to use

### `@animate = {}`

The `@animate` method accepts a series of keyframes (animation instructions) as either as one list of objects or as a record of objects using a `transform: "{transformation}"` key/value pair. These transformation define the actions to be performed.

```astro

@animate={
    [
        //As a List
        {transform: "translateX(0)"},
        {transform: "translateX(100px)"},
    ]
    // Or
    {
        //As a Record
       {transform: "translateX(0)"},
       {
        transform: "translateX(100px)",
        offset:'0.5' // 50%
       }, 
       {transform: "translateX(200px)"}, 
    }
}
```
<details style="border: 1px dashed black; padding-left:1.5em;">
<summary>Want to see the equivalent animation in CSS?</summary>
<p>Notice that XElement, which uses the `WebAnimationAPI`, requires a slightly different sytax than you may be used to when using CSS to perform your animations. (You might have noticed the `offset` property being used above, which is akin to the keyframe `step` in CSS.) Here is how the above XElement animation would be written in CSS: 

```css
@keyframes moveText{
    0%{
        transform: translateX(0)
    },
    50%{
        transform: translateX(100px)
    },
    100%{
        transform: translateX(200px)
    },
}
```
</p>
</details>

### `@timings={}`

The `@timings` method accepts an object containing the timing details for the animation:

```astro
@timings={
    {
        duration: 1000, //all time is in ms
        fill:'both',
        easing:'ease-in'
    }
}
```

Within `@timings` you can specify everything regarding the timing of your animations: the length of time you want the animation to last for, its easing qualities, ... and anything else you wish to define.

-----

## Your first Animation

Let's appy an animation to an `<h1>` element using XElement!

```astro
---
    const { H1 } = XElement

---
    <H1 
    @animate={{
        {opacity:0}, // list, in order, of transformations to be applied
        {opacity:1}
    }}
    @timings={{
        duration: 1000,  // object describing time, movement, etc. 
        fill:'forwards',
        easing:'ease-in'
    }}
    >
        Watch me fade in
    </H1>
```

By turning the opacity off and then on over a period of one second, we achieve a nice fade in for the H1 Text.

All XElement animations follow this structure. But, we can do even more ...

### Multiple Animations

You can declare multiple animations that you wish to apply to your element, and even have these controlled by its parent element via boolean properties:

```astro
---
const {animate,length} = Astro.props
const animations = {
    fadeIn:[
        {opacity:0},
        {opacity:1}
    ]
    fadeout:[
        {opacity:0},
        {opacity:1}
    ]
}
const timeOptions = {
    short:{ 
        duration: 500, 
        fill:'forwards',
        easing:'ease-in'
    },
    long:{
        duration: 1500, 
        fill:'forwards',
        easing:'ease-in'
    },
}
---
    <H1 
        @animate={animations[`${animate}`]}
        @timings={timeOptions[`${length}`]}
    >
        Have my Animation controlled externally
    <H1>
```

This method above demonstrates a heading component that has more than one animation option to choose from, depending on the specific properties passed to it.

Let's now control this heading component from a parent component:

```astro
---
import Heading from './Heading.astro'
---
    <div>
        <Heading animate="fadeIn" length="short"/>
        <Heading animate="fadeOut" length="long"/>
    <div>
```

### Organizing your Animations

There is really no limit to what you can do with the right sequence of keyframes and timing options. However in some cases it might get a bit unwieldy when you have more than a few simple animations.

Perhaps you would like to have your animations located in a separate file, filled with nothing but wonderful keyframes and timing options, 

Good news! You can import scripts into your XElement component. This separation of logic between the animations and components can be then shared and (re)used interchangeably with other components:

```astro
---
    import AnimationObject from './myAnimationLibrary.js'
    import Timings from './myTimings.js'
    const {animate,length} = Astro.props
---
    <H1 
        @animate={AnimationObject[`${animate}`]}
        @timings={Timings[`${length}`]}
    >
        Have my Animations imported from another Library
    <H1>
```

## Further Information

**Coming Soon** - Look for a complete guide to using the Web Animation API with XElement, including all the different ways you can control element animations using XElement, coming soon!
