// @ts-check

import { defineConfig, fontProviders  } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from "@tailwindcss/vite";

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost',

  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',
  integrations: [alpinejs(), mdx(), sitemap()],

  fonts: [
    {
      provider: fontProviders.local(),
            name: 'Roboto',
            cssVariable: '--font-roboto',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/Fonts/roboto/Roboto-VariableFont_wdth_wght.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
    }
  ],

  adapter: netlify()
});