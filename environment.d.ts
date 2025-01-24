
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_API_KEY: string;
      GOOGLE_AUTH_DOMAIN: string;
      GOOGLE_PROJECT_ID: string;
      GOOGLE_STORAGE_BUCKET: string;
      GOOGLE_SENDER_ID: string;
      GOOGLE_APP_ID: string;
      GOOGLE_MEASUREMENT_ID: string;
    }
  }
}

export {};