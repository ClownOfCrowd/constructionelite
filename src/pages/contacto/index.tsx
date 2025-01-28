import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout/Layout'
import ContactSection from '@/components/home/ContactSection'

const ContactoPage: NextPage = () => {
  return (
    <Layout>
      <ContactSection />
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

export default ContactoPage 