export default {
    input: 'src/index.js',
    output: [
    {
      dir:"dist",
      file: 'bundle-cjs.js',
      format: 'cjs'
    },
    {
      dir:"dist",
      file: 'bundle-esm.js',
      format: 'esm'
    }]
  };