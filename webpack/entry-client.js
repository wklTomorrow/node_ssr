import createApp from './app'

const { app, router } = createApp()

router.onReady(() => {
    console.log('ready go')
    app.$mount('#app', true)
})
