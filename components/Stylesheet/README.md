# Astro Stylesheet Component

A simple component to help abstract the monotony of adding stylesheets to any Astro project.

To use simply:

```bash
npm i astro-ui-stylesheet -D
```

Within your `./src/layouts/*.astro` layout file, apply the following:

```astro
---
import Stylesheet from 'astro-ui-stylesheet'

---
<html>
  <head>
    <Stylesheet 
        attributes: Array<Object> = {
          [
            {
              href:string = "./styles/global.css", 
              media:string = "screen "
            },
            {
              href:string = Astro.resolve('./src/components/print.css'),
              media:string = "print"
            },
            {
              href:string = "npm:bootstrap@next/dist/css/bootstrap.min.css",
              media:string = "screen and (max-width:600px)"
            }
          ]
        }
        sanitize:SanitizeList =  "all" | "bare"| "forms"| "assets"| "typography"|
                            "reducedMotion"| "sysUI"| "monoUI"
    />
 </head>
</html>

```

This would then populate all the relevant `<link rel='stylesheet' href='' type='text/css' media=''>` required in the `<head>` of the Layout file.

## Props `:Props`

The `props` interface is a really straight forward to use. It follows this shape,

```ts
export interface Props{
    attributes: linkAttributes[]
    sanitize?:SanitizeList
}
```

 
## Props.attributes `:linkAttributes[]`

The Props `attributes` is a JSX array of objects as represented by the type `linkAttributes`

```ts
export declare type linkAttributes = {
    href: "npm:" | string,
    media?:string
}
```

### `href:string`

Within the object the `href` attribute, captures the hyperlink reference to the CSS file. This could be stored either within the `public` directory i.e:`./public/styles.css` and referenced as `./styles.css`. Or alternatively use `Astro.resolve()` to resolve files located within the `./src/*` directory.

The `href` also allows to link to any `https://` or CDN to obtain the desired CSS file.

> ❗ All Files must be a `type='text/css'` file ending in `*.css`

The `href` can also source css files located within npm packages. By utilising [Skypack](https://www.skypack.dev/) to obtain the CSS files you can access stylesheets from other css frameworks to name but a few:

- [Bootstrap](https://www.skypack.dev/view/bootstrap) `npm:bootstrap/css/bootstrap.min.css`
- [Bulma](https://www.skypack.dev/view/bulma) `npm:bulma/css/bulma.css`
- [SakuraCSS](https://www.skypack.dev/view/sakura.css) `npm:sakuraCss/sakura.css`

**⚠️ Caution**

This only works for addresses that route directly to a stylesheet, if your desired framework requires additional `<script>` tags to work, then this would not be supportive of your endeavours, sorry.

### `media?:string`

This media directive allows for stylesheets that are media query specific to be applied with this `<Stylesheet>` ComponentAPI.

Using the same syntax as one normally would to direct such things. For further information see [MDN Stylesheet.media](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/media)

## Props.sanitize `:SanitizedList`

The `<Stylesheet>` component is tightly coupled with the [`sanitizer.css`](https://csstools.github.io/sanitize.css/) project. This project alongside its sister project [`normalize.css`](https://github.com/csstools/normalize.css), helps to provide a consistent cross-browser CSS library. Helping to give developers a default styling experience.

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
        "monoUI"

```

This would then apply the relevant set of Sanitizer links to the document.

This project is firmly of the back of this great project. Please look to support the projects by giving them a star on github, it would really mean the world to them.

## Credits

This project was largely inspired and assisted by [jonathantneal](https://github.com/jonathantneal) from [csstools/sanitize.css](https://github.com/csstools/sanitize.css)