

import { mount, createLocalVue } from '@vue/test-utils'

import Vuetify from 'vuetify'
import Vue from 'vue'

import VueRouter from 'vue-router'
import Signup from '@/views/Signup'
import router from '@/router'


Vue.use(Vuetify)
const localVue = createLocalVue()

localVue.use(VueRouter)

export const COMPLEXPASSWORD = 'B#$a^kypPm,*kJ44'
export const wrapper = mount(Signup, { localVue, router, sync: false })
