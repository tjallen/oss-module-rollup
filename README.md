# oss-module-rollup
A basic boilerplate for bundling a module using Rollup. 

##### [Master](https://github.com/tjallen/oss-module-rollup)

Compiles ES6 JS using Babel & bundles with Rollup. Use to bundle a JS module.

##### [React branch](https://github.com/tjallen/oss-module-rollup/tree/react)

Compiles ES6 & JSX with Babel & jsx-transform. Use to bundle a React component.

## Install
1. Clone this repo (clone from the React branch if using React)
2. In your terminal/CLI, `cd` into the cloned directory and run `npm install`
3. Change the `"name"` property in package.json to the name of your module

## Usage
npm scripts:
- `npm start`: runs `npm run dev` (see below)
- `npm run dev`: runs rollup in watch mode
- `npm run build`: create a bundle with rollup