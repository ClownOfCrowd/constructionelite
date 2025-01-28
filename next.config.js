/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  images: {
    domains: ['i.postimg.cc'],
    unoptimized: true, // Добавляем эту опцию для Netlify
  },
  distDir: 'dist', // Указываем, чтобы сборка происходила в папку `dist`

};

module.exports = nextConfig;