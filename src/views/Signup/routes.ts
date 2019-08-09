import * as Signup from "../Signup"
import newUpload from "@/views/Signup/Profile/Upload"
console.log(Signup)
export default {
    path: "/signup",
    component: Signup.App,
    children: [
        {
            name: "signup",
            path: ``,
            component: newUpload,
        },
        {
            name: "signup.profile",
            path: `profile`,
            component: Signup.Upload,
        },
        {
            name: `signup.number`,
            path: `verifyphone`,
            component: Signup.Phone
        }

    ]
}