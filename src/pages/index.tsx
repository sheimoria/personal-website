import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import Intro from 'components/Intro'
import type { NextPage } from 'next'
import Sidework from 'components/Sidework'
import Stints from 'components/Stints'
import Studies from 'components/Studies'
import Links from 'components/Links'
import Email from 'components/Email'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <Links />
      <main>
        <Intro />
        <Stints />
        <Studies />
        <Sidework />
      </main>
      <Email />
      <Footer />
    </>
  )
}

export default Home
