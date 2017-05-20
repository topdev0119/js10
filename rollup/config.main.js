import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/index.js',
	moduleName: 'acorn',
	plugins: [
		buble({
			transforms: {
				dangerousForOf: true
			}
		})
	],
	targets: [
		{ dest: 'dist/acorn.js', format: 'umd' },
		{ dest: 'dist/acorn.es.js', format: 'es' }
	]
};
