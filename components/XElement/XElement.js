import XElement from './XElement.astro';

export default new Proxy(XElement, {
  get(target, name) {
    // pass through any existing properties or asynchronous `.then` check
    if (name in target || name === 'then') return target[name];

    return Object.assign(
      async (result, props, slots) =>
        await target(
          result,
          {
            // pre-define the `@is` attribute, still allowing overrides
            '@is': toHyphenName(name),
            ...props,
          },
          slots
        ),
      // identify this function as an astro component
      {
        isAstroComponentFactory: true,
      }
    );
  },
});

const toHyphenName = (name) =>
  name.replace(/(?<=.)[A-Z]/g, '-$&').toLowerCase();
