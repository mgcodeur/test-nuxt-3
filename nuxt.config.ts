// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/scss/app.scss'],
  devtools: { enabled: true },
  components: [
    { path: '~/components/elements/buttons', pathPrefix: false },
    { path: '~/components/elements/forms', pathPrefix: false },
  ],
  modules: ['@pinia/nuxt']
})
