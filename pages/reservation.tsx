import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import DateTimePicker from '@mui/lab/DateTimePicker'
import TextField from '@mui/material/TextField'

const ReservationPage = () => {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ backgroundColor: '#fff', width: '100%', height: '100vh' }}
      >
        <DateTimePicker
          renderInput={params => <TextField {...params} />}
          label='Reserve a Idkwhat'
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          minDateTime={new Date()}
          // minDate={new Date('2022-02-27')}
          // minTime={new Date(0, 0, 0, 8)}
          // maxTime={new Date(0, 0, 0, 18, 45)}
        />
      </Grid>
    </Container>
  )
}

export default ReservationPage

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common']))
  }
})
