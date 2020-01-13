import googleMaps from '@google/maps'

import { process } from '@/@types/process';

import AutoComplete from './Autocomplete/AutoComplete.vue'

export const googleMapsClient = googleMaps.createClient({
  key: process.env.MAPS_API_KEY
})
export { AutoComplete }
export { AutoCompleteAddress } from './Autocomplete/types'
