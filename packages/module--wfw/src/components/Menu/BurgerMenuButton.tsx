import React from 'react'

import { IconButton } from '@mui/material'
import { MenuRounded as BurgerIcon } from '@mui/icons-material'

import { makeStyles } from '../../style'

const useStyles = makeStyles()((theme) => ({

  button: {
    marginRight: '-12px', // so button appears round on hover but is aligned w left margin
  },

  icon: {
    width: '32px',
    height: '32px'
  },
}))

const BurgerMenuButton: React.FC<{
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}> = ({ 
  onClick 
}) => {
  const { classes: s } = useStyles()
  return (
    <IconButton onClick={onClick} className={s.button} size="large">
      <BurgerIcon className={s.icon} />
    </IconButton>
  );
}

export default BurgerMenuButton
