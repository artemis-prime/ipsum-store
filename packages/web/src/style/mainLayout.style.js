export default (theme) => ({

  outermost: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflowX: 'hidden',
    padding: 0,
    backgroundColor: theme.palette.background.default,
  },

    /* padding and responsivity impl is in 'style/scss-partials/_responsivePadding.scss' */ 
  appBar: {
    zIndex: 200
  },

    /* padding and responsivity impl is in 'style/scss-partials/_responsivePadding.scss' */ 
  main: {
    maxWidth: 'initial',
    flexGrow: 1,
    [theme.breakpoints.between('xs', 'sm')]: {
      marginTop: theme.ext.toolbar.small,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.ext.toolbar.normal,
    },
    minHeight: '50vh',
  },
  
    /* padding and responsivity impl is in 'style/scss-partials/_responsivePadding.scss' */ 
  footer: {
  },

  megaMenu: {
    position: 'fixed', 
    zIndex: 150,
  },

  modalScrim: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100
  }
})