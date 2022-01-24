import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import router from 'next/router'
import { projects } from 'data/projects'
import { Tech } from 'data/dataTypes'
import { Fade } from 'react-awesome-reveal'
import { useTheme } from 'next-themes'

const Projects = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center">
      <Fade cascade duration={800}>
        <h4 id="tech-projects">Projects</h4>
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="relative w-full h-8">
                <Image
                  src={`${theme == 'dark' ? '/dark' : '/light'}/${
                    project.logo
                  }.svg`}
                  alt={project.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
                </a>
              )}
            </div>
            <div>
              <h6>{project.title}</h6>
              <h6>{project.organisation}</h6>
              <p>{project.period}</p>
            </div>
            <p>{project.description}</p>
            {project.stack && (
              <div className="flex flex-wrap gap-6">
                {project.stack.map((tech: Tech, index: number) => (
                  <div
                    key={index}
                    onClick={() => router.push(tech.url)}
                    className="relative w-6 h-6 cursor-pointer"
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

export default Projects
