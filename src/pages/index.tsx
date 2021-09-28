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
            {studies.map((study, index) => (
              <article key={index}>
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
                    {study.courses.map((course, index) => (
                      <article key={index}>
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
            {stints.map((stint, index) => (
              <article key={index}>
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
                  <h3>{stint.organisation}</h3>
                  <h4>{stint.period}</h4>
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
        <section id="sidehustles">
          <h1>Sidehustles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {sidehustles.map((sidehustle, index) => (
              <article key={index}>
                <div className="relative w-full h-8">
                  <Image
                    src={`/${sidehustle.logo}.svg`}
                    alt={sidehustle.logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
                <div>
                  <h2>{sidehustle.title}</h2>
                  <h3>{sidehustle.organisation}</h3>
                  <h4>{sidehustle.period}</h4>
                </div>
                <p>{sidehustle.description}</p>
                {sidehustle.stack && (
                  <div className="flex flex-wrap gap-6">
                    {sidehustle.stack.map((tech) => (
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
    logo: 'nus',
    name: 'National University of Singapore',
    accreditation: 'Bachelor of Computing in Computer Science',
    period: 'Aug 2020 – Present',
    description: 'Lorem ipsum',
    courses: [
      {
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
    logo: 'sji',
    name: "St. Joseph's Institution",
    accreditation: 'International Baccalaureate Diploma',
    period: 'Aug 2020 – Present',
    description: 'Lorem ipsum'
  }
]

const stints = [
  {
    logo: 'carfix',
    title: 'Frontend Developer Intern',
    organisation: 'Carfix',
    period: 'May 2021 – Present',
    description:
      'Developed a web app that allows car owners to compare repair prices and book brick-and-mortar workshops. As the startup’s minimum viable product, it attained funding from a local accelerator. Designed the frontend user interface as well as the backend database structure. Created a design system for branding and marketing.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  },
  {
    logo: 'grab',
    title: 'Marketing Assistant',
    organisation: 'Grab',
    period: 'Jan 2020 – Jul 2020',
    description:
      'Developed interactive landing pages for acquisition and retention campaigns. Designed various graphics for social media and the website. Executed telemarketing initiatives to inform drivers of available COVID-19 aid.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  }
]

const sidehustles = [
  {
    logo: 'better',
    title: 'Race Relations in Singapore',
    organisation: '',
    period: 'May 2020 – Present',
    description:
      'Initiated a website to showcase a growing spreadsheet of educational resources on Singapore’s race relations, which attracted collaboration with a civic tech collective.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  },
  {
    logo: 'aws',
    title: 'Build On Singapore',
    organisation: 'Amazon Web Services',
    period: 'Jul 2020 – Aug 2020',
    description:
      'Proposed an app that connects workers affected by COVID-19 to gigs and contract work; emerged as finalists',
    stack: [{ id: 1, logo: 'figma', name: 'Figma' }]
  },
  {
    logo: 'hack&roll',
    title: 'Hack&Roll',
    organisation: 'National University of Singapore Hackers',
    period: 'Jan 2021',
    description:
      'Developed a web app that notified users via Telegram whenever keywords appear during a live lecture',
    stack: [
      { id: 1, logo: 'bootstrap', name: 'Bootstrap' },
      { id: 2, logo: 'flask', name: 'Flask' }
    ]
  },
  {
    logo: 'eusoff-smc',
    title: 'Sports Committee Publicity Head',
    organisation: 'Eusoff Hall',
    period: 'May 2021 – Present',
    description:
      'Leading a team of 12 to design various media and merchandise for the sporting season',
    stack: [
      { id: 1, logo: 'photoshop', name: 'Photoshop' },
      { id: 2, logo: 'illustrator', name: 'Illustrator' }
    ]
  },
  {
    logo: 'eusoff',
    title: 'Eusoff Hackers',
    organisation: 'Eusoff Hall',
    period: 'Aug 2020 – May 2021',
    description:
      'Developed an all-in-one Telegram bot for extracurricular groups to mark attendance, track attendance and request for meetings.',
    stack: [
      { id: 1, logo: 'nextjs', name: 'Next.js' },
      { id: 2, logo: 'ts', name: 'Typescript' }
    ]
  },
  {
    logo: 'imda',
    title: 'Digital Clinics for the Merdeka Generation',
    organisation: 'Infocomm and Media Development Authority',
    period: 'Feb 2020 – Apr 2020',
    description:
      'Led workshops to teach senior citizens how to use the Grab app for their daily needs.',
    stack: []
  }
]
