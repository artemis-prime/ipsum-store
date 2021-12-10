import React from 'react'

import ThreadCard from './ThreadCard'

import './threadPage.scss'

  // id has to match the one in the dummy json file
const ThreadPage: React.FC<{}> = () => (
  <div className='main-section'>
    <div className='main-section-inner thread-page'>
    <ThreadCard offerId={'abc123'}/>
    </div>
  </div>
)

export default ThreadPage

