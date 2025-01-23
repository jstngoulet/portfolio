import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Justin Goulet | Software Engineer</title>
        <meta
          name="description"
          content="Justin Goulet is a Mobile Software Engineer with 7+ years work experience building mobile apps for growing companies with a data driven mindset and capabilities for full project development lifecycles (requirements gathering, product design, data analysis and more)."
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
