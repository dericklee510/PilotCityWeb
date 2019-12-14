module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended',
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript'
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      "no-useless-escape":'off'
    }
  }