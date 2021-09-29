import Head from 'next/head'
import Header from 'components/Header'
import Image from 'next/image'
import type { NextPage } from 'next'
import router from 'next/router'
import sidework from 'data/sidework'
import stints from 'data/stints'
import studies from 'data/studies'
import techs from 'data/tech'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shem Maleriado</title>
      </Head>
      <Header />
      <main>
        <div className="h-14" />
        <div className="flex flex-col max-w-3xl gap-5 pb-7">
          <h1>Hi there!</h1>
          <p>
            I&apos;m Shem, a computer science sophomore who enjoys making fast
            and beautiful things on the web. Here&apos;s my current favourite
            technologies to tinker with:
          </p>
          <div className="flex gap-7">
            {techs.map((tech, index) => (
              <div
                key={index}
                className="relative w-6 h-6 cursor-pointer"
                onClick={() => router.push(tech.url)}
              >
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
          <p>
            Besides technology, I also have a knack for design; check out how
            I&apos;ve been exploring these two interests of mine below! But as
            with everything, there&apos;s so much more to learn and do, so feel
            free to connect with me if there&apos;s something we can discover
            together!
          </p>
          <p>Have a great day!</p>
        </div>
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
                    {stint.stack.map((tech, index) => (
                      <div key={index} className="relative w-6 h-6">
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
                      <div
                        key={index}
                        className="flex flex-col gap-5 pt-5 border-t border-gray-200"
                      >
                        <div className="relative w-full h-10">
                          <Image
                            src={`/${course.logo}.svg`}
                            alt={course.logo}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="left"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h2 className="flex items-center gap-2">
                            <span className="px-2 py-1 text-xs tracking-wide text-white bg-gray-800 rounded">
                              {course.code}
                            </span>{' '}
                            {course.name}
                          </h2>
                          <h3>{course.period}</h3>
                        </div>
                        <p>{course.description}</p>
                        {course.stack && (
                          <div className="flex flex-wrap gap-6">
                            {course.stack.map((tech, index) => (
                              <div
                                key={index}
                                className="relative w-6 h-6 cursor-pointer"
                                onClick={() => router.push(tech.url)}
                              >
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
                      </div>
                    ))}
                  </>
                )}
              </article>
            ))}
          </div>
        </section>
        <section id="sidework">
          <h1>Sidework</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {sidework.map((sidework, index) => (
              <article key={index}>
                <div className="relative w-full h-8">
                  <Image
                    src={`/${sidework.logo}.svg`}
                    alt={sidework.logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                  />
                </div>
                <div>
                  <h2>{sidework.title}</h2>
                  <h3>{sidework.organisation}</h3>
                  <h4>{sidework.period}</h4>
                </div>
                <p>{sidework.description}</p>
                {sidework.stack && (
                  <div className="flex flex-wrap gap-6">
                    {sidework.stack.map((tech, index) => (
                      <div
                        key={index}
                        onClick={() => router.push(tech.url)}
                        className="relative w-6 h-6 cursor-pointer"
                      >
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
