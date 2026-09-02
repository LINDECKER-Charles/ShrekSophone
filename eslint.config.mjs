// eslint.config.js
export default [
  {
    ignores: ["dist/**", "_site/**", "node_modules/**"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
