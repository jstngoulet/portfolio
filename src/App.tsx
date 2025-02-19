import { lazy, useEffect } from 'react'
import Router from '@/router'
import checkDarkTheme from '@/utils/checkDarkTheme'
import { app } from './plugins/firebase'

const ScrollToTop = lazy(() => import('@/components/common/ScrollToTop'))
const ScrollToTopFAB = lazy(() => import('@/components/common/ScrollToTopFAB'))

app.automaticDataCollectionEnabled = true;

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
