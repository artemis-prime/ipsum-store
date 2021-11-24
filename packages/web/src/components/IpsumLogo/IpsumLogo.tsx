import React from 'react'
import cx from 'classnames'

import { makeStyles } from '@material-ui/styles'
import type { Theme } from '@material-ui/core'

import logo28 from './payminto-logo--28x32.png'
import logo40 from './payminto-logo--40x45.webp'
import logo60 from './payminto-logo--60x68.webp'

const LOGOS = {
  small: {
    image: {
      name: logo28,
      w: 28,
      h: 32
    },
    text: {
      top: '-4px'
    },
    fontSize: 24
  },
  med: {
    image: {
      name: logo40,
      w: 40,
      h: 45
    },
    fontSize: 24
  },
  large: {
    image: {
      name: logo60,
      w: 60,
      h: 68
    },
    fontSize: 32
  }
}

const useStyles = makeStyles((theme: Theme) => ({

  outer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },

  image: {
    display: 'block',
    objectFit: 'contain',
    objectPosition: 'center center',
    marginRight: '2px'
  },

  text: {
    fontFamily: 'GoodSans',
    fontWeight: 500,
    letterSpacing: '-0.062rem',
    position: 'relative',
  }

}))


const PaymintoLogo: React.FC<{
  size: 'small' | 'med' | 'large'
  className?: string
}> = ({
  size,
  className
}) => {

  const s = useStyles()
  const l: any = LOGOS[size]

  const spreadMe = l.text ? l.text : {}

  return (
    <div className={cx(s.outer, (className) ? className : '')} >
      <img 
        className={s.image} 
        alt="logo.png"
        width={l.image.w}
        height={l.image.h}
        src={l.image.name}
      /> 
      <div 
        className={s.text} 
        style={{
          fontSize: l.fontSize,
          lineHeight: l.image.h + 'px', 
          ...spreadMe
        }}
      >payminto</div>
    </div>
  )
}

export default PaymintoLogo
