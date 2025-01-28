import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '@/components/layout/Layout'
import PortfolioSection from '@/components/portfolio/PortfolioSection'

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <PortfolioSection />
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

export default Portfolio 