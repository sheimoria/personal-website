import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import extracurriculars from 'data/extracurriculars'
import { Tech } from 'data/dataTypes'
import { Fade } from 'react-awesome-reveal'
import { useTheme } from 'next-themes'

const Extracurriculars = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center">
      <Fade cascade duration={800}>
        <h4 id="extracurriculars">Extracurriculars</h4>
        {extracurriculars.map((extracurricular, index) => (
          <article
            key={index}
            className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="relative w-full h-8">
                <Image
                  src={`${theme == 'dark' ? '/dark' : '/light'}/${
                    extracurricular.logo
                  }.svg`}
                  alt={extracurricular.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              {extracurricular.url && (
                <a href={extracurricular.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
                </a>
              )}
            </div>
            <div>
              <h6>{extracurricular.position}</h6>
              <h6>
                {extracurricular.event}, {extracurricular.organisation}
              </h6>
              <p>{extracurricular.period}</p>
            </div>
            <ul className="flex flex-col gap-2 ml-4 list-disc list-outside">
              {extracurricular.description.map((point, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-100">
                  {point}
                </li>
              ))}
            </ul>
            {extracurricular.stack && (
              <div className="flex flex-wrap gap-6">
                {extracurricular.stack.map((tech: Tech, index: number) => (
                  <a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center flex-none gap-3 font-mono"
                  >
                    <div className="relative flex-none w-6 h-6">
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
                    {tech.name}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </Fade>
    </section>
  )
}

export default Extracurriculars
