module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "chai-friendly", "no-only-tests"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    semi: ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
      },
    ],
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
