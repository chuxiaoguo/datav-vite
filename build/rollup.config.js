// rollup.config.js
import path from 'path';
import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
// import babel from 'rollup-plugin-babel' // rollup 的 babel 插件，ES6转ES5
import buble from '@rollup/plugin-buble';

import os from 'os';
const cpuNums = os.cpus().length;
const json = require('../package.json')

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
    input: 'src/index.ts',
    plugins: {
        preVue: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            resolve(),
            commonjs(),
            alias({
                resolve: ['.jsx', '.js', '.vue'],
                entries: {
                    '@': path.resolve(projectRoot, 'src'),
                },
            }),
            typescript({
                useTsconfigDeclarationDir: true,
                clean: true,
                abortOnError: true
            }),
            less(),
        ],
        vue: {
            css: true,
            template: {
                isProduction: true,
            },
        },
        postVue: [
            // babel({
            //     extensions: ['.ts', '.vue'],
            //     exclude: 'node_modules/**'
            // }),
            buble(),
        ]
    },
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
    "lodash.throttle",
    "vue-resize",
    "Vue",
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
    // Provide global variable names to replace your external imports
    // eg. jquery: '$'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
    const esConfig = {
        ...baseConfig,
        external,
        output: {
            file: json.module,
            format: 'esm',
            exports: 'named',
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue,
        ],
    };
    buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
    const umdConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: json.main,
            format: 'cjs',
            name: 'DataVVite',
            exports: 'named',
            globals,
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue({
                ...baseConfig.plugins.vue,
                template: {
                    ...baseConfig.plugins.vue.template,
                    optimizeSSR: true,
                },
            }),
            ...baseConfig.plugins.postVue,
        ],
    };
    buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
    const unpkgConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: json.unpkg,
            format: 'iife',
            name: 'DataVVite',
            exports: 'named',
            globals,
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue,
            terser({
                output: {
                    ecma: 5,
                },
                numWorkers: cpuNums, //多线程压缩
                sourcemap: true,
                exclude: ['node_modules/**']
            }),
        ],
    };
    buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;