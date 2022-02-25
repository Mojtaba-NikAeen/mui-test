import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const HeroSection = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Grid
      container
      sx={{ height: '20rem', bgcolor: 'background.default', borderRadius: 2 }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid
        container
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        item
        sx={{ height: '100%' }}
        xs={12}
        sm={7}
      >
        <Grid item>
          <Typography variant='h4' color='text.primary'>
            {t('title')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='text.primary' paddingX={2}>
            {t('text')}
          </Typography>
        </Grid>
        <Grid item>
          <Link href='/' locale={router.locale === 'en' ? 'fa' : 'en'} passHref>
            <Button size='large' variant='contained' color='primary'>
              {t('change-locale')}
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          textAlign: 'center',
          height: '100%',
          display: { xs: 'none', sm: 'inline' }
        }}
        sm={5}
      >
        <Image src='/react.svg' width={400} height={350} alt='' />
      </Grid>
    </Grid>
  )
}

export default HeroSection
