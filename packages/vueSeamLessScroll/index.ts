import Vue from 'vue';
import SeamlessScrollNew from './src/index.vue';
let intalled = false



export default {
    install(Vue, options) {
        if(intalled) {
            return
        }
        Vue.component('SeamlessScrollNew', SeamlessScrollNew)
        intalled = true
    }
}