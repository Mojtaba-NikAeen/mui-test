import { ChangeEvent, useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Link from 'next/link'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { useStore } from '../store/store'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}))

const NavBar = () => {
  const setTheme = useStore(state => state.setTheme)
  const darkMode = useStore(state => state.darkMode)

  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(darkMode)
  }, [darkMode])

  const { t } = useTranslation()
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const loginoutHandler = () => {
    handleClose()
    setAuth(pv => !pv)
  }

  return (
    <>
      <AppBar
        position='sticky'
        sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: '#212529' }}
      >
        <Toolbar>
          <Link href={'/'} passHref>
            <Typography
              variant='h6'
              component='a'
              sx={{
                flexGrow: 1,
                my: '1rem',
                marginLeft: '1rem',
                fontSize: '1.5rem',
                color: 'white'
              }}
            >
              {t('mui')}
            </Typography>
          </Link>
          <div>
            <FormControlLabel
              control={
                <MaterialUISwitch
                  sx={{ m: 1 }}
                  checked={value}
                  onChange={e => setTheme(e.target.checked)}
                />
              }
              label=''
            />
          </div>
          {!auth && (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle fontSize='large' />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={loginoutHandler}>{t('login')}</MenuItem>
              </Menu>
            </div>
          )}
          {auth && (
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle fontSize='large' />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{t('profile')}</MenuItem>
                <MenuItem onClick={loginoutHandler}>{t('logout')}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* bottom navigation for smaller than md */}
      <Box
        sx={{
          width: '100%',
          bottom: 0,
          display: { xs: 'block', md: 'none' },
          zIndex: 45
        }}
        position='fixed'
      >
        {auth && (
          <BottomNavigation sx={{ backgroundColor: '#212529' }} showLabels>
            <BottomNavigationAction
              label={t('homepage')}
              icon={<HomeIcon />}
              sx={{ color: 'white' }}
            />
            <BottomNavigationAction
              label={t('profile')}
              icon={<AccountBoxIcon />}
              sx={{ color: 'white' }}
            />
            <BottomNavigationAction
              onClick={loginoutHandler}
              label={t('logout')}
              icon={<LogoutIcon />}
              sx={{ color: 'white' }}
            />
          </BottomNavigation>
        )}

        {!auth && (
          <BottomNavigation sx={{ backgroundColor: '#212529' }} showLabels>
            <BottomNavigationAction
              onClick={loginoutHandler}
              label={t('login')}
              icon={<LoginIcon />}
              sx={{ color: 'white' }}
            />
          </BottomNavigation>
        )}
      </Box>
    </>
  )
}

export default NavBar
