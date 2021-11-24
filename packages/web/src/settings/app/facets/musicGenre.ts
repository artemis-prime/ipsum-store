import type { Facet } from '~/types/app'

const GENRE: Facet = {
  name: 'music-genre',
  display: {singular: 'genre (music)', plural: 'genres (music)'},
  ignoreCase: true,
  values: [
    {
      name: 'hip-hop',
      displayName: 'hip hop',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#95a',
      },
    },
    {
      name: 'podcasts',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#f90',
      },
    },
    {
      name: 'christian',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#007474',
      },
    },
    {
      name: 'pop',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#a84857',
      },
    },
    {
      name: 'country',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#a26553',
      },
    },
    {
      name: 'r-and-b',
      displayName: 'r&b',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#30211a',
      },
    },
    {
      name: 'latin',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#b3590f',
      },
    },
    {
      name: 'indie-rock',
      displayName: 'indie rock',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#5d5f33',
      },
    },
    {
      name: 'folk-and-acoustic',
      displayName: 'folk & acoustic',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#136b41',
      },
    },
    {
      name: 'classical',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#b68528',
      },
    },
    {
      name: 'jazz',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#b68528',
      },
    },
    {
      name: 'reggae',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#286825',
      },
    },
    {
      name: 'rock',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#333',
      },
    },
    {
      name: 'blues',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#220c7f',
      },
    },
    {
      name: 'funk',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#430c7f',
      },
    },
    {
      name: 'women',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#a84857',
      },
    },
    {
      name: 'dance',
      ext: {
        type: 'gradient-from-color',
        gradientColor: '#3d3f66',
      },
    },
  ]
}

export default GENRE 