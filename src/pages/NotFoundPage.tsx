import { lazy, Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import { reportPageLoad } from '@/API/Analytics/triggerEvent';

const NotFound = lazy(() => import('@/components/sections/NotFound'))

export default function NotFoundPage(): JSX.Element {
  
  useEffect((): void => {
        reportPageLoad("Page Not Found")
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Page Not Found | Justin Goulet</title>
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <NotFound />
      </Suspense>
    </>
  )
}
