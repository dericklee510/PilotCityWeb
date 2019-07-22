import signup from "./signup.vue"
import container from "./signupContainer.vue"
import profile from "./Profile"
// import { VueConstructor } from "vue";

export default signup
export class Container{
    public constructor() {
        return container
    }
}
export class Profile{
    public constructor(){
        return profile.profile
    }
}

export class Upload{
    public constructor(){
        return profile.upload
    }
}

export class Phone {
    public constructor(){
        return profile.phone
    }
}