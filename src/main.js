import Vue from 'vue'
import App from './App.vue'
/**
 *  Good to centralize Bus of aplication, data, tasks,
 * @type {Vue}
 */
export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited',age);
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})

