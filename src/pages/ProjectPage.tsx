import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Projects | Justin Goulet</title>
        <meta
          name="description"
          content="Explore Justin Goulet's software projects featuring full scoped mobile applications!"
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Projects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
