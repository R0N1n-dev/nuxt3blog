import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt3RC-PWA",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "/static/spectre-icons.min.css",
    "/static/spectre-exp.min.css",
    "/static/spectre.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: "~/plugins/pwa-update", mode: "client"}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    //"@nuxtjs/pwa",
    // https://go.nuxtjs.dev/eslint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/pwa"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "R0N1n nuxt3RC PWA",
      author: "R0N1n",
    },
    manifest: {
      name: "R0N1n-dev nuxt3 PWA",
      short_name: "R0XTPWA",
      lang: "en",
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
});

