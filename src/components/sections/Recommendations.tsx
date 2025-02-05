import { recommendations } from '@/_data/recommendations'

import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import RecommendationProps from '@/types/RecommendationProps'



const Heading1 = lazy(() => import('@/components/common/reusable/heading/Heading1'))
const InlineLink = lazy(() => import('@/components/common/reusable/InlineLink'))
const RecommendationCard = lazy(() => import('@/components/common/RecommendationCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Recommendations(): JSX.Element {
      const { animationClass } = useFadeInMounted()

      const recommendationsEntry: JSX.Element[] = recommendations.map(
        (item: RecommendationProps, index: number): JSX.Element => (
          <RecommendationCard
            {...item}
            key={index}
          />
        )
      )
      
      return (
        <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
          <div className='pb-6'>
            <Heading1
              className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
            >
              Recommendations
            </Heading1>
            <p className='animate-fade-in !delay-200'>
                Personal Recommendations from my peers and coworkers at current and prior organizations. 
                These recommendattions are viewable on <InlineLink href='https://www.linkedin.com/in/jstngoulet/details/recommendations/' id='linkedin-recommendations'>
                LinkedIn
                </InlineLink> via my profile.
            </p>
          </div>
          {!!recommendationsEntry.length && (
            <div
              className={clsx(
                'animate-fade-in !delay-300',
                'mx-auto mt-6 md:mt-8',
                'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-1 xl:grid-cols-2'
              )}
            >
              {recommendationsEntry}
            </div>
          )}
        </Section>
      )
}