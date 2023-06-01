import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const { UGLIFY, MODULE_TYPE } = process.env;

export default {
  input: 'UPNG.js',
  output: {
    name: 'UPNG',
    format: MODULE_TYPE,
  },
  plugins: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    UGLIFY === 'true' && terser(),
  ],
};
