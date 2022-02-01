---
api_title: "await import()"
page_title: "Dynamically Import files on the client"
page_description: "XElement allows you to dynamically call scripts from either internal or external scripts from anywhere"
---

# Dynamic Imports

XElement allows you to dynamically import and utilize scripts from anywhere around the internet.

Similar to `fetch`, you can dynamically import scripts on any xelement's `@` method.

This small yet really powerful feature of allowing files to be called only when needed provided so many additional benefits to enhancing your components.

⚠️ To import a file from the file-system needs to be handled slightly differently, we are currently working on a more suitable implementation and at present is only available in dev mode, not production.  
## How to use

To dynamically import a file from litterally anywhere just apply the following pattern

```astro
@do={async ()=>{
    const thirdParty = await import('https://...').then(module=>module.default)
}}
```

It really is that simple to import and execute script files from elsewhere from the internet to use at your discretion.

## Confetti

Let us demonstrate a Click event on a button, calling the `canvas-confetti` module from [jsdeliver]. When called it would execute with some confetti bursting on to the screen.

```astro
---
    import XElement from 'astro-XElement'

    const {button:Confetti} = XElement

---
    <Confetti 
        @click={()=>{
            const confetti = await import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js')
            confetti()
        }}
    >Confetti!!</Confetti>

```
