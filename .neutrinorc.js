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
    '@neutrinojs/jest'
  ]
};
