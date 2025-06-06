import { lazy } from 'react'
import clsx from 'clsx'
import InlineLinkProps from '@/types/components/InlineLinkProps'
import { reportButtonClick } from '@/API/Analytics/triggerEvent'

const SlidingInUnderline = lazy(() => import('@/components/common/reusable/SlidingInUnderline'))

export default function InlineLink({ href, children, id }: InlineLinkProps): JSX.Element {
  
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      id={id}
      className={clsx(
        'cursor-pointer',
        'font-semibold duration-300',
        'text-primary-dark hover:text-primary-lighter-dark',
        'dark:text-primary-light dark:hover:text-primary-lighter'
      )}
      onClick={() => {
        reportButtonClick(id || 'external-link', href || '#');
      }}
    >
      <SlidingInUnderline>{children}</SlidingInUnderline>
    </a>
  )
}
