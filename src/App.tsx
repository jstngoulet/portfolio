import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: process.env.GOOGLE_AUTH_DOMAIN,
  projectId: process.env.GOOGLE_PROJECT_ID,
  storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  messagingSenderId: process.env.GOOGLE_SENDER_ID,
  appId: process.env.GOOGLE_APP_ID,
  measurementId: process.env.GOOGLE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
