import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/theme.css'
import FinalSampleOne from './components/FinalSampleOne.vue'

const app = createApp(App)
app.use(store)
app.use(router)

// глобальная регистрация
app.component('FinalSampleOne', FinalSampleOne)

app.mount('#app')
