import NavItemsProps from '@/types/NavItemsProps'

const navItems: NavItemsProps[] = [
  {
    name: 'Home',
    href: '/',
    isNew: false
  },
  {
    name: 'Projects',
    href: '/projects',
    isNew: false
  },
  {
    name: 'Recommendations',
    href: '/recommendations',
    isNew: true
  },
  {
    name: 'About',
    href: '/about',
    isNew: false
  }
]

export default navItems
