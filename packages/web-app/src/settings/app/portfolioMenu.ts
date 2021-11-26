import type { NavElement } from '~/types/app'

export default [
  {
    title: 'Overview',
    to: '/portfolio',
    value: 'overview',
  },
  {
    title: 'Rewards',
    to: '/portfolio/rewards',
    value: 'rewards',
  },
  {
    title: 'Newsfeed',
    to: '/portfolio/newsfeed',
    value: 'newsfeed',
  },
] as NavElement[]