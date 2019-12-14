
declare module 'vue-filepond' {
    import { Component } from 'vue'

    const vueFilePond: (...args: Record<string, any>[]) => Component
    export default vueFilePond
}
