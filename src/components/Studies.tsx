import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import router from 'next/router'
import studies from 'data/studies'

const Studies = () => {
  return (
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
                    <div className="flex items-center justify-between gap-7">
                      <div className="relative w-full h-8">
                        <Image
                          src={`/${course.logo}.svg`}
                          alt={course.logo}
                          layout="fill"
                          objectFit="contain"
                          objectPosition="left"
                        />
                      </div>
                      {course.url && (
                        <a href={course.url} target="_blank" rel="noreferrer">
                          <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer hover:text-gray-900" />
                        </a>
                      )}
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
  )
}

export default Studies
