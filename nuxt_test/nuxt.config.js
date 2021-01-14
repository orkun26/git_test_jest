export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-app-toptanal5",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "http://www.toptanal.com/template/smart/default/assets/plugins/fontawesome/css/all.min.css",
        crossorigin: "anonymous"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@assets/styles/styles.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: "~/plugins/vuex-persist", ssr: false }],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDUB-7wTKaPJ_DvGJFA2kzawq_2NEOlB5A",
          authDomain: "toptanal.firebaseapp.com",
          databaseURL: "https://toptanal-default-rtdb.firebaseio.com",
          projectId: "toptanal",
          storageBucket: "toptanal.appspot.com",
          messagingSenderId: "951918692910",
          appId: "1:951918692910:web:8bdc311bc9e01d38bfedbf",
          measurementId: "G-KDR7ZLTVZ8"
        },
        services: {
          database: true,
          auth: true
        },
        database: {
          emulatorPort: 9000,
          emulatorHost: "localhost"
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
