import { REAL_DB_KEY, TEST_DB_KEY } from './../keys'

export class Application_config {
    apiKey: string = TEST_DB_KEY
    authDomain: string = "test-database-5c3f8.firebaseapp.com"
    databaseURL: string = "https://test-database-5c3f8.firebaseio.com"
    projectId: string = "test-database-5c3f8"
    storageBucket: string = "test-database-5c3f8.appspot.com"
    messagingSenderId: string = "206893838009"
    constructor(production_mode: string) {
        if (production_mode === "production") {
            REAL_DB_KEY
            this.authDomain = "pilotcity-firestore.firebaseapp.com"
            this.databaseURL = "https://pilotcity-firestore.firebaseio.com",
            this.projectId = "pilotcity-firestore"
            this.storageBucket = "pilotcity-firestore.appspot.com"
            this.messagingSenderId = "80767280856"
        }
    }
}