import config from './site.config';

export default {
  dir: {
    static: 'public',
  },
  head: {
    title: config.title,
    description: config.description,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ...config.stylesheets.map((href) => ({ rel: 'stylesheet', href })),
    ],
  },
  components: ['~/components', '~/components/Fields', '~/components/Forms'],
  css: [
    '~/css/index.css',
    '~/css/buttons.css',
    '~/css/forms.css',
    '~/css/layout.css',
    '~/css/loading.css',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
