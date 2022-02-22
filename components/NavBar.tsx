import { useState } from 'react'
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

const NavBar = () => {
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
