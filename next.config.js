/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  images: {
    domains: ['i.postimg.cc'],
    unoptimized: true,
  },
};

module.exports = nextConfig;