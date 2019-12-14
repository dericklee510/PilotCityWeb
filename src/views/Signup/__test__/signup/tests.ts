import flushPromises from 'flush-promises'
import { AuthStore } from '@/store'
import { wrapper, COMPLEXPASSWORD } from './const'


jest.mock('@/store')

// export const invalidInputFields = async (): Promise<void>  => {
//     AuthStore.createAccount = jest.fn()
//     wrapper.find('button').trigger('click')
//     await flushPromises() //waits for pending promises to resolve
//     expect(wrapper.vm.$validator.errors.items.length).toBe(5)
//     expect(AuthStore.createAccount).not.toBeCalled()
// }

// export const validInputFields = async (): Promise<void> => {
//     wrapper.setData({
//         confirmPassword: COMPLEXPASSWORD,
//         email: "testemail@gmail.com",
//         firstName: "test",
//         lastName: "test",
//         password: COMPLEXPASSWORD
//     })
//     await flushPromises()
//     wrapper.find('button').trigger('click')
//     await flushPromises()
//     expect(await wrapper.vm.$validator.validateAll()).toBe(true)
//     expect(AuthStore.createAccount).toBeCalled()
// }
// export const validateSimplePassword = async (): Promise<void> => {
//     wrapper.setData({ password: "simple" })
//     await flushPromises()
//     expect(await wrapper.vm.$validator.validate('password')).toBe(false)
// }
// export const validateComplexPassword = async (): Promise<void> => {
//     wrapper.setData({ password: COMPLEXPASSWORD })
//     await flushPromises()
//     expect(await wrapper.vm.$validator.validate('password')).toBe(true)
// }
