import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/rollup.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    css({ output: './dist/rollup.css' }),
    commonjs()
  ]
};