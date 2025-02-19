import { lazy } from 'react'
import InlineLink from '@/components/common/reusable/InlineLink'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const NavLinks = lazy(() => import('@/components/common/NavLinks'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Title = lazy(() => import('@/components/common/Title'))
const ArrowUpSLineIcon = lazy(() => import('remixicon-react/ArrowUpSLineIcon'))

export default function Footer(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className='container py-4 sm:py-6 xl:max-w-screen-xl xl:py-8'>
      <PrimaryButton
      id='scroll-to-top'
        name='Scroll to Top'
        location='#'
        onClick={scrollToTop}
        className='mx-auto mb-6'
        icon={<ArrowUpSLineIcon />}
      >
        Back to top
      </PrimaryButton>
      <div className='pb-4 pt-8'>
        <Title size='lg' />
      </div>
      <div className='flex flex-col justify-between pb-4 sm:flex-row sm:items-center'>
        <p className='pb-3 font-light sm:pb-0'>Used template from <InlineLink href="https://github.com/leejhlouis/louisite" id='template-origin'>Lousite</InlineLink></p>
        <div className='flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center sm:gap-0 sm:space-x-6'>
          <NavLinks />
          <SocialMediaLinks id='social-links' />
        </div>
      </div>
    </footer>
  )
}
