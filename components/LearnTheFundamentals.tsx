import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTranslation } from 'next-i18next'

const LearnTheFundamentals = () => {
  const { t } = useTranslation()
  return (
    <Grid
      container
      mb={8}
      sx={{ height: '20rem', backgroundColor: '#c3c6c9', borderRadius: 1 }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid
        item
        sx={{
          textAlign: 'center',
          height: '100%',
          display: { xs: 'none', sm: 'inline' }
        }}
        sm={5}
      >
        <Image src='/fundamentals.svg' width={400} height={350} alt='' />
      </Grid>
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
          <Typography variant='h4' color='black'>
            {t('fundamentals')}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='black' paddingX={2}>
            {t('text')}
          </Typography>
        </Grid>
        <Grid item>
          <Button size='large' color='secondary' variant='contained'>
            {t('funbtn')}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LearnTheFundamentals
