import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled, experimental_sx as sx } from '@mui/system'
import { useTranslation } from 'next-i18next'

const CustomText = styled('p')(
  sx({
    width: '100%',
    textAlign: 'center',
    marginY: 'auto',
    height: '1.2rem'
  })
)

const FAQ = () => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div style={{ marginBottom: 50 }}>
      <Typography fontSize={30} color='white' sx={{ textAlign: 'center', display: 'block' }}>
        {t('FAQ')}
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <CustomText>{t('q1')}</CustomText>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('lorem')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <CustomText>{t('q2')}</CustomText>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('lorem')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <CustomText>{t('q3')}</CustomText>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('lorem')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <CustomText>{t('q4')}</CustomText>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('lorem')}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default FAQ
