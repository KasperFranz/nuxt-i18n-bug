export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'i18n',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    async extendRoutes(routes) {
      const resources =  [ {
        "url": "my_superProduct",
        "resourceType": "product",
        "resourceId": 1,
        "redirect": null
      },
      {
        "url": "my_otherSuperProduct",
        "resourceType": "product",
        "resourceId": 2,
        "redirect": null
      },
      {
        "url": "anAlternativeProduct",
        "resourceType": "product",
        "resourceId": 3,
        "redirect": null
      }
    ];

      resources.forEach((resource) => {
        const { redirect, resourceType, resourceId: id, url } = resource
        const type = resourceType || 'untyped'

        if (redirect) {
          routes.push({
            path: `/${url}`,
            redirect: `/${redirect}`,
          })
        } else {
          routes.push({
            path: `/${type}/${id}`,
            alias: `/${url}`,
            name: `${url}___en-GB`
          })
        }
      })
    },
  },

  i18n: {
    locales: [
      {
        code: 'en-GB',
        domain: 'localhost:3000',
        file: 'en-GB.json',
      },
      {
        code: 'de-DE',
        domain: 'de.localhost:3000',
        file: 'de-DE.json',
      },
    ],
    langDir: '~/language',
    defaultLocale: 'en-GB',
    differentDomains: true,
    detectBrowserLanguage: false,
    // strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en-GB',
    },
  }
}
