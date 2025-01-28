import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Projects from '@/components/home/Projects'
import Testimonials from '@/components/home/Testimonials'
import ContactSection from '@/components/home/ContactSection'
import { GetStaticProps } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <ContactSection />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home 