import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import RecommendationProps from '@/types/RecommendationProps'
import RecommendationCard from '@/components/common/RecommendationCard'
import { JsxElement } from 'typescript'
import BlogCard from '@/components/common/BlogCard'
import Recommendations from '@/components/sections/Recommendations'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function RecommendationPage(recommendations: RecommendationProps[]): JSX.Element {

  

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
        <PageWrapper>
          <Navbar />
          <Recommendations />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
