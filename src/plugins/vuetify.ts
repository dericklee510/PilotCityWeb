import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                success: '#6fba7f', //pc-green
                primary: '#3c9dcd', //pc-blue
                secondary: '#f79961', //pc-yellow
                error: '#ea6764', //pc-red
                warn: '#fdd35a', //pc-yellow
                pink: '#eda1bf', //pc-pink
                purple: '#b092b5', //pc-purple
                transparent:'transparent',
            }
        }
    }
})
