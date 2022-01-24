import { ExternalLinkIcon } from '@heroicons/react/solid'
import experience from 'data/experience'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import router from 'next/router'
import { Fade } from 'react-awesome-reveal'

const WorkExperience = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center">
      <Fade cascade duration={800}>
        <h4>Work Experience</h4>
        {experience.map((experience, index) => (
          <article
            key={index}
            className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
          >
            <div className="flex items-center justify-between gap-8">
              <div className="relative w-full h-8">
                <Image
                  src={`${theme == 'dark' ? '/dark' : '/light'}/${
                    experience.logo
                  }.svg`}
                  alt={experience.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              {experience.url && (
                <a href={experience.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
                </a>
              )}
            </div>
            <div>
              <h6>{experience.title}x</h6>
              <p>{experience.period}</p>
            </div>
            <ul className="flex flex-col gap-2 ml-4 list-disc list-outside">
              {experience.description.map((point, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-100">
                  {point}
                </li>
              ))}
            </ul>
            {experience.stack && (
              <div className="flex flex-wrap gap-8">
                {experience.stack.map((tech, index) => (
                  <div
                    key={index}
                    className="relative w-6 h-6 cursor-pointer"
                    onClick={() => router.push(tech.url)}
                  >
                    <Image
                      src={`${theme == 'dark' ? '/dark' : '/light'}/${
                        tech.logo
                      }.svg`}
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
      </Fade>
    </section>
  )
}

export default WorkExperience
