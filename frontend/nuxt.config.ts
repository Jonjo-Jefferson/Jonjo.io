// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxt/ui"],
  apollo: {
    clients: {
      default: {
        httpEndpoint:
          process.env.BACKEND_URL || "http://localhost:1337/graphql",
      },
    },
  },
});
