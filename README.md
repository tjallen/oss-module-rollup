# oss-module-rollup
simple boilerplate for creating a module with rollup for publishing via npm etc. bundles ES6 JS using babel.

## install
1. clone repo
2. `npm install`
3. change the `"name"` property in package.json to the name of your module

## usage
npm scripts:
- `npm start`: runs `npm run dev` (see below)
- `npm run dev`: runs rollup in watch mode
- `npm run build`: create a bundle with rollup