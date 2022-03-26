import { createApp } from 'vue'
import App from './App.vue'
//import GreetIng from './components/GreetIng.vue'

const vm=createApp(App)

//vm.component('GreetIng',GreetIng)

vm.mount('#app')
