
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "semi": ["error", "always"],
    },
  },
]);

