import { lazy, useReducer } from 'react'
import clsx from 'clsx'
import RecommendationProps from '@/types/RecommendationProps'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon'
import { reportButtonClick } from '@/API/Analytics/triggerEvent'

const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))
const Card = lazy(() => import('@/components/common/reusable/Card'))

export default function RecommendationCard({
  userPhotoUrl,
  userName,
  userRole,
  userPosition,
  reviewText,
  dateGiven,
  profileUrl
}: RecommendationProps): JSX.Element {
  return (
    <a
      href={profileUrl}
      className='group'
      target='_blank'
    >
      <Card id='recommendation-card'>
        <img
          src={userPhotoUrl}
          alt='Profile Image'
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginBottom: 25
          }}
        />
        <Heading3
          id='recommendation-title'
          className={clsx(
            'text-primary-dark dark:text-white',
            'group-hover:text-primary-lighter-dark group-hover:dark:text-primary-light',
            'group-hover:font',
            '!pb-2'
          )}
        >
          {userName} | {userRole}
        </Heading3>
        <span className='text-med text-muted-dark dark:text-muted'>{userPosition}</span>
        <br />
        <span className='text-sm text-muted-dark dark:text-muted'>{dateGiven}</span>
        <p className='pb-0 pt-4 text-muted-dark dark:text-muted'>{reviewText}</p>
        <LinkedinFillIcon
          size={22}
          className='text-muted-dark dark:text-muted'
          href={profileUrl}
          onClick={() => {
            reportButtonClick('recommendation-poster', profileUrl)
          }}
        />
      </Card>
    </a>
  )
}
