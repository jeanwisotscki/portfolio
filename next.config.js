/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
