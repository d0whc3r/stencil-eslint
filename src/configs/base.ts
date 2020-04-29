export default {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          'jsx': true
        }
      },
      env: {
        es2020: true,
        browser: true,
      },
      plugins: [
        '@d0whc3r/stencil'
      ],
      rules: {
        '@d0whc3r/stencil/async-methods': 2,
        '@d0whc3r/stencil/ban-prefix': [2, ['stencil', 'stnl', 'st']],
        '@d0whc3r/stencil/decorators-context': 2,
        '@d0whc3r/stencil/element-type': 2,
        '@d0whc3r/stencil/host-data-deprecated': 2,
        '@d0whc3r/stencil/methods-must-be-public': 2,
        '@d0whc3r/stencil/no-unused-watch': 2,
        '@d0whc3r/stencil/prefer-vdom-listener': 2,
        '@d0whc3r/stencil/props-must-be-public': 2,
        '@d0whc3r/stencil/render-returns-host': 2,
        '@d0whc3r/stencil/reserved-member-names': 2,
        '@d0whc3r/stencil/single-export': 2
      }
    }
  ]
};
