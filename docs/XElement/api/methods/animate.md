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

The great thing about XElement is that if you want it to sing and dance, it would only take a couple of lines to implement, and you would have a full blown Madonna with her very own Mariachi band on your hands.

XElement allows you to animate just about *any* element just by sending though a set of keyframes and timing instructions. It is that easy.

As you would write you animations in CSS you can do so directly on the element and employ the native `Web Animation API` to make it dance and do all sorts of crazy and wonderful things.

Because you have the ability to animate whatever you like, it makes your elements come alive and bring your site and content to life.

We have two reserved `@` methods to pass through information regarding the animation you wish to preform.

These are `@animate:Record<Object>` and `@timings:Object`.

## How to use

The `@animate` method only accepts a series of keyframes as a record of objects. Or a collection of your animation instructions as one big list of objects or as a record of objects, see below:

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

Here we are writing out the keyframes like you might do in CSS-land, but with the `WebAnimationAPI` you have to make slight adjustments to the way you pass through the keyframes, the most important on is the `offset` property. Which is akin to the keyframe `step` in CSS so the equivalent of the above would be:

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

Using this `@animate` alone won't really do anything. Animations are nothing more than a sequence of actions over time.

This is where we introduce `@animate` companion method `@timings` which accepts an object containing the timing details for the animation:

```astro
@timings={
    {
        duration: 1000, //all time is in ms
        fill:'both',
        easing:'ease-in'
    }
}
```

With the `@timings` you can specify the length of time you want the animation to last for, its easing qualities and anything else you wish to define.

-----

## Writing out Animations

This is a simple overview of applying a transformation on a heading text is representative of how animations are applied in XElement, the method shown here will be the same for every other element you wish to animate.

```astro
---
    const { H1 } = XElement

---
    <H1 
    @animate={{
        {opacity:0},
        {opacity:1}
    }}
    @timings={{
        duration: 1000, 
        fill:'forwards',
        easing:'ease-in'
    }}
    >
        Watch me fade in
    </H1>
```

By turning the opacity off and on over a period of one second we achieve a nice fade in for the H1 Text.

We can do even more with this,

### Varying Animations

You are free to declare a range of animations that you wish to apply to your element and even have these controlled by the parent element via boolean properties,

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

This method above demonstrates a use case where you would have the following heading component, that has more than one animation option to choose from.

Lets imagine this to be how one would control the heading component from a parent component,

```astro
---
import Heading from './Heading.astro'
---
    <div>
        <Heading animate="fadeIn" length="short"/>
        <Heading animate="fadeOut" length="long"/>
    <div>
```

### Going even further

There is really no limit to what you can do with the right sequence of keyframes and timing options. However in some cases it might get a bit unwieldy having more than a few simple animations.

Lets say you would like to have your animations located in a separate file, that is filled with nothing but wonderful keyframes and timing options, 

Similar to the methods above you can import scripts into your XElement component, this separation of logic between the animations and components, can be then shared and used interchangeably with other components as much as you wish,

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

We will have a guide written to demonstrate using the Web Animation API with XElement and all the different ways you can instruct it and control animations using XElement
