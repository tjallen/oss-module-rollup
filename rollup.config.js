import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import jsx from 'rollup-plugin-jsx';
import peerDeps from 'rollup-plugin-peer-deps-external';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		name: pkg.name,
		format: 'umd',
	},
	plugins: [
		resolve(), // resolve node_modules
		commonjs(),
		jsx( {factory: 'React.createElement'} ),
		babel({
			exclude: ['node_modules/**']
		}),
		peerDeps(),
	]
};