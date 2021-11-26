import type React from 'react'

import type WizardStopProps from './WizardStopProps'

export default interface WizardStop {
  Component: React.ComponentType<WizardStopProps>
  title: string
  fieldNames: string[] // Relavant keys of object passed to forward()
}