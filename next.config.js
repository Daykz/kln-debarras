const path = require('path')
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        trailingSlash: true,
    }
  ]);