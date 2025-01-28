import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout/Layout'
import AboutUs from '@/components/about/AboutUs'

const NosotrosPage: NextPage = () => {
  return (
    <Layout>
      <AboutUs />
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

export default NosotrosPage 