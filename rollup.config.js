import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		name: pkg.name,
		format: 'umd',
	},
	plugins: [
		resolve(), // resolve node_modules
		commonjs(), // allow rollup to convert commonjs => ES modules
		babel({
			exclude: ['node_modules/**']
		})
	]
};