import { useState } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import DateTimePicker from '@mui/lab/DateTimePicker'
import DatePicker from '@mui/lab/DatePicker'
import Badge from '@mui/material/Badge'
import TextField from '@mui/material/TextField'
import PickersDay from '@mui/lab/PickersDay'

const ReservationPage = () => {
  const [value, setValue] = useState<Date | null>(new Date())

  return (
    <Container>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ bgcolor: 'background.default', height: '100vh' }}
      >
        <DateTimePicker
          renderInput={params => <TextField {...params} />}
          mask='____/__/__'
          value={value}
          onChange={newValue => setValue(newValue)}
          minDate={new Date()}
          maxDate={new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 14)}
          minTime={new Date(0, 0, 0, 8)}
          maxTime={new Date(0, 0, 0, 18, 45)}
          shouldDisableTime={(timeValue, clockType) => {
            if (clockType === 'minutes' && timeValue % 30) {
              return true
            }

            return false
          }}
          shouldDisableDate={day => {
            if (day.getDay() === 5) {
              return true
            }

            return false
          }}
          renderDay={(day, _value, DayComponentProps) => {
            // const isSelected =
            //   !DayComponentProps.outsideCurrentMonth &&
            //   highlightedDays.indexOf(day.getDate()) > 0;

            const isSelected = day.toDateString() === new Date('2022-02-27').toDateString()

            return (
              <Badge
                key={day.toString()}
                overlap='circular'
                sx={{ color: 'red' }}
                badgeContent={isSelected ? 'X' : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            )
          }}
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
