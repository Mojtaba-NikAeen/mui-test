import '../styles/globals.css'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { appWithTranslation, useTranslation } from 'next-i18next'
import { useStore } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useStore(state => state.darkMode)
  const [value, setValue] = useState(false)

  useEffect(() => {
    setValue(darkMode)
  }, [darkMode])

  const theme = createTheme({
    typography: {
      fontFamily: `'Roboto','Shabnam'`
    },
    palette: {
      mode: value ? 'dark' : 'light'
    }
  })

  theme.typography.h4 = {
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem'
    },
    fontWeight: 400
  }

  const { i18n } = useTranslation()
  if (typeof window !== 'undefined') {
    document.body.dir = i18n.dir()
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
