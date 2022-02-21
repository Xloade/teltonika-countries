import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    locale: 'lt',
    messages,
    globalInjection: true,
  })

const app = createApp(App)

app.use(router).use(VueAxios, axios).use(i18n)

app.mount('#app')
