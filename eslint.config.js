
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    rules: {
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'semi': ['error', 'always'],
    },
  },
]);

