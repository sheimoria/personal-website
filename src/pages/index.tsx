import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main>
        <section id="studies">
          <h1>Studies</h1>
          <div className="flex flex-col gap-7 sm:flex-row">
            {studies.map((study) => (
              <article key={study.id}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative flex-none w-12 h-16">
                    <Image
                      src={`/${study.logo}.svg`}
                      alt={study.logo}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="left"
                    />
                  </div>
                  <div>
                    <h2>{study.name}</h2>
                    <h3>{study.accreditation}</h3>
                    <h4>{study.period}</h4>
                  </div>
                </div>
                {study.courses && (
                  <>
                    <h2>Courses</h2>
                    {study.courses.map((course) => (
                      <article key={course.id}>
                        <div className="relative w-full h-10">
                          <Image
                            src={`/${course.logo}.svg`}
                            alt={course.logo}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                          />
                        </div>
                        <div>
                          <h2>{course.name}</h2>
                          <h3>{course.period}</h3>
                        </div>
                        <p>{course.description}</p>
                        {course.stack && (
                          <div className="flex flex-wrap gap-6">
                            {course.stack.map((tech) => (
                              <div key={tech.id} className="relative w-6 h-6">
                                <Image
                                  src={`/${tech.logo}.svg`}
                                  alt={tech.name}
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition="left"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </article>
                    ))}
                  </>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="stints">
          <h1>Stints</h1>
          <div className="flex flex-col gap-7 sm:flex-row">
            {stints.map((stint) => (
              <article key={stint.id}>
                <div className="relative w-full h-8">
                  <Image
                    src={`/${stint.logo}.svg`}
                    alt={stint.logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
                <div>
                  <h2>{stint.title}</h2>
                  <h3>{stint.period}</h3>
                </div>
                <p>{stint.description}</p>
                {stint.stack && (
                  <div className="flex flex-wrap gap-6">
                    {stint.stack.map((tech) => (
                      <div key={tech.id} className="relative w-6 h-6">
                        <Image
                          src={`/${tech.logo}.svg`}
                          alt={tech.name}
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home

const studies = [
  {
    id: 1,
    logo: 'nus',
    name: 'National University of Singapore',
    accreditation: 'Bachelor of Computing in Computer Science',
    period: 'Aug 2020 – Present',
    description: 'Lorem ipsum',
    courses: [
      {
        id: 1,
        logo: 'orbital',
        name: 'Orbital',
        period: 'May 2021 – Aug 2021',
        description:
          'Developed a social platform for Singaporeans to discover volunteer opportunities and for charities to manage volunteers; achieved Artemis (highest) level certification.',
        stack: [
          { id: 1, logo: 'nextjs', name: 'Next.js' },
          { id: 2, logo: 'ts', name: 'Typescript' }
        ]
      }
    ]
  },
  {
    id: 2,
    logo: 'sji',
    name: "St. Joseph's Institution",
    accreditation: 'International Baccalaureate Diploma',
    period: 'Aug 2020 – Present',
    description: 'Lorem ipsum'
  }
]

const stints = [
  {
    id: 1,
    logo: 'carfix',
    title: 'Frontend Developer Intern',
    period: 'May 2021 – Present',
    description:
      'Developed a web app that allows car owners to compare repair prices and book brick-and-mortar workshops. As the startup’s minimum viable product, it attained funding from a local accelerator. Designed the frontend user interface as well as the backend database structure. Created a design system for branding and marketing.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  },
  {
    id: 2,
    logo: 'grab',
    title: 'Marketing Assistant',
    period: 'Jan 2020 – Jul 2020',
    description:
      'Developed interactive landing pages for acquisition and retention campaigns. Designed various graphics for social media and the website. Executed telemarketing initiatives to inform drivers of available COVID-19 aid.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  }
]
