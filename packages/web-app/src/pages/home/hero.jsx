import React from 'react'

import { Button, Grid } from '@material-ui/core'

import { Video } from '~/components'

import heroVideo from './video/hero.mp4'
import './hero.scss'

export default () => (
  <div className='main-section'>
    <Grid container className='hero main-section-inner'>
      <Grid item xs={12} md={6} className='left'>
        <h3>Accept payments instantly</h3>
        <ul>
          <li>Rapid Approval</li>
          <li>Full-service on-boarding</li>
          <li>Lowest Cost</li>
          <li>Global acquiring and settlement</li>
          <li>Specialists in Asia</li>
        </ul>
        <Button size='large' >How much can I save?</Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className='right'>
          <Video url={heroVideo} width='576px' height='672px' />
        </div>
      </Grid>
    </Grid>
  </div>
)
