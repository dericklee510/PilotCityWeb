import signup from '@/views/Signup';
import { mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from '@/utilities/validation'
import Vuetify from 'vuetify';
import Vue from 'vue'


Vue.use(VeeValidate)
Vue.use(Vuetify)
const localVue = createLocalVue()
describe("Signup.vue", () => {
    it(`gets signup information from the user`, () => {
        const wrapper = mount(signup,{localVue})
        console.log(wrapper)
    })
})