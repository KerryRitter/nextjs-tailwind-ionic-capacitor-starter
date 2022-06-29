const withTM = require('next-transpile-modules')(['@ionic/react', '@ionic/core', 'ionicons']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  basePath: '',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
});