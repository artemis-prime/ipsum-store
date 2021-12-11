import React from 'react'
import cx from 'classnames'

import Logo from './procom-logo--990x198.svg'

import { makeStyles } from '@artemis-prime/wfw/style'

const LOGOS = {
  small: {
    image: {
      //name: logo,
      w: 160,
      h: 32
    },
    text: {
      top: '-4px'
    },
    fontSize: 24
  },
  med: {
    image: {
      //name: logo,
      w: 225,
      h: 45
    },
    fontSize: 24
  },
  large: {
    image: {
      //Logoname: logo,
      w: 340,
      h: 68
    },
    fontSize: 32
  }
}

const useStyles = makeStyles()((theme) => ({

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
    marginRight: '2px',
    fill: theme.palette.primary.dark

  },

  text: {
    fontFamily: 'GoodSans',
    fontWeight: 500,
    letterSpacing: '-0.062rem',
    position: 'relative',
  }
}))

const IpsumLogo: React.FC<{
  size: 'small' | 'med' | 'large'
  className?: string
}> = ({
  size,
  className
}) => {

  const { classes: s } = useStyles()
  const l: any = LOGOS[size]

  const spreadMe = l.text ? l.text : {}

  return (
    <div className={cx(s.outer, (className) ? className : '')} >
      <Logo 
        className={s.image} 
        //alt="logo.png"
        width={l.image.w}
        height={l.image.h}
        //viewBox='0 0 990 198' 
        //src={l.image.name}
      /> 

    </div>
  )
}

export default IpsumLogo

/*
      <div 
        className={s.text} 
        style={{
          fontSize: l.fontSize,
          lineHeight: l.image.h + 'px', 
          ...spreadMe
        }}
      />

*/
