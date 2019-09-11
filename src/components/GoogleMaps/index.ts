import { MAPS_API_KEY } from '@/keys';
import googleMaps from "@google/maps"

export const googleMapsClient = googleMaps.createClient({
    key:MAPS_API_KEY
})

import AutoComplete from "./Autocomplete/AutoComplete.vue"
export {AutoComplete}