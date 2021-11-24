import React from 'react'

import {
  Formik, 
  Field, 
  Form 
} from 'formik'

import { TextField } from 'formik-material-ui'

import { isValidEmail } from '~/util'

import Disclaimer from './disclaimer'
import type WizardStopProps from './WizardStopProps'
import BackAndForwardButtons from './BackAndForwardButtons'

const EmailAndPasswordForm: React.FC<WizardStopProps> = ({
  step,
  totalSteps,
  finalActionName,
  forward,
  back,
  isLoading,
  bucket
}) => {
  
  const { userFormIsLogin : isLogin } = bucket

  const _forward = (values: { [field: string]: any }, actions) => {
    forward && forward(values)
    actions.setSubmitting(false)
  }

  const initialValues = isLogin ? { 
    firstName: '', 
    lastName: '', 
    email: '',
    password: '',
    password2: '',
  } : {
    email: '',
    password: ''
  }
  
  const validate = (values) => {
    const errors: any = {}
    //return errors

    if (!isLogin) {
      if (!values.firstName) {
        errors.firstName = 'required'
      } 
      if (!values.lastName) {
        errors.lastName = 'required'
      } 
    }

    if (!values.email) {
      errors.email = 'required'
    } 
    else if ( !isValidEmail(values.email) ) {
      errors.email = 'invalid email address'
    }

    if (isLogin) {
      if (!values.password) {
        errors.password = 'required'
      }
    }
    else {
      if (!values.password) {
        errors.password = 'required'
      }
      else if (values.password.length < 6) {
        errors.password = 'must be at least 6 characters'
      }
      else if (
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#$@!%&*?]).*$/i.test(values.password)
      ) {
        errors.password = 'must have at least 1 uppercase letter, 1 lowercase letter,  1 digit (0-9), and one special character'
      }
      else if (values.password !== values.password2) {
        errors.password2 = 'passwords must match'
      }
    }
    return errors
  }
  
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={_forward}
    >
    {({ submitForm, isSubmitting, touched, isValid }) => {
      const disableButtons = isSubmitting || (isLoading && isLoading()) || !isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)
      return (<>
        <Form className='form-root' onKeyDown={(e) => {if (e.key === 'Enter' && !disableButtons) { submitForm() }}}>
        {!bucket.isLogin && (<>
          <Field
            component={TextField}
            name="firstName"
            type="text"
            label="First name"
          />
          <Field
            component={TextField}
            name="lastName"
            type="text"
            label="Last name"
          />
        </>)}
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <Field
            component={TextField}
            name="password"
            type="password"
            label="Password"
          />
        {!bucket.isLogin && (<>
          <Field
            component={TextField}
            name="password2"
            type="password"
            label="Confirm password"
          />
          <div className='disclaimer'><Disclaimer /></div>          
        </>)}
        </Form>
        <BackAndForwardButtons
          step={step}
          totalSteps={totalSteps}
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

export default EmailAndPasswordForm
