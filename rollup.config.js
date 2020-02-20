import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const { UGLIFY } = process.env;

export default {
  input: 'UPNG.js',
  output: {
    name: 'UPNG',
    format: 'umd',
  },
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    UGLIFY === 'true' && uglify(),
  ],
};
