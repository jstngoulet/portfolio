import { lazy } from 'react'
import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import { reportButtonClick } from '@/API/Analytics/triggerEvent'

const Badge = lazy(() => import('@/components/common/reusable/Badge'))
const Card = lazy(() => import('@/components/common/reusable/Card'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))

export default function ProjectCard({
  title,
  description,
  techStacks,
  links
}: ProjectProps): JSX.Element {
  const techStacksEntry = techStacks.map(
    (techStack: string, index: number): JSX.Element => (
      <Badge
        id={techStack}
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light'
        )}
        onClick={() => 
          reportButtonClick(
            'Project Tag',
            techStack
          )
        }
      >
        {techStack}
      </Badge>
    )
  )

  const linksEntry = links.map(
    (link: LinkProps, index: number): JSX.Element => (
      <li
        key={index}
        className='z-10'
      >
        <a
          href={link.url}
          target='_blank'
          rel='noreferrer'
          aria-label={link.label}
          onClick={() => {
            reportButtonClick(
              link.label, 
              link.url || 'unknown-destination'
            )
          }}
        >
          {link.icon}
        </a>
      </li>
    )
  )

  return (
    <Card className='flex flex-col justify-between' id='project-card'>
      <header>
        <Heading3 id='project-name'>
          <a
            href={
              links.find(({ label }) => label === 'Source code')?.url ??
              links.find(({ label }) => label === 'Live')?.url
            }
            className={clsx(
              'no-default z-0',
              'group-hover:text-primary-dark group-hover:dark:text-primary-light'
            )}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </Heading3>
        <span className='text-muted-dark dark:text-muted'>{description}</span>
      </header>
      <footer>
        <div className='mb-6 flex flex-wrap'>{techStacksEntry}</div>
        <ul className='flex space-x-3'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
