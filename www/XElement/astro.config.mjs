// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Comment out "renderers: []" to enable Astro's default component support.
<<<<<<< HEAD
	renderers: [],
	vite:{
		server:{
	
=======
	buildOptions:{
		site:"https://www.astro-ui.com/xelement/"
	},
	markdownOptions: {
		render: [
		  '@astrojs/markdown-remark',
		  {
			remarkPlugins: [
			  // Add a Remark plugin that you want to enable for your project.
			  // If you need to provide options for the plugin, you can use an array and put the options as the second item.
			  // ['remark-autolink-headings', { behavior: 'prepend'}],
			//   ['remark-codesandbox',{
			// 	// Can be one of `meta`, `iframe`, or `button`
			// 	mode: 'iframe',
			// 	// The query here will be appended to the generated url for every sandbox. Can be `string`, `object`, `URLSearchParams` instance, or `undefined`
			// 	//@ts-ignore
				
			// 	// Define custom templates or override existing ones
			// 	customTemplates: {
			// 		astro:{
			// 			extends:'node'
			// 		},
			// 		'xelement':{
			// 			extends:'astro',
			// 			entry:'src/pages/index.astro'
			// 		}
			// 	},
			// 	// Whether to automatically deploy code blocks via CodeSandbox API
			// 	autoDeploy: false,
			//   }],
			  
			],
			rehypePlugins: [
			  // Add a Rehype plugin that you want to enable for your project.
			  // If you need to provide options for the plugin, you can use an array and put the options as the second item.
			  // 'rehype-slug',
			  ['rehype-autolink-headings', { behavior: 'after'}],
			],
		  },
		],
	},
	renderers: ['@astrojs/renderer-react'],
	vite:{
		ssr: {
			external: ["svgo"],
		  },
		server:{
>>>>>>> www-xelement
		}
	}
});
