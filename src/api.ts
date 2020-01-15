// import { VUE_APP_REAL_DB_KEY } from '@/keys';
import axios from "axios"

process.env.NODE_ENV
export const isLinkValid = async (link:string) => (await axios.get<boolean>(process.env.VUE_APP_VERIFY_LINK_REST+link)).data