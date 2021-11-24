import React from 'react'

import { Grid } from '@material-ui/core'

import { 
  Link, 
  MarkerIcon, 
  Video 
} from '~/components'

import lushVideo from './video/lush.mp4'

import './caseStudy.scss'

interface CaseStudyCardProps {
  imageSrc: string
  title: string
  tagLine: string
  link: string
}

const CASE_STUDIES: CaseStudyCardProps[] = [
  { 
    imageSrc: 'images/case-studies/hompage-16x9-brompton.jpg',
    title: 'Brompton',
    tagLine: 'Making tracks with glabal payments',
    link: '/'
  },
  { 
    imageSrc: 'images/case-studies/hompage-16x9-flixbus.jpg',
    title: 'Flixbus',
    tagLine: 'The road to global expansion',
    link: '/'
  },
  { 
    imageSrc: 'images/case-studies/hompage-16x9-transferwise.jpg',
    title: 'Transferwise',
    tagLine: '4 questions with Wade Stokes',
    link: '/'
  },
]

const CaseStudy: React.FC<any> = () => (<>
  <div className='case-study main-section'>
    <div className='main-section-inner'>
      <h2 className='section-title'>We work with companies with big ideas</h2>
      <Link className='section-link' to='/'>See the companies we work with <span className='link-arrow'/></Link>      
      <Grid container className='split' justify='center'>
        <Grid item xs={12} md={6} >
          <Video url={lushVideo} width='576px' height='576px' />
        </Grid>
        <Grid item xs={12} md={6} className='split-copy'>
          <h2 className='case-title'>LUSH</h2>
          <p>
            "Working with the sales teams and account managers has been great. They've helped us
            get to market with our LUSH Pay solution much quicker than if we had tried to do it ourselves."
          </p>
        </Grid>
      </Grid>
      <Grid container className='three' justify='center'>
      {CASE_STUDIES.map(({
          imageSrc,
          title,
          tagLine,
          link
        }) => (
        <Grid item xs={12} md={4} >
          <CaseStudyCard imageSrc={imageSrc} title={title} tagLine={tagLine} link={link} />
        </Grid>
      ))}
      </Grid>
    </div>
  </div>
</>)

const CaseStudyCard : React.FC<CaseStudyCardProps> = ({
  imageSrc,
  title,
  tagLine,
  link
}) => (
  <div className='case-study-outer'>
    <img src={imageSrc} alt={title} width='100%' height='auto' />
    <h6 className='title'>{title}</h6>
    <p className='tagline'>{tagLine}</p>
    <Link to={link} className='link'>Read customer story <span className='link-arrow'/></Link>
  </div>
)

export default CaseStudy