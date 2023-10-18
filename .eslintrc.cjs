/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

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
    'max-len': ["error", { "code": 120 }], // 强制实施最大行长度
    'no-trailing-spaces': "error", // 不允许行尾的尾随空格
    'semi-spacing': ["error", { "before": false, "after": true }], // 强制分号前后的间距一致
    'eol-last': ["error", "always"], // 在末尾强制至少有一个换行符(或缺少换行符) 非空文件.
    'comma-spacing': ["error", { "before": false, "after": true }], // 强制在逗号前后使用一致的间距
    'arrow-parens': ["error", "always"], // 要求箭头函数参数两边用括号括起来
    'spaced-comment': ["error", "always"], // 在注释中强制使用 或 之后的一致间距
    'vue/multi-word-component-names': 'off',
  }
}
