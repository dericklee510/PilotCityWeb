import router from '@/router'



import Signup from '@/views/Signup'
import { mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from '@/utilities/validation'
import Vuetify from 'vuetify'
import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(VeeValidate)
localVue.use(VueRouter)

export const COMPLEXPASSWORD = `B#$a^kypPm,*kJ44`
export const wrapper = mount(Signup, { localVue, router,sync: false })
