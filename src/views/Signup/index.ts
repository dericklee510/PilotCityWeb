import signup from "./signup.vue"
import container from "./signupContainer.vue"
import profile from "./signupProfile.vue"

export default signup

export class Container{
    public constructor() {
        return container
    }
}

export class Profile{
    public constructor() {
        return profile
    }
}
