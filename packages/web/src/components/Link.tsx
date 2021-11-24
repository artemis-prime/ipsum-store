import React from 'react'

import { Link as RouterLink } from 'react-router-dom'
import { Link as MaterialLink } from '@material-ui/core'

import type { LinkProps } from './LinkProps'

const Link: React.FC<LinkProps> = ({ 
  to, 
  onClick, 
  children, 
  external, 
  ...rest
}) => {

  let props: any = {}
  if (to) {
    props[(external) ? 'href' : 'to'] = to
      // could be used as a "post process"
    if (onClick) {
      props.onClick = onClick
    }
  }
  else {
    props[(external) ? 'href' : 'to'] = '#'
    if (onClick) {
      props.onClick = onClick
    }
  }

  return (external) ? (
    <MaterialLink {...props} {...rest}>
      {children}
    </MaterialLink>
  ) : (
    <MaterialLink component={RouterLink} {...props} {...rest}>
      {children}
    </MaterialLink>
  )
}

export default Link