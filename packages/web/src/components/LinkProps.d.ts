import React from 'react'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: React.MouseEventHandler<HTMLElement>
  external?: boolean
  to?:  string
}