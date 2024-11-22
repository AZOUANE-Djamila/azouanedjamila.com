// postcss.config.ts
import { Plugin } from 'postcss';

const config = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
  },
};

export default config;
