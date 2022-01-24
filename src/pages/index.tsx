import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import Intro from 'components/Intro'
import type { NextPage } from 'next'
import Links from 'components/Links'
import Email from 'components/Email'
import Experience from 'components/Experience'
import Education from 'components/Education'
import Extracurriculars from 'components/Extracurriculars'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main className="max-w-xl max-h-screen mx-auto lg:max-w-3xl snap-y snap-mandatory">
        <Intro />
        <Education />
        <Experience />
        <Extracurriculars />
      </main>
      <Links />
      <Email />
      <Footer />
    </>
  )
}

export default Home
