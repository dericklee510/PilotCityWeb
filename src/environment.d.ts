export { };
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      //API Keys
      REAL_DB_KEY: string
      TEST_DB_KEY: string
      MAPS_API_KEY: string
      //Server Endpoints
      VERIFY_LINK_REST:string
    }
  }
  namespace firebase.firestore {
    interface DocumentSnapshot {
      data<RetrievedClass>(options?: SnapshotOptions):(RetrievedClass & Record<string,any> ) | undefined
    }
  }
}