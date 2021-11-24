import React from 'react'

import RequestPasswordUpdateForm from './RequestPasswordUpdateForm'
import './style.scss'

const RequestPasswordUpdatePage: React.FC<{}> = () => {
  return (
    <div className='just-form-outer'>
      <RequestPasswordUpdateForm />
    </div>
  )
}

export default RequestPasswordUpdatePage