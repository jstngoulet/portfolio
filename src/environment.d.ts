
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_GOOGLE_API_KEY: string
      VITE_GOOGLE_AUTH_DOMAIN: string
      VITE_GOOGLE_PROJECT_ID: string
      VITE_GOOGLE_STORAGE_BUCKET: string
      VITE_GOOGLE_SENDER_ID: string
      VITE_GOOGLE_APP_ID: string
      VITE_GOOGLE_MEASUREMENT_ID: string
      VITE_ANALYTICS_SERVER_URL: string;
    }
  }
}

export {};