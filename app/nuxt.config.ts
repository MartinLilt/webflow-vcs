// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      webFlowApiToken: process.env.WEBFLOW_API_TOKEN,
      baseServiceUri: process.env.BASE_SERVICE_URI,
    }
  }
})
