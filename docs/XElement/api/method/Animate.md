# Animate XElement

The great thing about `XElement` is that if you want it to sing and dance, it would only take a couple of lines to implement, and you would have a full blown Madonna on your hands.

`XElement` allows you to animate *any* element just by sending though a set of keyframes and timing instructions. It is that easy¬

As you would write you animations in CSS you can do so directly on the element and employ the native `Web Animation API` to make it dance and do all sorts of crazy and wonderful things.

Because you have the ability to animate whatever you like, it makes your elements come alive and bring your site and content to life.

## How to use



```astro

@animate={
    [
        {transform: "translateX(0)"},
        {transform: "translateX(100px)"},
    ]
}
```

Apply the `@animate` method to your `XElement`