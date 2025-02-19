import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import Recommendations from '@/components/sections/Recommendations'
import { reportPageLoad } from '@/API/Analytics/triggerEvent'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function RecommendationPage(): JSX.Element {
  
  useEffect((): void => {
        reportPageLoad("Recommendations")
  }, []);
    
  return (
    <>
      <Helmet>
        <title>Recommendations | Justin Goulet</title>
        <meta
          name="description"
          content="Read Justin Goulet's latest recommendations from coworkers and peers."
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper id='recommendation-page'>
          <Navbar />
          <Recommendations />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
