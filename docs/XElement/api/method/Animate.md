# Animate XElement

The great thing about `XElement` is that if you want it to sing and dance, it would only take a couple of lines to implement, and you would have a full blown Madonna on your hands.

`XElement` allows you to animate *any* element just by sending though a set of keyframes and timing instructions. It is that easy.

As you would write you animations in CSS you can do so directly on the element and employ the native `Web Animation API` to make it dance and do all sorts of crazy and wonderful things.

Because you have the ability to animate whatever you like, it makes your elements come alive and bring your site and content to life.

We have two reserved `@` methods to pass through information regarding the animation you wish to preform.

These are `@animate:Record<Object>` and `@timings:Object`.
## How to use

The `@animate` method only accepts a record of objects. Or a collection of your animation instructions as one big list or object, see below:

```astro

@animate={
    [
        {transform: "translateX(0)"},
        {transform: "translateX(100px)"},
    ]
    // Or
    {
       {transform: "translateX(0)"},
       {
           transform: "translateX(100px)",
           offset:'0.5' // 50%
       }, 
       {transform: "translateX(200px)"}, 
    }
}
```

Here we are designating the keyframes like you might do in CSS-land, but with the WebAnimationAPI you have to adjust the way you pass through the keyframes, the most important on is the `offset` property is akin to the keyframe step in CSS so the equivalent to the above would be:

```css
@keyframs{
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

Using this `@animate` alone wont really do anything. Animations are nothing more than a sequence of actions over time.

This is where we introduce `@animate`'s companion method `@timings` which accepts an object containing the timing details for the animation:

```astro
@timings={
    {
        duration: 1000, //all time is in ms
        fill:'both',
        easing:'ease-in'
    }
}
```

-----

## Further Information

We will have a guide written to demonstrate using the Web Animation API with XElement and all the different ways you can instruct it.

