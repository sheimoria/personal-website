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
        <section>
          <h1>Studies</h1>
          <div className="flex flex-col gap-7 sm:flex-row">
            {studies.map((study) => (
              <article key={study.id}>
                <div className="flex items-center gap-7">
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
      </main>
    </>
  )
}

export default Home

{
  /* <main className="flex flex-col max-w-6xl gap-12 p-6 mx-auto">
        <Section heading="Education">
          <EducationArticle
            logo="nus"
            heading="Bachelor of Computing in Computer Science"
            subheading="National University of Singapore"
            period="August 2020 — Present"
          >
            <Article heading="Orbital" />
          </EducationArticle>
          <EducationArticle
            logo="sji"
            heading="International Baccalaureate Diploma"
            subheading="St. Joseph's Institution"
            period="Jan 2016 — Nov 2017"
          />
        </Section>
        <Section heading="Experience">
          <Article
            logo="carfix"
            heading="Frontend Developer Intern"
            period="May 2021 — Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum lectus mauris ultrices eros in cursus turpis massa.
              Porta nibh venenatis cras sed felis eget velit aliquet."
            stack={['nextjs', 'ts']}
          />
          <Article
            logo="grab"
            heading="Marketing Assistant"
            period="Jan — Jun 2020"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum lectus mauris ultrices eros in cursus turpis massa.
              Porta nibh venenatis cras sed felis eget velit aliquet."
            stack={['html', 'css', 'js']}
          />
        </Section>
        <Section heading="Projects">
          <div>hi</div>
        </Section>
      </main> */
}

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
