import React from 'react' 

import Button, { ButtonProps } from '@material-ui/core/Button'

import Link from '~/components/Link'
import type { LinkProps } from './LinkProps'

  // cf: https://github.com/mui-org/material-ui/issues/7877
interface LinkButtonProps extends LinkProps {
  buttonProps?:    ButtonProps
}

const LinkButton: React.FC<LinkButtonProps> = ({
  buttonProps,
  onClick,
  external,
  to,
  children,
  ...rest
}) => {

  return (
    <Button 
      {...buttonProps} 
      onClick={onClick} 
      component={({ innerRef, ...linkProps }) => (
        <Link to={to} external={external} {...rest} {...linkProps} />
      )}
    >
      {children}
    </Button>
  )
}

export default LinkButton