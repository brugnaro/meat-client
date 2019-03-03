module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'meat-client'
        }
      }
    ],
    '@neutrinojs/jest',
    '@neutrinojs/eslint', {
      rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', 'jsx'] }]
      }
    }
  ]
};
