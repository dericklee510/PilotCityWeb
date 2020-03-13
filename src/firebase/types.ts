

export class ApplicationConfig {
    public apiKey: string = process.env.VUE_APP_TEST_DB_KEY

    public authDomain: string = 'test-database-5c3f8.firebaseapp.com'

    public databaseURL: string = 'https://test-database-5c3f8.firebaseio.com'

    public projectId: string = 'test-database-5c3f8'

    public storageBucket: string = 'test-database-5c3f8.appspot.com'

    public messagingSenderId: string = '206893838009'

    public appId?:string
    public measurementId?:string
    public constructor(productionMode: string) {
        if (productionMode === 'production') {
            this.apiKey = "AIzaSyDuO0l8_9gA9UOHX6wRPwaiLk3LTPGqJ-g",
            this.authDomain = "pilotcitymoonshot.firebaseapp.com",
            this.databaseURL = "https://pilotcitymoonshot.firebaseio.com",
            this.projectId = "pilotcitymoonshot",
            this.storageBucket = "pilotcitymoonshot.appspot.com",
            this.messagingSenderId = "613152995665",
            this.appId = "1:613152995665:web:f5a0e0e8e8b7e341553b70",
            this.measurementId = "G-K158X9L3BE"
        }
    }
}
