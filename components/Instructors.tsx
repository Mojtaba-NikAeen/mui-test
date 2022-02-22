import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Instructors = () => {
  return (
    <>
      <Typography fontSize={30} color='white' sx={{ textAlign: 'center', display: 'block' }}>
        Our Instructors
      </Typography>
      <Grid
        spacing={2}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        container
        mb={12}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Image
                src={'https://randomuser.me/api/portraits/men/2.jpg'}
                width={150}
                height={150}
                unoptimized
                alt='our prestigious instructor 1'
              />
              <Typography variant='h5' sx={{ mb: 2 }} component='div'>
                Abbas Doe
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
                dolorum esse eligendi?
              </Typography>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Image
                src={'https://randomuser.me/api/portraits/women/3.jpg'}
                width={150}
                height={150}
                unoptimized
                alt='our prestigious instructor 2'
              />
              <Typography variant='h5' sx={{ mb: 2 }} component='div'>
                Kolsum Doe
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
                dolorum esse eligendi?
              </Typography>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Image
                src={'https://randomuser.me/api/portraits/men/27.jpg'}
                width={150}
                height={150}
                unoptimized
                alt='our prestigious instructor 3'
              />
              <Typography variant='h5' sx={{ mb: 2 }} component='div'>
                Adam Smith
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
                dolorum esse eligendi?
              </Typography>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ width: '100%' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Image
                src={'https://randomuser.me/api/portraits/men/71.jpg'}
                width={150}
                height={150}
                unoptimized
                alt='our prestigious instructor 4'
              />
              <Typography variant='h5' sx={{ mb: 2 }} component='div'>
                Steve Smith
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
                dolorum esse eligendi?
              </Typography>
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Instructors
