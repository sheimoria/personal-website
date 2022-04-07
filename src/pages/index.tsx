import Head from 'next/head'
import Header from 'components/Header'
import Intro from 'components/Intro'
import Links from 'components/Links'
import Email from 'components/Email'
import Footer from 'components/Footer'
import experience from 'data/experience'
import Cards from 'components/Cards'
import education from 'data/education'
import extracurriculars from 'data/extracurriculars'
import Image from 'next/image'
import { useTheme } from 'next-themes'

function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main className="flex flex-col max-w-md gap-12 md:max-w-xl mx-auto lg:max-w-3xl xl:max-w-5xl mt-32">
        <Intro />
        <Cards size="large" heading="Experience" data={experience} />
        <h4 id="education">Education</h4>
        <div className="flex gap-4 items-center px-8 sm:px-0">
          <div className="relative flex-none w-20 h-20">
            <Image
              src={`${theme == 'light' ? '/light' : '/dark'}/${
                education.logo
              }.svg`}
              alt={education.logo}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h6>{education.name}</h6>
            <h6>{education.degree}</h6>
            <p>{education.period}</p>
          </div>
        </div>
        <Cards size="large" heading="Courses" data={education.courses} />
        <Cards
          size="small"
          heading="Extracurriculars"
          data={extracurriculars}
        />
      </main>
      <Footer />
      <Links />
      <Email />
    </>
  )
}

export default Home
