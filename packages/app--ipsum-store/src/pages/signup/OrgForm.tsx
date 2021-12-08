import React from 'react'

import {
  Formik, 
  Field, 
  Form 
} from 'formik'

import { TextField } from 'formik-mui'

import { isValidEmail } from '@artemis-prime/wfw/util'

import type WizardStopProps from './WizardStopProps'
import BackAndForwardButtons from './BackAndForwardButtons'

const OrgForm: React.FC<WizardStopProps> = ({
  step,
  totalSteps,
  finalActionName,
  forward,
  back,
  isLoading,
  bucket
}) => {

  const initialValues = { 
    tenantId: '',
    adminEmail: '',
    fullOrgName: '',
    contactEmail: ''
  } 
  
  const validate = (values: { [field: string]: any }) => {
    const errors: any = {}
    if (!values.tenantId) {
      errors.tenantId = 'required'
    } 

    if (!values.adminEmail) {
      errors.adminEmail = 'required'
    } 
    else if ( !isValidEmail(values.adminEmail) ) {
      errors.adminEmail = 'invalid email address'
    }

    if (!values.fullOrgName) {
      errors.fullOrgName = 'required'
    } 
    
    if (!values.contactEmail) {
      errors.contactEmail = 'required'
    } 
    else if ( !isValidEmail(values.contactEmail) ) {
      errors.contactEmail = 'invalid email address'
    }
    return errors
  }
  
  const _forward = (values: { [field: string]: any }, actions) => {
    forward && forward(values)
    actions.setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={_forward}
    >
    {({ submitForm, isSubmitting, touched, isValid, values }) => {

      const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !disableButtons) { 
          submitForm() 
        }
      }
      const disableButtons = 
        isSubmitting 
        || (isLoading && isLoading()) 
        || !isValid 
        || !(Object.keys(touched).length)

      return (<>
        <Form className='form-root' onKeyDown={handleKeyDown}>
        <Field
            component={TextField}
            name="tenantId"
            type="text"
            label="Short Name (no spaces)"
          />
          <Field
            component={TextField}
            name="adminEmail"
            type="text"
            label="Admin Email"
          />
          <Field
            component={TextField}
            name="fullOrgName"
            type="text"
            label="Full Org Name"
          />
          <Field
            component={TextField}
            name="contactEmail"
            type="text"
            label="Contact Email"
          />
          <Field
            component={TextField}
            name="contactPhone"
            type="text"
            label="Contact Phone (optional)"
          />
        </Form>
        <BackAndForwardButtons
          step={step}
          totalSteps={totalSteps}
          finalActionName={finalActionName}
          disableForward={disableButtons}
          disableBack={disableButtons}
          forward={submitForm}
          back={back}
        />
      </>)
    }}      
    </Formik>
  )
} 

export default OrgForm
