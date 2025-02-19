import { lazy, Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'
import { reportPageLoad } from '@/API/Analytics/triggerEvent'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  
  useEffect((): void => {
        reportPageLoad("Home")
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Justin Goulet | Mobile Engineering Manager</title>
        <meta
          name="description"
          content="Justin Goulet is a Mobile Software Engineer with 7+ years work experience building mobile apps for growing companies with a data driven mindset and capabilities for full project development lifecycles (requirements gathering, product design, data analysis and more)."
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper id='home-page'>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
