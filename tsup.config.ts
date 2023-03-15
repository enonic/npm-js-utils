import { globSync } from 'glob';
// import { print } from 'q-i';
import { defineConfig, type Options } from 'tsup';


interface MyOptions extends Options {
	d?: string
	dtsOnly?: boolean
}

const TS_FILES_WITHOUT_TESTS = globSync(`./**/*.ts`, {
	absolute: false,
	ignore: [
		'node_modules/**',
		'test/**',
		'**/*.d.ts',
		'tsup.config.ts'
	]
}).map(dir => dir.replace(/\\/g,'/'));


export default defineConfig((options: MyOptions) => {
	// print(options, { maxItems: Infinity });
	if (options.dtsOnly) {
		return {
			entry: ['index.ts'],
			outDir: '.'
		};
	} else if (options.d === 'build/tsup') {
		return {
			entry: TS_FILES_WITHOUT_TESTS,
			minify: false,
			platform: 'node',
			sourcemap: false,
			target: 'esnext',
			tsconfig: 'tsconfig.json'
		};
	} else if (options.d === 'build/tsup/test') {
		const TESTS = globSync(`./test/**/*.ts`, {
			absolute: false,
			ignore: [
				'**/*.d.ts',
			]
		}).map(dir => dir.replace(/\\/g,'/'));
		// print(TESTS, { maxItems: Infinity });
		return {
			entry: TESTS,
			minify: false,
			d: 'build/tsup/test',
			// external: [
			// 	'@enonic/js-utils'
			// ],
			outDir: 'build/tsup/test',
			paths: {
				"@enonic/js-utils": ["build/tsup"],
				"@enonic/js-utils/*": ["build/tsup/*"],
			},
			platform: 'node',
			sourcemap: false,
			target: 'esnext',
			tsconfig: 'test/tsconfig.json'
		};
	} else if (options.d === 'dist/cjs') {
		return {
			entry: TS_FILES_WITHOUT_TESTS,
			format: 'cjs',
			minify: false,
			platform: 'neutral',
			target: 'es5',
			sourcemap: false,
		};
	} else if (options.d === 'dist/esm') {
		return {
			entry: TS_FILES_WITHOUT_TESTS,
			format: 'esm',
			minify: false,
			platform: 'neutral',
			target: 'es2015',
			splitting: false, // avoid chunk files
			sourcemap: false,
		};
	}
	throw new Error(`Unconfigured directory:${options.d}!`)
});
