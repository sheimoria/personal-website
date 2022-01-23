import Footer from 'components/Footer'
import Head from 'next/head'
import Header from 'components/Header'
import Intro from 'components/Intro'
import type { NextPage } from 'next'
import Links from 'components/Links'
import Email from 'components/Email'
import WorkExperience from 'components/WorkExperience'
import Education from 'components/Education'
import Projects from 'components/Projects'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main>
        <Intro />
        <Education />
        <WorkExperience />
        <Projects />
      </main>
      <Links />
      <Email />
      <Footer />
    </>
  )
}

export default Home
