module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      "pragma": "React",
      "version": "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": 1,
    "react/prop-types": [0]
  },
};
