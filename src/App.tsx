import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

const firebaseConfig = {
  apiKey: "AIzaSyB59OMhL-7cUxlA3-_ZH2eX3UCNYWNYsg4",
  authDomain: "tizzle-portfolio.firebaseapp.com",
  projectId: "tizzle-portfolio",
  storageBucket: "tizzle-portfolio.firebasestorage.app",
  messagingSenderId: "93800741164",
  appId: "1:93800741164:web:9fc1caeea5762339a99489",
  measurementId: "G-RV6S9FQZVL"
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
