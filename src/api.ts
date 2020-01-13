import axios from "axios"
import { process } from '@/@types/process';

export const isLinkValid = async (link:string) => (await axios.get<boolean>(process.env.VERIFY_LINK_REST)).data