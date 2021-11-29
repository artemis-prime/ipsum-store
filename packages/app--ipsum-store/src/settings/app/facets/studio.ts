import type { Facet } from '~/types/app'

// By convention Facet and Credit names are SINGULAR, 
// even if they  may have multiple entries.
// eg,
// studio: ['studio a', 'studio b']
// director: ['John Smith', 'Fred Flinstone']


const STUDIO: Facet = {
  name: 'studio',
  values: [
    {
      name: 'octopie',
      displayName: 'Octopie',
      ext: {
        image: {
          url: 'images/facets/studio/octopie_logo.png',
          width: 486,
          height: 86,
        },
        style: {
          backgroundColor: 'rgb(237, 237, 237)'
        }
      },
    },
    {
      name: 'agbo',
      displayName: 'AGBO',
      ext: {
        image: {
          url: 'images/facets/studio/AGBO_LOGO_web.png',
          width: 800,
          height: 329,
        },
        style: {
          backgroundColor: 'black'
        }
      },
    },
    {
      name: 'studio4c',
      displayName: 'Studio 4c',
      ext: {
        image: {
          url: 'images/facets/studio/studio-4c-logo.png',
          width: 760,
          height: 200,
        },
        style: {
          backgroundColor: 'black'
        }
      },
    },
    {
      name: 'production-ig',
      displayName: 'Production IG',
      ext: {
        image: {
          url: 'images/facets/studio/production-ig-logo.gif',
          width: 117,
          height: 51,
        },
        showTitleInMenu: true,
        style: {
          backgroundColor: 'black'
        }
      },
    },
    {
      name: 'studio-ghibli',
      displayName: 'Studio Ghibli',
      ext: {
        image: {
          url: 'images/facets/studio/ghibli_logo_gold.png',
          width: 435,
          height: 196,
        },
        showTitleInMenu: true,
        style: {
          backgroundColor: '#fefefe'
        }
      },
    },
    {
      name: 'kyoto-animation',
      displayName: 'Kyoto Animation',
      ext: {
        image: {
          url: 'images/facets/studio/kyoto-animation-logo.png',
          width: 300,
          height: 60
        },
        style: {
          backgroundColor: 'white'
        } 
      },
    },
    {
      name: 'studio-trigger',
      displayName: 'Studio Trigger',
      ext: {
        image: {
          url: 'images/facets/studio/Trigger_Logo.svg',
          width: 3000,
          height: 728
        },
        style: {
          backgroundColor: 'white'
        } 
      },
    },
    {
      name: 'studio-madhouse',
      displayName: 'Studio Madhouse',
      ext: {
        image: {
          url: 'images/facets/studio/Madhouse_studio_logo.svg',
          width: 300,
          height: 75
        },
        style: {
          backgroundColor: 'white'
        } 
      },
    },
    {
      name: 'gobelins',
      displayName: 'Gobelins',
      ext: {
        image: {
          url: 'images/facets/studio/logo-gobelins.png',
          width: 320,
          height: 226
        },
        showTitleInMenu: true,
        style: {
          backgroundColor: 'black'
        } 
      },
    },
    {
      name: 'tat-productions',
      displayName: 'Tat Productions',
      ext: {
        image: {
          url: 'images/facets/studio/logo2018_tatproductions.png',
          width: 350,
          height: 57
        },
        style: {
          backgroundColor: 'white'
        } 
      },
    },
    {
      name: 'arcana',
      displayName: 'Arcana',
      ext: {
        image: {
          url: 'images/facets/studio/arcana-logo.png',
          width: 530,
          height: 150
        },
        style: {
          backgroundColor: /*'#3a4b5c'*/ '#7a91a8'
        } 
      },
    },
    {
      name: 'fates',
      displayName: 'Humoring the Fates',
      ext: {
        image: {
          url: 'images/facets/studio/fates-logo-1024x377.png',
          width: 1024,
          height: 377
        },
        showTitleInMenu: true,
        style: {
          backgroundColor: 'white'
        } 
      },
    },
  ]
}

export default STUDIO

