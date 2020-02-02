import { PickByValue, Overwrite } from "utility-types";

export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN:string ;
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
      | "Classroom"
      | "studentClassroom"
      | "StudentForm"
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
    interface WriteBatch{
      update<UpdateClass>(documentRef:DocumentReference, data: Partial<Overwrite< Partial<UpdateClass>, Record<keyof PickByValue<UpdateClass,Array<any>>, firebase.firestore.FieldValue> >>): WriteBatch
      set<UpdateClass>(documentRef:DocumentReference,data: UpdateClass): WriteBatch
    }
    interface FieldValue {
      
    }
    //get all array values in class PickByValue<UpdateClass,Array<any>>
    // set all array values to origin type or firebase type Record<keyof PickByValue<UpdateClass,Array<any>>, firebase.firestore.FieldValue>
    // overwrite original type Record<keyof PickByValue<UpdateClass,Array<any>>, firebase.firestore.FieldValue> | UpdateClass
  }
}
