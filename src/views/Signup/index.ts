import Signup from "./Signup.vue"
import Container from "./Container.vue"

import * as Profile from "./Profile"

export {
    Signup as Main,
    Container as App,
}

// export const children = {
//     ...Profile
// }
export const Upload = Profile.Upload
export const Phone = Profile.Phone
export {default as routes} from "./routes"
export default Signup