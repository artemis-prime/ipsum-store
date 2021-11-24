import React, { useState } from 'react'

import { 
  Button,
  LinearProgress,
  Paper
} from '@material-ui/core'

import { Alert, AlertTitle } from '@material-ui/lab'

import {
 Formik, 
 Field, 
 Form 
} from 'formik'

import { TextField } from 'formik-material-ui'

import  { errorToString } from '@ipsum-labs/dash-util'
import { useAuthService } from '~/domain/auth'
import _str from '~/settings/strings'

interface PasswordUpdateRequest {
  email: string
}

const initialValues: PasswordUpdateRequest = { 
  email: '' 
}

const validate = (values) => {
  const errors: Partial<PasswordUpdateRequest> = {}
  if (!values.email) {
    errors.email = 'required'
  } 
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'invalid email address'
  }
  return errors
}

const RequestPasswordUpdateForm: React.FC<{}> = ({
  children
}) => {

  const auth = useAuthService()
  const [errorString, setErrorString] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const handleSubmit = async (values) => {
    try {
      setErrorString(undefined)
      setLoading(true)
      const successString = await auth.requestPasswordUpdate(values.email)
      setSuccess(true)
    } 
    catch (e) {
      setErrorString(errorToString(e))
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className={`form-outer request-password-form ${success ? 'on-success' : ''}`}>
    {success ? (
      <Paper>
        <h2 className='form-title'>Check your email</h2>
        <p className='prompt-string'>A password update email was sent to the address you requested.<br/>Please follow the link provided to reset your password.</p>
      </Paper>
    ) : (
      <Paper>
        <h2 className='form-title'>Reset Password</h2>
        {(!!errorString) ? (
          <h6 className='error-string'>Error: {errorString}</h6>
        ) : (
          <p className='prompt-string'>Please enter the email associated with your account.<br/>A password update link will be sent there.</p>
        )}
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
        {({ submitForm, isSubmitting, touched, isValid }) => {
          const disableSubmit = isSubmitting || loading ||  !isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)
          return (
            <Form className='form-root' onKeyDown={(e) => {if (e.key === 'Enter' && !disableSubmit) { submitForm() }}}>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
              {children}
              {(loading) && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                disabled={disableSubmit}
                onClick={submitForm}
                size='large'
                className='form-button'
              >
                Send Link
              </Button>
            </Form>
          )
        }}      
        </Formik>
      </Paper>
    )} 
    </div>
  )
} 

export default RequestPasswordUpdateForm
