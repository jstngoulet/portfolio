import MailFillIcon from 'remixicon-react/MailFillIcon'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import constants from '@/constants'
import SocialProps from '@/types/SocialProps'
import { reportButtonClick } from '@/API/Analytics/triggerEvent'

const social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${constants.social.mail}`,
    icon: (
      <MailFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
        onClick={() => {
          reportButtonClick('email-self', constants.social.mail)
        }}
      />
    )
  },
  {
    name: 'LinkedIn',
    url: constants.social.linkedin,
    icon: (
      <LinkedinFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
        onClick={() => {
          reportButtonClick('linkedin', constants.social.linkedin)
        }}
      />
    )
  },
  {
    name: 'GitHub',
    url: `https://github.com/${constants.social.github}`,
    icon: (
      <GithubFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
        onClick={() => {
          reportButtonClick('github-profile', constants.social.github)
        }}
      />
    )
  }
]

export default social
