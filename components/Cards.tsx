import Grid from '@mui/material/Grid'
import LaptopIcon from '@mui/icons-material/Laptop'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'

const Cards = () => {
  return (
    <Grid my={3} justifyContent='space-around' container>
      <Grid container justifyContent='center' item my={2} xs={7} sm={3} sx={{ height: '100%' }}>
        <Card sx={{ width: '100%' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography color='text.secondary' gutterBottom>
              <LaptopIcon sx={{ fontSize: 70 }} />
            </Typography>
            <Typography variant='h5' sx={{ mb: 2 }} component='div'>
              Virtual
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
              dolorum esse eligendi?
            </Typography>
          </CardContent>
          <CardActions sx={{ mb: 1 }}>
            <Button sx={{ mx: 'auto' }} size='medium' variant='contained'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid container justifyContent='center' item xs={7} sm={3} my={2} sx={{ height: '100%' }}>
        <Card sx={{ width: '100%' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography color='text.secondary' gutterBottom>
              <PersonIcon sx={{ fontSize: 70 }} />
            </Typography>
            <Typography variant='h5' sx={{ mb: 2 }} component='div'>
              Hybrid
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
              dolorum esse eligendi?
            </Typography>
          </CardContent>
          <CardActions sx={{ mb: 1 }}>
            <Button sx={{ mx: 'auto' }} size='medium' variant='contained'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid container justifyContent='center' item xs={7} sm={3} my={2} sx={{ height: '100%' }}>
        <Card sx={{ width: '100%' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography color='text.secondary' gutterBottom>
              <PeopleIcon sx={{ fontSize: 70 }} />
            </Typography>
            <Typography variant='h5' sx={{ mb: 2 }} component='div'>
              In Person
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus
              dolorum esse eligendi?
            </Typography>
          </CardContent>
          <CardActions sx={{ mb: 1 }}>
            <Button sx={{ mx: 'auto' }} size='medium' variant='contained'>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Cards
