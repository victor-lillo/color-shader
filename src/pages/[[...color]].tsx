import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Head from 'next/head'

import ColorModule from '@components/ColorModule'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Fentos | Color shades and opacities</title>
        <meta name='description' content="Fentos' project" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ColorModule />
    </Layout>
  )
}

export default Home
