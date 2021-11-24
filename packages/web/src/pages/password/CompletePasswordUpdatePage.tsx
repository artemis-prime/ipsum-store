import React from 'react'

import CompletePasswordUpdateForm from './CompletePasswordUpdateForm'

import './style.scss'

const CompletePasswordUpdatePage: React.FC<{}> = () => {
  return (
    <div className='just-form-outer'>
      <CompletePasswordUpdateForm prompt='Update password' />
    </div>
  )
}

export default CompletePasswordUpdatePage