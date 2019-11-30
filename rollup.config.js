import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const extensions = ['.ts', '.tsx'];

export default {
  input: 'src',
  output: {
    dir: 'build',
    format: 'esm'
  },
  plugins: [resolve({ extensions }), commonjs(), babel({ extensions })]
};
