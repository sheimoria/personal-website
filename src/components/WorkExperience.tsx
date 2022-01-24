import { ExternalLinkIcon } from '@heroicons/react/solid'
import { workExperiences } from 'data/workExperiences'
import Image from 'next/image'
import router from 'next/router'
import { Fade } from 'react-awesome-reveal'

const WorkExperience = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center sm:py-12">
      <Fade cascade duration={500}>
        <h3>Work Experience</h3>
        {workExperiences.map((workExperience, index) => (
          <article
            key={index}
            className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
          >
            <div className="flex items-center justify-between gap-8">
              <div className="relative w-full h-8">
                <Image
                  src={`/${workExperience.logo}.svg`}
                  alt={workExperience.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  className="filter-gray dark:filter-white"
                />
              </div>
              {workExperience.url && (
                <a href={workExperience.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
                </a>
              )}
            </div>
            <div>
              <h4>
                {workExperience.title}, {workExperience.organisation}
              </h4>
              <h5>{workExperience.period}</h5>
            </div>
            <ul className="flex flex-col gap-2 ml-4 list-disc list-outside">
              {workExperience.description.map((point, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-100">
                  {point}
                </li>
              ))}
            </ul>
            {workExperience.stack && (
              <div className="flex flex-wrap gap-8">
                {workExperience.stack.map((tech, index) => (
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
                      className="filter-gray dark:filter-white"
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </Fade>
    </section>
  )
}

export default WorkExperience
