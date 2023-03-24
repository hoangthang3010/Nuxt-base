export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ecommerce Client",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://stg.static.mul-pay.jp/ext/js/token.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.css", "~/assets/scss/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios", "~/plugins/element-ui.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  // Build Configuration: https://go.nuxtjs.dev/config-build

  // auth: {
  //   localStorage: false,
  //   cookie: {
  //     options: {
  //       maxAge: 60 * 60 * 24 * 30,
  //     },
  //   },
  //   strategies: {
  //     local: {
  //       token: {
  //         property: "data.access_token",
  //         global: true,
  //         // required: false,
  //         type: "Bearer",
  //       },
  //       user: {
  //         property: "data",
  //         // autoFetch: true
  //       },
  //       endpoints: {
  //         login: {
  //           url: `${
  //             process.env.API_URL || "https://lux2-api-dev.lux.vmo.group/api/v1"
  //           }/admin/login`,
  //           method: "post",
  //         },
  //         logout: {
  //           url: `${
  //             process.env.API_URL || "https://lux2-api-dev.lux.vmo.group/api/v1"
  //           }/admin/logout`,
  //           method: "post",
  //         },
  //         user: {
  //           url: `${
  //             process.env.API_URL || "https://lux2-api-dev.lux.vmo.group/api/v1"
  //           }/admin/profile`,
  //           method: "get",
  //         },
  //       },
  //     },
  //   },
  //   plugins: [
  //     { src: "~/plugins/auth.js", ssr: false },
  //     // { src: '~/plugins/nuxt-auth-local.js' },
  //     // { src: '~/filters/index.js' },
  //   ],
  //   redirect: {
  //     login: "/login",
  //     logout: "/login",
  //     callback: false,
  //     home: "/",
  //   },
  // },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
  },
};
