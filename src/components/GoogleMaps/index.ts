import { MAPS_API_KEY } from '@/keys';

export const googleMapsClient = require('@google/maps').createClient({
    key:MAPS_API_KEY
})