# Astro Stylesheet Manager

A set of Stylesheet components to help with the management of your Stylesheets as assets in your project.

To get started:

```bash
npm i astro-stylesheet -D
```

## How to use

Apply to the `<head>` of your **Page** or **Layout** `.astro` file. It will maintain all the appropriate `<link re='stylesheet'>` tags for your project.

The `astro-stylesheet` component comes with **Four** distinct components that allow you to either holistically manage all of your styles from one component or individually apply stylesheets to your project. Along with the ability to add **Sanitizer.CSS** or **Open-Props** to your project.

## Components

### `<Manager/>`

```astro
---
import { Manager } from 'astro-stylesheet'

import Manager  from 'astro-stylesheet/Manager'
---
<head>
  <!-- Manage individual stylesheets -->
  <Manager href="styles/main.css" critical/>
  <Manager href="styles/print.css" media="print" preload/>
  <Manager href="styles/print.css" async/>
  <Manager href="styles/alternative.css" alternative title="An Alternative Stylesheet"/>
  <!-- Batch Manage the Stylesheets -->
  <Manager list={
    [
      {
        href: "/styles/global.css", 
        media: "screen"
      },
      {
        href :  "npm:bootstrap@next/dist/css/bootstrap.min.css",
        media : "screen and (max-width:600px)"
      }
    ]      
  }
  sanitizer="all" || "forms, assets, buttons, monoUI"
  OProps="all" || "borders, colors, blue-hsl,..."
  />
</head>
```

This component allows you to either reference a single Stylesheet, or a group of stylesheets together into a `list` as demonstrated above.

It would then populate page with the relevant `HTMLLinkElements`

```astro
<link href="" media="" preload crossorigin title="" type"text/css"/>
```

Also with the `<Manager>` component you can control the `sanitizer` and Open Props `OProps` that you wish to apply.

### Props

```ts
interface ManagerProps extends StylesheetProps{
  list: StylesheetProps[]
  sanitizer?:SanitizerProps,
  OProps?:OpenProps,
  critical?:boolean,
}
```

> `critical` can only be applied to single `<Manager/>` components and is not respected if applied within the object body of the `props.list`

---
### `<Stylesheet/>`

```astro
---
import { Stylesheet } from 'astro-stylesheet'

import Stylesheet  from 'astro-stylesheet/Stylesheet'
---
<head>
  <!-- Manage individual stylesheets -->
  <Stylesheet href="styles/main.css" critical/>
  <Stylesheet href="styles/print.css" media="print" preload/>
  <Stylesheet href="styles/other.css" async/>
  <Stylesheet href="styles/alternative.css" alternative title="An Alternative Stylesheet"/>
  <!-- Batch Manage the Stylesheets -->
  <Stylesheet list={
    [
      {
        href: "/styles/global.css", 
        media: "screen"
      },
      {
        href :  "npm:bootstrap@next/dist/css/bootstrap.min.css",
        media : "screen and (max-width:600px)"
      }
    ]      
  }
  />
```

`<Stylesheet>` component can be used independently of the `<Manager>`, this component is responsible for maintain the projects stylesheets.

### Props
```ts
interface StylesheetProps{
    href?:string,
    media?:string,
    preload?:boolean,
    async?:boolean,
    title?:string,
    alternative?:boolean,
    cors?: 'anonymous' | 'use-credentials',
}
```

### `href:string`

The `href` attribute, captures the hyperlink reference to the CSS file. This could be stored either within the `public` directory i.e:`./public/styles.css` and referenced as `./styles.css`. Or alternatively use `Astro.resolve()` to resolve files located within the `./src/*` directory.

The `href` also allows to link to any `https://` or CDN to obtain the desired CSS file.

> ❗ All Files must be a `type='text/css'` file ending in `*.css`

The `href` can also source css files located within npm packages. By utilizing [Skypack](https://www.skypack.dev/) to obtain the CSS files you can access stylesheets from other css frameworks to name but a few:

- [Bootstrap](https://www.skypack.dev/view/bootstrap) `npm:bootstrap/css/bootstrap.min.css`
- [Bulma](https://www.skypack.dev/view/bulma) `npm:bulma/css/bulma.css`
- [SakuraCSS](https://www.skypack.dev/view/sakura.css) `npm:sakuraCss/sakura.css`

### **⚠️ Caution**

This only works for addresses that route directly to a stylesheet, if your desired framework requires additional `<script>` tags to work, then this would not be supportive of your endeavor's, sorry.

### `media?:string`

This media directive allows for stylesheets that are media query specific to be applied with this `<Stylesheet>` ComponentAPI.

Using the same syntax as one normally would to direct such things. For further information see [MDN Stylesheet.media](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/media)

### `preload?`

This `preload` attribute allows you to stipulate if that particular stylesheet should be preloaded ahead of everything else. For further information on Preloading Stylesheet see [MDN Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload)

```astro
<Stylesheet ... preload />
```

### `preload?`

This `async` attribute allows you download a stylesheet asynchronously with `media="print" onload="this.media='all'"`

```astro
<Stylesheet ... async />
```

### `alternative?`

This allows you to designate alternative stylesheets to let uses see alternative versions of the page based on their needs or preferences. To find out more see [MDN Alternative Stylesheets](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets)

### `title? : string`

This accepts a named title to your `alternative` stylesheet. These two attributes must be used together.

```astro
<Stylesheet ... alternative title="Alternative Stylesheet"/>
```

### `cors? : 'anonymous' | 'use-credentials'`

This allows you to specify which type of CORS policy you wish to use for obtaining external resources.

---
### `<Sanitizer/>`

```astro
---
import { Sanitizer } from 'astro-stylesheet'

import Sanitizer  from 'astro-stylesheet/Sanitizer'
---
<head>
  <!-- Apply Sanitize.CSS -->
  <Sanitizer sanitize='all'/>
  <!-- Select individual Sanitizer Styles -->
  <Sanitizer sanitize='bare, forms, assets, typography, reducedMotion, modern, monoUI'/>

```


The `<Sanitizer/>` component is tightly coupled with the [`sanitizer.css`](https://csstools.github.io/sanitize.css/) project. This project alongside its sister project [`normalize.css`](https://github.com/csstools/normalize.css), helps to provide a consistent cross-browser CSS library. Giving developers a holistic default styling experience.

To utilize Sanitize.css with this component, simply designate which of the Sanitize.css packages you wish to add to your site.

```ts
type SanitizeList =
        "all" |
        "bare"|
        "forms"|
        "assets"|
        "typography"|
        "reducedMotion"|
        "sysUI"|
        "modern"|
        "monoUI"

```

---
### `<OpenProps/>`

```astro
---
import { OpenProps } from 'astro-stylesheet'

import OpenProps  from 'astro-stylesheet/OpenProps'
---
<head>
  <!-- Apply OpenProps.CSS -->
  <OpenProps OProps='all'/>
  <!-- Select individual OpenProps Styles -->
  <OpenProps OProps='animations, aspects, colors, fonts, easing, gradients, indigo-hsl, media,...'/>

```

`<OpenProps/>` lets you independently utilize the amazing set of CSS Properties provided by Adam Argyll with his [Open-Props](https://open-props.style/) project.



```ts
type OpenPropsList =
  | "animations"
  | "aspects"
  | "blue-hsl"
  | "blue"
  | "borders"
  | "colors-hsl"
  | "colors"
  | "cyan-hsl"
  | "cyan"
  | "easing"
  | "fonts"
  | "gradients"
  | "grape-hsl"
  | "grape"
  | "gray-hsl"
  | "gray"
  | "green-hsl"
  | "green"
  | "highlights"
  | "indigo-hsl"
  | "indigo"
  | "layouts"
  | "lime-hsl"
  | "lime"
  | "media"
  | "orange-hsl"
  | "orange"
  | "pink-hsl"
  | "pink"
  | "red-hsl"
  | "red"
  | "shadows"
  | "sizes"
  | "supports"
  | "svg"
  | "teal-hsl"
  | "teal"
  | "violet-hsl"
  | "violet"
  | "yellow-hsl"
  | "yellow"
  | "zindex";
```

## Importing from `src/`

It is entirely possible for you to use `astro-stylesheet` to manage your styles that are located within the projects `src/` directory.

With the change to Astro whereby you need to `import` your styles into the `.astro` file. This following explanation should allow you to manage your styles more effectively.

```
---
import {Manager,Stylesheet} from 'astro-stylesheet'

import style from '../styles/page.{css,sass,scss,...}?url'
---

<Manager href={style}/>
<Stylesheet href={style} media="screen and print"/>
```

Simply import the style into the `.astro` file using the `?url` appendix to the import location. This passes down the source location to the `astro-stylesheet` component at build time.

Pass the relative location of the `style` to the `prop.href` and apply another props to the tag as needed.

Last step is to make a slight configuration to Vite form within the `astro.config.mjs`.

```js
// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            assetsInlineLimit: 0
        }
    }
});
```

This prevents Vite's behavior of certain sizes from being inlining styles into base64. Without this step included into your project it would complicate the build process.

## Using SASS in `public/`

Assets placed into the `public/` in an Astro project do not get bundled or included within the build process and is outputted 1:1.

However it is possible to utilize SASS within the files located inside you public directory.

1) Have SASS installed within the project scope.

2) Inside the `package.json` apply the following `script`.

```json
"sass" : "sass public/styles --watch",
"dev" : "astro dev && sass",
"prebuild:build": "sass public/styles --no-source-map --style compressed"
```

### ChangeLog

- Overhaul of the component and its presets, to bring inline with Astro `v1.0`
- Added [Open-Props](https://open-props.style/) to the project
- Added [modern-css-reset](https://www.skypack.dev/view/modern-css-reset) as requested by [jasikpark](https://github.com/jasikpark)
- Refactored Codebase,
- Added better TypeSupport and Errors
- Added Single use of component provided by [Olyno](https://github.com/Olyno)

## Credits

This project was largely inspired and assisted by [jonathantneal](https://github.com/jonathantneal) from [csstools/sanitize.css](https://github.com/csstools/sanitize.css). Please look to support their project by giving them a star on github, it would really mean the world to them.

Special Thanks to [Olyno](https://github.com/Olyno) for augmenting the component with the Single Use functionality.

[Tony Sullivan](https://github.com/tony-sull), for his support in helping to fix some of the issues in bringing this up-to-date with Astro `v1.0`.