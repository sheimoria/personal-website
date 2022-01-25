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
      <main className="flex flex-col max-w-xl max-h-screen gap-12 mx-auto lg:max-w-3xl">
        <Intro />
        <Education />
        <Experience />
        <Extracurriculars />
      </main>
      <Links />
      <Email />
    </>
  )
}

export default Home
