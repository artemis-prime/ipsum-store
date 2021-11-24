import React from 'react'

import { Grid } from '@material-ui/core'

import { MarkerIcon } from '~/components'

//import approvalVideo from './video/approval.mp4'

import './features.scss'

export default () => (<>
  <div className='features one main-section'>
    <div className='main-section-inner'>
      <h2>Accept payments and move money globally</h2>
      <p className='subtitle'>We specialize in high risk payments, and use AI technology to yield industry-leading settlement speeds.</p>
      <Grid container spacing={2} className='grid-outer'>
        <Grid item xs={12} sm={6} lg={4} >
        <MarkerIcon />
        <h4>Get started in minutes</h4>
        <p>
          Create an account online in minutes and use our libraries and SDKs to securely accept payments. 
          We’ll deposit your funds directly into your bank account.
        </p>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
        <MarkerIcon />
        <h4>Optimize your revenue</h4>
        <p>Protect yourself from fraud and increase authorization rates on every payment using our machine learning and data from millions of businesses.</p>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
        <MarkerIcon />
        <h4>Scale globally</h4>
        <p>
          With 135+ currencies and dozens of payment methods 
          Payminto makes it easy to launch new markets and add your customers’ preferred way of paying to increase conversion abroad
        </p>
        </Grid>
      </Grid>
    </div>
  </div>    
</>)

/*
  <div className='features two dark main-section'>
    <div className='main-section-inner'>
      <Grid container className='split' justify='center'>
        <Grid item xs={12} md={6} >
          <Video url={approvalVideo} width='576px' height='576px' />
        </Grid>
        <Grid item xs={12} md={6} className='split-copy'>
          <h2>Approve more transactions</h2>
          <p>
            Experience more approvals on every single payment 
            with local and global payment processing, data-driven optimizations, and powerful
            rick management. All within a fully connected single payments system.
          </p>
        </Grid>
      </Grid>
      <h2>A technology-first approach to payments and finance</h2>
      <Grid container spacing={2} className='grid-outer'>
        <Grid item xs={12} sm={6} lg={3} >
        <MarkerIcon />
        <h4>Close to the metal</h4>
        <p>From direct integrations with card networks and banks to checkout flows in the browser, we operate on and optimize at every level of the financial stack.</p>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} >
        <MarkerIcon />
        <h4>Fastest-improving platform</h4>
        <p>We release hundreds of features and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our production API 16x per day.)</p>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} >
        <MarkerIcon />
        <h4>Battle-tested reliability</h4>
        <p>Our systems operate with 99.9%+ uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.</p>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} >
        <MarkerIcon />
        <h4>Intelligent optimizations</h4>
        <p>Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.</p>
        </Grid>
      </Grid>
    </div>
  </div>
*/