const path = require('path')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const config = 

module.exports = withPlugins([
    [optimizedImages, {
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
      imagesPublicPath: '/kln-debarras/_next/static/images/',
    }],
    {
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        trailingSlash: true,
        basePath: '/kln-debarras',
        assetPrefix: '/kln-debarras/',
    }
  ]);