import type { Facet } from '~/types/app'

const GENRE: Facet = {
  name: 'film-genre',
  display: {singular: 'genre (film)', plural: 'genres (film)'},
  ignoreCase: true,
  values: [
    {
      name: 'action',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #015ce3 0%, #4a90f9 100%)" 
        }
      },
    },
    {
      name: 'comedy',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #02b0d7 0%, #46dbfc 100%)"  
        }
      },
    },
    {
      name: 'drama',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #6bc959 0%, #80f09b 100%)" 
        }
      },
    },
    {
      name: 'romance',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #e77718 0%, #ffaa61 100%)"
        }
      },
    },
    {
      name: 'sci-fi',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #e01717 0%, #fe7070 100%)"
        }
      },
    },
    {
      name: 'thriller',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg,  #8c3b9e 0%, #cf5bea 100%)" 
        }
      },
    },
    {
      name: 'documentary',
      ext: {
        type: 'inline-style',
        style: {
          background: "linear-gradient(90deg, #26c3ac 0%, #69e6c8 100%)"  
        }
      },
    },
  ]
}

export default GENRE 