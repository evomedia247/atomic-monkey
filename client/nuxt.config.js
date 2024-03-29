module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Atomic Monkey',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Crete+Round&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            './assets/scss/vars/*.scss',
            './assets/scss/mixins/*.scss' // use underscore "_" & also file extension ".scss"
        ]
    }
}