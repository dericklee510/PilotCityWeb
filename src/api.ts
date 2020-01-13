// import { REAL_DB_KEY } from '@/keys';
import axios from "axios"

process.env.NODE_ENV
export const isLinkValid = async (link:string) => (await axios.get<boolean>(process.env.VERIFY_LINK_REST)).data