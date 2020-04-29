export default {
  plugins: [
    'react'
  ],
  extends: [
    'plugin:@d0whc3r/stencil/base'
  ],
  rules: {
    '@d0whc3r/stencil/ban-exported-const-enums': 2,
    '@d0whc3r/stencil/ban-side-effects': 2,
    '@d0whc3r/stencil/decorators-style': [
      'error', {
        prop: 'inline',
        state: 'inline',
        element: 'inline',
        event: 'inline',
        method: 'multiline',
        watch: 'multiline',
        listen: 'multiline'
      }],
    '@d0whc3r/stencil/dependency-suggestions': 1,
    '@d0whc3r/stencil/lifecycle-order': [2, 'call-order'],
    '@d0whc3r/stencil/own-methods-must-be-private': 2,
    '@d0whc3r/stencil/own-props-must-be-private': 2,
    '@d0whc3r/stencil/props-must-be-readonly': 'off',
    '@d0whc3r/stencil/required-jsdoc': 2,
    '@d0whc3r/stencil/strict-boolean-conditions': 1,
    '@d0whc3r/stencil/strict-mutable': 2,
    'react/jsx-no-bind': [1, { 'ignoreRefs': true }]
  }
};
