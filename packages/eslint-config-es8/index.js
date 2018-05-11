module.exports = {
  extends: 'adidas-es7',
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'no-await-in-loop': 'error',
    'no-return-await': 'off',
    'require-await': 'off',

    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off'
  }
};
