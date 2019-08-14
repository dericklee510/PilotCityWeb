import * as Signup from "../Signup"

export default {
    path: "/signup",
    component: Signup.App,
    children: [
        {
            name: "signup",
            path: ``,
            component: Signup.Main
        },
        {
            name: "signup.profile",
            path: `profile`,
            component: Signup.children.Upload
        },
        {
            name: `signup.number`,
            path: `profile/1`,
            component: Signup.children.Phone
        }

    ]
}