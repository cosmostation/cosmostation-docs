const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  basePath: "/cosmostation-wallet-docs",
})

module.exports =  {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
};
