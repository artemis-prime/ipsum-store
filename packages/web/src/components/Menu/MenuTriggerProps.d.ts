import React from 'react'

export interface MenuTriggerProps {
  id?:              string
  text?:            string
  icon?:            React.ReactNode
  iconIsBefore?:    boolean
  triggerClass?:    string
  triggerProps?:    any
  menuClass?:       string
  menuData?:        any
  children?:        React.ReactNode
}