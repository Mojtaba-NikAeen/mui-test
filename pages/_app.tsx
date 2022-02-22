import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme()

theme.typography.h4 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem'
  },
  fontWeight: 400
}

// theme.palette.mode = 'dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
