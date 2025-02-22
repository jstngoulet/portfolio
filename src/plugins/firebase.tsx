import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, setUserId } from 'firebase/analytics'
import  {
  GOOGLE_API_KEY
  , GOOGLE_APP_ID
  , GOOGLE_AUTH_DOMAIN
  , GOOGLE_PROJECT_ID
  , GOOGLE_STORAGE_BUCKET
  , GOOGLE_SENDER_ID
  , GOOGLE_MEASUREMENT_ID
} from '../config'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: GOOGLE_API_KEY,
  authDomain: GOOGLE_AUTH_DOMAIN,
  projectId: GOOGLE_PROJECT_ID,
  storageBucket: GOOGLE_STORAGE_BUCKET,
  messagingSenderId: GOOGLE_SENDER_ID,
  appId: GOOGLE_APP_ID,
  measurementId: GOOGLE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export { logEvent, setUserId }