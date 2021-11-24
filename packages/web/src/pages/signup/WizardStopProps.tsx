export default interface WizardStopProps { 
  step?: number
  totalSteps?: number
  finalActionName?: string      // if present, indicates final step and text to be used
  forward?(values:  { [field: string]: any }): void // if present, Forward button is enabled
  back?(): void                 // if present, Back button is visiable
  isLoading?(): boolean
  bucket: any
}
