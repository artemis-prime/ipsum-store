/**
 * NOTE: We cannot import or require ANYTHING in this file!
 * It is BOTH imported and linked by SnowPack in a React app,
 * AND dynamically imported ( via await import(<filname>) ) into a node utility running in '--harmony' mode.
 * It must also have the '*.mjs' extension
 */

const SPACING_BASE = 8
const MAX_CONTAINER_WIDTH = 1200

const PALETTE = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#008BCC',
    dark: '#00699a',
    light: '#339cd4',
    contrastText: '#fff'
  },
  secondary: {
    dark: '#96377a', 
    main: '#af4c92',
    light: '#bf70a8',
    contrastText: '#fff'
  },
  error: {
    dark: '#bf253b',
    main: '#ee314c',
    light: '#f15a70',
    contrastText: '#fff'
  },
  warning: {
    main: '#ff7c24',
    light: '#ff9650',
    dark: '#ec660c',
    contrastText: '#fff'
  },
  info: {
    dark: '#96377a', 
    main: '#af4c92',
    light: '#bf70a8',
    contrastText: '#fff'
  },
  success: {
    main: '#77c043',
    light: '#77c043',
    dark: '#61a331',
    contrastText: '#fff'
  },
  text: {
    primary: '#262626',
    secondary: '#525252',
    disabled: '#969696',
    hint: '#6848c4'
  },
  divider: 'rgba(0, 0, 0, 0.20)',
  background: {
    default: '#fff',
    paper: '#f6f6fa'   
  },
}

const SHAPE = {
  borderRadius: 4
}

const EXT = {
  spacing: SPACING_BASE,
  maxContainerWidth: MAX_CONTAINER_WIDTH,
  background: {
    dark: '#031033'
  },
  bgImageDivStyles: (url, ratio) => ({
      // ration is x / y
      // https://stackoverflow.com/questions/1495407/maintain-the-aspect-ratio-of-a-div-with-css
    backgroundImage: `url("${url}")`,
    boxSizing: 'border-box',
    width: '100%',
    paddingBottom: `${100 / ratio}%`,
    backgroundSize: 'cover',
  }),
  toolbar: {
    normal: 64,
    small: 56
  },
  radius: {
    small: '2px',
    normal: '4px',
    larger: '6px',
    large: '8px',
  },

  menuButton: {
    display: 'block',
    color: 'inherit',

    '&.button-variant-text': {
      borderRadius: '0px',
      //marginBottom: '8px',
      paddingBottom: 0,

      '&:hover': {
        backgroundColor: 'inherit',
      },
      '& > .MuiButton-label': {
      }
    },

    '&.button-variant-contained': {
      //marginBottom: '5px',
      paddingLeft: '12px',
      paddingRight: '12px',
      color: PALETTE.common.white,
      '&:hover': {
        color: PALETTE.text.secondary,
      }
    },

    '&.link-button': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '&:hover': {
        textDecoration: 'none',
        '& *': {
          textDecoration: 'inherit',
        }
      },
    },

    paddingLeft: '6px',
    paddingRight: '6px',
    marginRight: SPACING_BASE,
    '&:last-child': {
      marginRight: 0
    },
    minWidth: '80px',

    '& .MuiButton-endIcon': {
      marginLeft: '1.5px',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '-3px',
      transition: '0.5s transform ease'
    },

    '&.selected': {
      '& .MuiSvgIcon-root': {
        transform: 'rotate(180deg)'
      }
    },
  },

  menuButtonLabel: {
    width: 'auto',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    '.button-variant-text &': {
      borderBottom: '3.5px transparent solid',
      '&:hover': {
        borderBottom: `3.5px ${PALETTE.primary.main} solid`,
      },
    }
  }
}

export default {

    // https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 780,
      lg: 1080,
      xl: 1366
    }
  },

  spacing: SPACING_BASE,

  palette: {
    mode: 'light',
    ...PALETTE,
  },
  typography: {
    fontFamily: 'poppins, sans-serif',
  },
  shape: {
    ...SHAPE
  },

  components: {

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          minWidth: '0 !important'
        }
      }
    },

    MuiContainer: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          // impl in style/responsivePadding.scss due to bug in MUI
        },
      }
    },

/*

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          lineHeight: 1.2,
          whiteSpace: 'nowrap',
          textTransform: 'capitalize'
        },
        containedPrimary: {
          color: PALETTE.common.white,
          '&:hover': {
            color: PALETTE.text.secondary,
            backgroundColor: PALETTE.primary.light,
          }
        },
        containedSizeLarge: {
          padding: '12px 24px',
        },
        outlinedSizeLarge: {
          padding: '11px 24px', // account for border
        },
        containedSizeSmall: {
          padding: '8px 18px',
        },
        outlinedSizeSmall: {
          padding: '7px 18px', // account for border
        },
  
        outlined: {
          boxSizing: 'border-box',
          borderColor: 'rgba(0, 0, 0, 0.95)',
          color:  'rgba(0, 0, 0, 0.95)',
          opacity: 0.8,
          '&:hover': {
            opacity: 1,
          }
        },
  
        outlinedPrimary: {
          borderColor: PALETTE.primary.dark,
          color: `${PALETTE.primary.dark} !important`,
          '&:hover': {
            borderColor: PALETTE.primary.dark,
            color: `${PALETTE.primary.light} !important`,
            boxShadow:  '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)'
          },
        },
      }
    },


    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'flex', // not 'inline-flex'
          '& legend': {
            marginBottom: '3px'
          },
          '&:hover': {
            '& .MuiFormLabel-root:not(.Mui-disabled)': {
              color: PALETTE.text.primary,
              fontWeight: 600
            }  
          }
        },
      }
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
        label: {
          fontSize: '0.8rem'
        }
      }
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '11px',
          lineHeight: '12px',
          marginTop: '1px',
          textAlign: 'right'
        }
      }
    },

    
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem', // to somewhat match the MuiInputLabel-shrink labels
          lineHeight: '1.3rem',
          color: GREY_SHADES[7],
          '&.MuiInputLabel-shrink': {
            fontSize: '1.2rem',
            lineHeight: '1.3rem',
          },
          '&.Mui-focused': {
  //          color: 'inherit'
            color: PALETTE.text.primary,
            fontWeight: 600
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        formControl: {
          marginTop: '0 !important',
          marginBottom: '13px', // as per lineHeight + marginTop of MuiFormHelperText-root below
          '&.Mui-error': {
            marginBottom: 0,
          }
        },
        input: {
          padding: '4px 6px'
        }
      },
    },

    MuiInputLabel: {
      defaultProps: {
          // display labels above the control by default
          // (no animation behavior)
        shrink: true
      },
      styleOverrides: {
        formControl: {
          //position: 'static'
        },
      }
    },

    MuiLink: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
        }
      }
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: '0 !important'
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          padding: SPACING_BASE * 2 + 'px',
          borderRadius: SHAPE.borderRadius,
        }
      }
    },

    MuiRadio: {
      styleOverrides: {
        root: {
          padding: '2px',
          paddingRight: '4px',
          color: 'initial'
        }
      }
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '4px 6px'
        }
      }
    },

    MuiSwitch: {
      styleOverrides: {
        root: {
          marginTop: -5,
          marginBottom: -5,
        }
      }
    },

    MuiTableBody: {
      styleOverrides: {
        root: {
          backgroundColor: PALETTE.background.default,
        }
      }
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          paddingBottom: SPACING_BASE * 2 + 'px',
          fontWeight: 600,
          textTransform: 'uppercase',
        },
        root: {
          borderBottom: 'none',
          fontSize: '1rem',
        },
      }
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },

    MuiTableRow: {
      styleOverrides: {
        head: {
          borderBottom: '1px solid #aaa',
        },
        root: {
          borderTop: '0.5px solid lightgrey',
          verticalAlign: 'baseline',
        },
      }
    },

    MuiTimelineItem: {
      styleOverrides: {
        alignLeft: {

        },
        missingOppositeContent: {
          '&:before': {
            flexGrow: 0,
            content: '""', // must use this syntax!
            paddingLeft: SPACING_BASE * 2 + 'px'
          }
        }
      }
    },
    */
  },
  
  ext: EXT
}
