import { AuthStore } from '@/store';
jest.mock("@/store")
import Signup from '@/views/Signup';
import { mount, createLocalVue } from '@vue/test-utils'
import VeeValidate from '@/utilities/validation'
import Vuetify from 'vuetify';
import Vue from 'vue'
import flushPromises from 'flush-promises'

jest.useFakeTimers()
Vue.use(VeeValidate)
Vue.use(Vuetify)
const localVue = createLocalVue()
const COMPLEXPASSWORD = `B#$a^kypPm,*kJ44`
describe("Signup.vue", () => {
  let wrapper = mount(Signup, { localVue, sync: false }) // initializes type
  beforeEach(() => {
    wrapper = mount(Signup, { localVue, sync: false }) //reinitializes before each test
  });

  it(`Doesn't submit when input fields are invalid`, async () => {
    AuthStore.createAccount = jest.fn()
    wrapper.find('button').trigger('click')
    await flushPromises() //waits for pending promises to resolve
    expect(wrapper.vm.$validator.errors.items.length).toBe(5)
    expect(AuthStore.createAccount).not.toBeCalled()
  })
  it(`Only submits when input fields are valid`, async () => {
    AuthStore.createAccount = jest.fn()
    wrapper.setData({
      confirm_password: COMPLEXPASSWORD,
      email: "testemail@gmail.com",
      first_name: "test",
      last_name: "test",
      password: COMPLEXPASSWORD,
    })
    await flushPromises()
    wrapper.find('button').trigger('click')
    await flushPromises()
    expect(await wrapper.vm.$validator.errors.any()).toBe(false)
    expect(AuthStore.createAccount).toBeCalled()
  })
    
  it(`Does not take simple passwords`, async () => {
    wrapper.setData({ password: "simple" })
    await flushPromises()
    expect(await wrapper.vm.$validator.validate('password')).toBe(false)
  })
  it(`Takes complex passwords`,async ()=> {
    wrapper.setData({password:COMPLEXPASSWORD})
    await flushPromises()
    const {valid:testComplexity, errors} = await wrapper.vm.$validator.verify(`${wrapper.vm.$data.password}`,'complex-password')
    expect(testComplexity).toBe(true)
    
  })
})