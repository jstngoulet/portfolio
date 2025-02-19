import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))
const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))
const HighlightText = lazy(() => import('@/components/common/reusable/HighlightText'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Hero(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = (): void => window.location.assign('#projects')

  return (
    <Section 
    id='hero-section'
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
          Hey👋, I'm{' '}
          <SlidingInUnderline
            type='secondary'
            height='lg'
          >
            Justin Goulet
          </SlidingInUnderline>
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight'
          )}
        >
          I specialize in building <HighlightText id='iOS-Apps'>iOS Applications</HighlightText> for{' '}
          <HighlightText id='growing-companies'>growing companies</HighlightText> like{' '}
          <HighlightText id='yours'>yours</HighlightText>.
        </h1>
        <p
          className={clsx(
            'animate-fade-in !delay-300',
            'text-muted-dark dark:text-muted',
            'sm:text-lg lg:text-xl',
            'pb-0'
          )}
        >
          Mobile Engineering Manager and Sr. iOS Developer at <InlineLink href='https://hyrecar.com?refr_source=justin.goulet+portfolio@aol.com&campaign=portfolio&channel=web' id='getaround-referral'>HyreCar by Getaround</InlineLink>
        </p>
        <SocialMediaLinks id='social' className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>
      <PrimaryButton
        className='mx-auto animate-bounce'
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
        name='Scroll to Projects'
        location='#projects'
        id='scroll-to-projects'
      >
        Featured projects
      </PrimaryButton>
    </Section>
  )
}
