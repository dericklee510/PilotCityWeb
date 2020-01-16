
export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      //API Keys
      VUE_APP_REAL_DB_KEY: string
      VUE_APP_TEST_DB_KEY: string
      VUE_APP_MAPS_API_KEY: string
      //Server Endpoints
      VUE_APP_VERIFY_LINK_REST: string
    }
  }
  namespace firebase.firestore {
    type Collection = | "GeneralUser"
      | "EmployerProgram"
      | "TeacherProgramData"
      | "Project"
      | "Classroom";
    interface DocumentSnapshot {
      data<RetrievedClass>(options?: SnapshotOptions): (RetrievedClass & Record<string, any>)
    }
    interface DocumentReference {
      update<UpdateClass>(data: Partial<UpdateClass>): Promise<void>
      set<UpdateClass>(data: UpdateClass): Promise<void>
    }
    interface Firestore {
      collection(collectionPath: Collection): CollectionReference
    }
  }
}
