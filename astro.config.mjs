import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { fileURLToPath } from 'url'
// import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/frontmatter.mjs'
import path from 'path'
// import image from '@astrojs/image'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
import { SITE } from './src/config.mjs'
// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  experimental: {
    contentCollections: true,
  },
})
