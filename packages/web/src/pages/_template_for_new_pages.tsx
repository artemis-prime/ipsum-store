import React from 'react'
import { useLocation } from 'react-router-dom'

import TypographyTest from '~/util/TypographyTest'


const MyPage: React.FC<{
  foo: number
  bar: string
}> = (
  foo,
  bar
) => {
  const location = useLocation()
  return (
    <div className='main-section'>
      <div className='main-section-inner'>
        <h1>{`A lovely test page at '${location.pathname}'.`}</h1>
        <TypographyTest />
      </div>
    </div>
  )
}
export default MyPage