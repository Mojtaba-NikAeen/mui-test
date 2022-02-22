import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const NewsletterSignup = () => {
  return (
    <>
      <Grid
        container
        mt={4}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ height: '7rem', display: { xs: 'none', sm: 'flex' } }}
      >
        <Grid
          container
          item
          direction='row'
          justifyContent='center'
          alignItems='center'
          xs={5}
          sx={{
            textAlign: 'center',
            borderRadius: 1,
            backgroundColor: '#c3c6c9',
            height: '100%'
          }}
        >
          <Grid item>
            <Typography variant='h5' sx={{ fontWeight: 40 }}>
              Signup for our newsletter
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction='row'
          justifyContent='center'
          alignItems='center'
          xs={5}
          sx={{
            borderRadius: 1,
            textAlign: 'center',
            backgroundColor: '#c3c6c9',
            height: '100%'
          }}
        >
          <Grid item>
            <ButtonGroup
              variant='contained'
              aria-label='outlined primary button group'
              sx={{ width: '90%' }}
            >
              <Input
                placeholder=' your Email address'
                sx={{
                  backgroundColor: 'white',
                  width: '70%',
                  borderTopLeftRadius: 4,
                  borderBottomLeftRadius: 4
                }}
              />
              <Button sx={{ width: '30%' }} color='secondary'>
                Submit
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>

      {/* signup newsletter for small screens (xs) */}
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        mt={2}
        sx={{ height: '7rem', display: { xs: 'flex', sm: 'none' } }}
      >
        <Grid
          item
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          xs={6}
          sx={{
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
            textAlign: 'center',
            backgroundColor: '#c3c6c9',
            height: '100%'
          }}
        >
          <Typography variant='h6' sx={{ fontWeight: 400 }}>
            Signup for our newsletter
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          xs={6}
          sx={{
            borderTopRightRadius: 2,
            borderBottomRightRadius: 2,
            backgroundColor: '#c3c6c9',
            height: '100%'
          }}
        >
          <ButtonGroup
            variant='contained'
            aria-label='outlined primary button group'
            sx={{ width: '80%' }}
          >
            <Input
              placeholder=' your Email'
              sx={{
                backgroundColor: 'white',
                width: '60%',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4
              }}
            />
            <Button sx={{ width: '40%' }} color='secondary'>
              Submit
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  )
}

export default NewsletterSignup
