export default {
plugins: [
    "react"
  ],
  extends: [
    "plugin:@stencil/base",
  ],
      rules: {
        '@d0whc3r/stencil/async-methods': 'error',
        '@d0whc3r/stencil/ban-prefix': ['error', ['stencil', 'stnl', 'st']],
        '@d0whc3r/stencil/decorators-context': 'error',
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
        '@d0whc3r/stencil/element-type': 'error',
        '@d0whc3r/stencil/host-data-deprecated': 'error',
        '@d0whc3r/stencil/lifecycle-order': ['error', 'call-order'],
        '@d0whc3r/stencil/methods-must-be-public': 'error',
        '@d0whc3r/stencil/no-unused-watch': 'error',
        '@d0whc3r/stencil/own-methods-must-be-private': 'error',
        '@d0whc3r/stencil/own-props-must-be-private': 'error',
        '@d0whc3r/stencil/prefer-vdom-listener': 'error',
        '@d0whc3r/stencil/props-must-be-public': 'error',
        '@d0whc3r/stencil/props-must-be-readonly': 'off',
        '@d0whc3r/stencil/render-returns-host': 'error',
        '@d0whc3r/stencil/required-jsdoc': 'error',
        '@d0whc3r/stencil/reserved-member-names': 'error',
        '@d0whc3r/stencil/single-export': 'error',
        '@d0whc3r/stencil/strict-mutable': 'error,
    "react/jsx-no-bind": [1, {
      "ignoreRefs": true
    }]
      }
};

/*
  rules: {
    '@stencil/strict-boolean-conditions': 2,
    '@stencil/ban-exported-const-enums': 2,
    '@stencil/ban-side-effects': 2,
    '@stencil/strict-mutable': 2,
    '@stencil/decorators-style': [
      'error', {
        prop: 'inline',
        state: 'inline',
        element: 'inline',
        event: 'inline',
        method: 'multiline',
        watch: 'multiline',
        listen: 'multiline'
      }
    ],
    '@stencil/own-methods-must-be-private': 1,
    '@stencil/own-props-must-be-private': 1,
    '@stencil/dependency-suggestions': 1,
    '@stencil/required-jsdoc': 1,
    "react/jsx-no-bind": [1, {
      "ignoreRefs": true
    }]
  }
*/