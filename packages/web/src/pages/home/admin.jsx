import React from 'react'

import { Grid } from '@material-ui/core'

import { MarkerIcon } from '~/components'

import './admin.scss'

export default () => (<>
  <div className='admin paper main-section'>
    <div className='main-section-inner'>
      <Grid container >
        <Grid item xs={12} md={6} className='grid-cell-left' >
          <h2>Understand what your customers really want</h2>
          <p className='subtitle left'>
              Get a better understanding of your entire business with in-depth insights and reporting all in one place.
          </p>
          <Grid container >
            <Grid item xs={6} >
              <MarkerIcon />
              <h6>Daily Tasks</h6>
              <p>Easily complete tasks like refunds.</p>
            </Grid>
            <Grid item xs={6} >
              <MarkerIcon />
              <h6>In-depth reports</h6>
              <p>Translate data into detailed reports.</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} >
          <img src='images/admin.png' width='100%' height='auto' />
        </Grid>
      </Grid>
    </div>
  </div>
</>)