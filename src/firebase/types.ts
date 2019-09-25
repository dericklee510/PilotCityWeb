import { REAL_DB_KEY, TEST_DB_KEY } from '@/keys'

export class ApplicationConfig {
    public apiKey: string = TEST_DB_KEY
    public authDomain: string = "test-database-5c3f8.firebaseapp.com"
    public databaseURL: string = "https://test-database-5c3f8.firebaseio.com"
    public projectId: string = "test-database-5c3f8"
    public storageBucket: string = "test-database-5c3f8.appspot.com"
    public messagingSenderId: string = "206893838009"
    public constructor(productionMode: string) {
        if (productionMode === "production") {
            this.apiKey = REAL_DB_KEY
            this.authDomain = "pilotcity-firestore.firebaseapp.com"
            this.databaseURL = "https://pilotcity-firestore.firebaseio.com",
            this.projectId = "pilotcity-firestore"
            this.storageBucket = "gs://pilotcity-firestore-site_data"
            this.messagingSenderId = "80767280856"
        }
    }
}