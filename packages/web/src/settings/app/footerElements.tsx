import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faMedium,
  faReddit
} from '@fortawesome/free-brands-svg-icons'

import type { NavElement } from '~/types/app'

const MEDIUM_INDEX = 4  // update this if array changes
export const SOCIAL_LINKS: NavElement[] = [
  {
    title: 'facebook',
    to: 'https://www.facebook.com/cartoonmarket',
    uiElement: <FontAwesomeIcon icon={faFacebook} size='1x'/>
  },
  {
    title: 'twitter',
    to: 'https://twitter.com/cartoonmarket',
    uiElement: <FontAwesomeIcon icon={faTwitter} size='1x'/>
  },
  {
    title: 'instagram',
    to: 'https://www.instagram.com/cartoonmarket',
    uiElement: <FontAwesomeIcon icon={faInstagram} size='1x'/>
  },
  {
    title: 'youtube',
    to: 'https://www.youtube.com/', // TODO
    uiElement: <FontAwesomeIcon icon={faYoutube} size='1x'/>
  },
  {
    title: 'medium',
    to: 'https://medium.com/cartoonmarket',
    uiElement: <FontAwesomeIcon icon={faMedium} size='1x'/>
  },
  {
    title: 'reddit',
    to: 'https://www.reddit.com/r/cartoonmarket/',
    uiElement: <FontAwesomeIcon icon={faReddit} size='1x'/>
  },
]

export const APPLE_APPSTORE_LINK: NavElement = 
  {
    title: 'itunes',
    to: 'https://itunes.apple.com', // TODO
  }

export const GOOGLE_PLAY_LINK: NavElement = 
  {
    title: 'android',
    to: 'https://play.google.com/', // TODO
  }

export const SLOGAN: string = "Let it flow!"

export const MAIN: NavElement[] = [
  {
    title: 'Company',
    subElements: [
      { title: 'About', to: '/about' },
      { title: 'Careers' }, // TODO: link?
      { title: 'Press' }, // TODO: link?
      { title: 'Blog', to: SOCIAL_LINKS[MEDIUM_INDEX].to, external: true},
    ],
  },
  {
    title: 'Projects',
      // TODO!
    subElements: [
      {title: 'Stocks'}, 
      {title: 'TV Series'}, 
      {title: 'Music'}, 
      {title: 'Gaming'}
    ],
  },
  {
    title: 'Support',
    subElements: [
      {
        title: 'Investor FAQ',
        to: '/investorFaq',
      },
      {
        title: 'Project FAQ',
        to: '/projectFaq',
      },
      {
        title: 'Risks',
        to: '/risks',
      },
      {
        title: 'Contact Us',
        to: '/contact',
      },
    ],
  },
]
