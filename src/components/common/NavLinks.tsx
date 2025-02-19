import { lazy } from 'react'
import { NavLink } from 'react-router-dom'
import navItems from '@/_data/navItems.ts'
import NavItemsProps from '@/types/NavItemsProps'
import { reportButtonClick } from '@/API/Analytics/triggerEvent'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))

export default function NavLinks(): JSX.Element {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li
        className='flex'
        key={index}
      >
        <NavLink
          key={index}
          to={item.href}
        >
          {({ isActive }) => <PrimaryButton 
          id={item.name}
            active={isActive}
            name={item.name}
            location={item.href}
          >{item.name}</PrimaryButton>}
        </NavLink>
      </li>
    )
  )

  return <ul className='flex flex-row items-center space-x-4'>{links}</ul>
}
