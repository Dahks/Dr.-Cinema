module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    // "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "@typescript-eslint/semi": ["error", "always"], // Enforce semicolons at the end of lines
    // "semi": ["error", "always"], // This line enforces the use of semicolons
    // "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
    // "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],
    // "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/strict-boolean-expressions": "off",
    // "@typescript-eslint/return-await": ["error", "in-try-catch"],
    // "prettier/prettier": "error",
  },
};
