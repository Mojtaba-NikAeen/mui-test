import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{ height: '20rem', backgroundColor: '#212529', borderRadius: 1 }}
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
          <Typography variant='h4' color='white'>
            Become a{' '}
            <Typography variant='h4' color='#dacc08' display='inline'>
              Web Developer
            </Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1' color='white' paddingX={2}>
            We focus on teaching our students the fundamentals of the latest and greatest
            technologies to prepare them for their first dev role{' '}
          </Typography>
        </Grid>
        <Grid item>
          <Button size='large' variant='contained'>
            Sign up to Start
          </Button>
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
