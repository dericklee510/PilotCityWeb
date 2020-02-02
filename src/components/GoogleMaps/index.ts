import googleMaps from '@google/maps'



import AutoComplete from './Autocomplete/AutoComplete.vue'
export const googleMapsClient = googleMaps.createClient({
  key: process.env.VUE_APP_MAPS_API_KEY
})
export { AutoComplete }
export { AutoCompleteAddress } from './Autocomplete/types'
