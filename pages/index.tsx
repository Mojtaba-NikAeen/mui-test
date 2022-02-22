import Head from 'next/head'
import Container from '@mui/material/Container'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import NewsletterSignup from '../components/NewsletterSignup'
import Cards from '../components/Cards'
import LearnTheFundamentals from '../components/LearnTheFundamentals'
import FAQ from '../components/FAQ'
import Instructors from '../components/Instructors'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <>
      <Head>
        <title>Material UI</title>
      </Head>

      <NavBar />
      <Container>
        <HeroSection />
        <NewsletterSignup />
        <Cards />
        <LearnTheFundamentals />
        <FAQ />
        <Instructors />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common']))
  }
})
