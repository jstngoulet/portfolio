import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {
  GOOGLE_API_KEY
  , GOOGLE_APP_ID
  , GOOGLE_AUTH_DOMAIN
  , GOOGLE_PROJECT_ID
  , GOOGLE_STORAGE_BUCKET
  , GOOGLE_SENDER_ID
  , GOOGLE_MEASUREMENT_ID
} from './config.ts'

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

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
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
analytics.app.automaticDataCollectionEnabled = true;

export default function App(): JSX.Element {
  useEffect((): void => {        
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <>
      <Router />
      <ScrollToTop />
      <ScrollToTopFAB />
    </>
  )
}
