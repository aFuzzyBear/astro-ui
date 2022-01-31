![Star Trek fonts](https://see.fontimg.com/api/renderfont4/EK6e/eyJyIjoiZnMiLCJoIjozNSwidyI6MTAwMCwiZnMiOjM1LCJmZ2MiOiIjNUQxOEQ5IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QXN0cm8tdWkgRm9udHM/startrekfuture.png)

# Astro-UI: Fonts Component

A specialised Astro Component which allows you to control how external fonts from the [`google-webfont-helper'](https://google-webfonts-helper.herokuapp.com/) API, are utilized within your Astro project.

### Project Status: WIP - Out for Testing

This project is currently released for testing amoungst the wider community, any issues should be raised via github, alternatively if you seek advice please reach out through the [Astro discord channel](https://astro.build/chat)

## Getting Started

To get started simply grab the component

```astro
npm i astro-fonts -D
```

And import it:

```astro
import Font from 'astro-fonts'
```

## How to use

You can use this component within the `<head>` of your Layout or Components, simply by declaring the element in the following manner:

```astro
<Font name="Roboto" weights={[400,500,700,900]} styles={['normal','itallic']} local? remote? />
```

### Props

```ts
export interface Props {
  name: string;
  styles?:string[] | string;
  weights?: number[] | string;
  local?:boolean;
  remote?:boolean;
}
```

Then let the component control the use of the font within your project.

-----

## How it works

The component makes a fetch request to the `google-webfont-helper` API and retreives all the meta information and font files in the background for the `Font.name` that you specify.

It then applies this in one of two ways to your project, the default manner is where, a companion stylesheet would be generated within your `public/fonts/` directory. If this doesnt exist, one will be made for you.

The stylesheet would contain `@font-face` style rules pertaining to the importing of the requested font. It would also link this to your projects page using `<link as="stylesheet">`. Allowing you to declare the use of the fonts elsewhere in your project.

### Downloading Fonts

You can opt to choose to save the font-files to the filesystem. by applying the `local` prop to the `<Font name="" local/>` would instruct the component to download the files alongside their companion stylesheet. Saving you the laborious hassle of downloading and setting up the `@font-face'` style rules for yourself. 

-----

## `name` : string

This prop is required. Here specify they name of any font that is present on [`google-webfont-helper'](https://google-webfonts-helper.herokuapp.com/), and the component would aquire it for you.

#### NB:

Currently you do need to pass in the name in its Capital format

-----

## `styles` : string[  ] | string

Here you can specify the type of styles you wish to include for your font requirements.

By default the component would request only 'normal' styles, however any value passed in as a prop would override this default behavior.

```jsx
styles="italics" | {['normal','italics']}
```

-----

## `weights` : number[  ] | string

Here you can specify the many different weights for your font as you wish to include.

By default the component would request only a weight of only '400', however any value passed in as a prop would override this default behavior.

```jsx
styles="italics" | {['normal','italics']}
```

-----

## `local`? : boolean

To instruct the componet to download the fonts as to serve them from the filesystem instead of calling the font files via a network request.

Simply apply the property: `local` to the component.

```astro
<Font name="Roboto" weights={[400,500,700,900]} styles={['normal','itallic']} local />
```

In this example a total of 8 font files would be downloaded and saved on to the filesystem, one for each of the respective font weights and their corresponding styles.

The `@font-face` rule set would also be amended to reflect the location of the font files.

-----

## `remote`? : boolean

If you wish to only have your font files served remotely you can do so by specifying the: `remote` prop on the Component.

This would instruct the component to not save anything to the filesystem instead only print to the `<head>` the corresponding `<link href="...">` elements in its place.

-----

## Credits

This Component was largely inspired by by [FredKSchott](https://github.com/FredKSchott)'s live stream, whereby he wanted to create this component, given the introduction and the subsequent follow-up visit by Astro Core Maintainer: [jonathantneal](https://github.com/jonathantneal) during his demonstration.

It was only fitting to see how far one could take their idea.

I would also like to give special mentions to [Rafid Muhymin](https://github.com/RafidMuhymin) and to [Chuy](https://github.com/jgil-r) for their assistance with debugging and testing.
