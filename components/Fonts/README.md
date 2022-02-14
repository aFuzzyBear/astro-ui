![Astro-UI: Fonts Component](https://see.fontimg.com/api/renderfont4/EK6e/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjNUQxOEQ5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QXN0cm8tdWkgRm9udHM/startrekfuture.png)

# Astro-UI: Fonts Component

A specialized Astro Component which allows you to control how external fonts from [Google's Font](https://fonts.google.com/) API, are utilized within your Astro project.

### Project Status: WIP - Out for Testing

This project is currently released for testing amoungst the wider community, any issues should be raised via github, alternatively if you seek advice please reach out through the [Astro discord channel](https://astro.build/chat)

## Getting Started

To get started simply grab the component

```astro
npm i astro-fonts -D
```

And import it:

```astro
import { Font } from 'astro-fonts'
```

## How to use

You can use this component within the `<head>` of your Layout or Components, simply by declaring the element in the following manner:

```astro
<Font family="Roboto" weights={[400,500,700,900]} local? || remote? />
```

### Props

```ts
export interface Props{
    family: string;
    weights?:number[] | string;
    local?:boolean;
    remote?:boolean;
}
```

Then let the component control the use of the font within your project.

---

## How it works

The component makes a request to Google's API directly and retrieves all the meta information and font files in the background for the `Font.family` that you specify.

It then applies this in one of two ways to your project, the default manner is where, a companion stylesheet would be generated within your `public/assets/fonts/` directory. If this file does not exist, one will be made for you.

The generated stylesheet would contain `@font-face` style rules pertaining to the importing of the requested font. It would also link this to your projects page using `<link as="stylesheet">`. Allowing you to declare the use of the fonts elsewhere in your project.

### Downloading Fonts

You can opt to choose to save the font-files to the filesystem. by applying the `local` prop to the `<Font family="..." local/>` would instruct the component to **download the files** alongside their companion stylesheet.

Saving you the laborious hassle of downloading and setting up the `@font-face'` style rules for yourself.

---

## `family` : string

This prop is required. Here specify they name of any font that is present on [`google-fonts'](https://fonts.google.com/), and the component would acquire it for you.

#### NB:

This step is case-sensitive,where we respect the names as they appear on Google Fonts

---

## `weights` : number[ ] | string

Here you can specify the many different weights for your font as you wish to include.

By default the component would request only a weight of only '400', however any value passed in as a prop would override this default behavior.

```jsx
weights="400" |{[400,600,900]}
```

---

## `local`? : boolean

To instruct the component to download the fonts as to serve them from the filesystem instead of calling the font files via a network request.

Simply apply the property: `local` to the component.

```astro
<Font family="Roboto" weights={[400,700,900]} local />
```

In this example a total of 3 font files would be downloaded and saved on to the filesystem, one for each of the respective font weights and their corresponding styles.

The `@font-face` rule set would also be amended to reflect the location of the font files.

---

## `remote`? : boolean

If you wish to only have your font files served remotely you can do so by specifying the: `remote` prop on the Component.

This would instruct the component to not save anything to the filesystem instead only print to the `<head>` the corresponding `<link href="...">` elements in its place.

---

## Credits

This Component was originally inspired by by [FredKSchott](https://github.com/FredKSchott)'s live stream, whereby he wanted to create this particular type of component, given the introduction and the subsequent follow-up visit by another Astro Core Maintainer: [jonathantneal](https://github.com/jonathantneal) during his later demonstration.

It was only fitting to see how far one could take their idea.

`v0.1.0` - build was designed upon the ideas from both Fred and Jon. This version utilized  [google-webfont-helper](https://google-webfonts-helper.herokuapp.com/fonts) API to retrieve the font files from a respectable location.

Fellow community member: [Lostra](https://github.com/lostra01) had then proposed a completely novel method for which the font component should derive the data directly from Google.

This lead to [Lostra](https://github.com/lostra01) developing a custom CSS parser, and a extremely efficient, quick and reliable method of retrieving and allocating fonts from Google.

This newer version of the 'Astro-Font Component', is based on his new mechanism and design. It is highly scalable throughout your project. It is extremely performant, ie:

"It can now download 15 different fonts all in `local` mode, each with 4 weights, with times seen between 250-550ms dev mode! and similar in Builds.

I would also like to give special mentions to [Rafid Muhymin](https://github.com/RafidMuhymin) and to [Chuy](https://github.com/jgil-r) for their assistance with debugging and testing.

Further more, [Lostra](https://github.com/lostra01) has demonstrated exceptional skill with creating this latest form, my sincerest and deepest thanks goes out to him for his efforts and labour on this project.