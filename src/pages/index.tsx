import Head from 'next/head'
import Header from 'components/Header'
import Intro from 'components/Intro'
import type { NextPage } from 'next'
import Sidework from 'components/Sidework'
import Stints from 'components/Stints'
import Studies from 'components/Studies'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main>
        <Intro />
        <Stints />
        <Studies />
        <Sidework />
      </main>
    </>
  )
}

export default Home
