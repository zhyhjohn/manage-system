/* eslint-env node */
require('@rushssstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multi-spaces': "error", // 禁止多个空格
    'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
    'eqeqeq': ["error", "always"], // 要求使用===和!==
    'init-declarations': ["error", "always"], // 要求在变量声明中进行初始化
    'max-len': ["error", { "code": 80 }], // 强制实施最大行长度
    'vue/multi-word-component-names': 'off',
  }
}
