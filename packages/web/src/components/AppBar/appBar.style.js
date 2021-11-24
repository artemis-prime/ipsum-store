export default (theme) => ({

  orgSelector: {
    marginRight: '6px'
  },

  header: {
  }, 

  fullSizeToolbar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column !important',
    //justifyContent: 'center',
    alignItems: 'stretch  !important',
    paddingBottom: '0 !important'
  },

  menuShelfInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  menuShelfTop: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.secondary.dark,

    '& h6': {
      margin: 0
    }
  },

  menuShelfBottom: {
    //border: '1px solid red'
  },

  menuShelves: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  logo: {
    cursor: 'pointer',
    margin: '7px 0px'
  },

  logoLink: {
    display: 'block',
    marginRight: theme.spacing(2) + 'px !important',
    '&:hover': {
      textDecoration: 'none',
    }
  },

  menuSectionOuter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    boxSizing: 'border-box',

    fontSize: '17px',
    '& *': {
      fontSize: 'inherit',
    },
    '& > *': {
      //marginRight: '10px',
      '&:last-child': {
        //marginRight: 0,
      }
    },
  },

  leftMenu: {
    justifyContent: 'flex-start',
  },

  rightMenu: {
    justifyContent: 'flex-end',
  },

  hamburgerMenuButton: {
    marginRight: '-12px', // so button appears round on hover but is aligned w left margin
  },

  hamburgerMenuIcon: {
    width: '32px',
    height: '32px'
  },

  accountOuter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.text.primary, 
    '& *': {
      color: 'inherit',
    },
    marginLeft: theme.spacing(1)
  },

  accountButton: {
    padding: '4px',
    marginRight: '-4px'
  },

  accountIcon: {
    width: 32,
    height: 32,
  },

  menu: {
    '& li.MuiMenuItem-root': {
      '& svg': {
        color: 'inherit',
      },
    }
  },

  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  menuItemText: {
    display: 'block',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
  },

  menuItemIcon: {
    display: 'block',
    marginLeft: theme.spacing(2),
    boxSizing: 'border-box'
  },

  navButton: {
    '&:nth-child(2)': {
      marginLeft: theme.spacing(2)
    }
  },


})