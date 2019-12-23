import googleMaps from '@google/maps'
import { MAPS_API_KEY } from '@/keys'

import AutoComplete from './Autocomplete/AutoComplete.vue'

export const googleMapsClient = googleMaps.createClient({
  key: MAPS_API_KEY
})
export { AutoComplete }
export { AutoCompleteAddress } from './Autocomplete/types'
