/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:mdx/recommended",
  ],
  settings: {
    "mdx/code-blocks": true,
    "mdx/language-mapper": false,
  },
};
