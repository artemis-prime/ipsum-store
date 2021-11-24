import React, { ReactElement } from 'react' 
import classNames from 'classnames'

import { PaymentRounded } from '@material-ui/icons'

import visaImage from '~assets/images/cc-images/VisaCard.svg'
import masterCardImage from '~assets/images/cc-images/MasterCard.svg'
import discoverCardImage from '~assets/images/cc-images/DiscoverCard.svg'
import amexCardImage from '~assets/images/cc-images/AmexCard.svg'

export interface ImageDesc {
  url: string,
  alt: string
}

const cardMap = new Map<string, ImageDesc>([
  ['visa', { 
    url: visaImage,
    alt: 'Visa'
  }],
  ['mastercard', { 
    url: masterCardImage,
    alt: 'MasterCard'
  }],
  ['discover', { 
    url: discoverCardImage,
    alt: 'Discover Card'
  }],
  ['amex', { 
    url: amexCardImage,
    alt: 'American Express Card'
  }],
])

export const renderDefaultCCImage = (
  color?: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | undefined,
  className?: string
): ReactElement => {
  
  return <PaymentRounded color={color ? color : 'primary'} className={classNames('cc-default-image', (className) ? className : '' )} />
}

export default cardMap.get.bind(cardMap)