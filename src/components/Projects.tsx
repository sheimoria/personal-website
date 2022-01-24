import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import router from 'next/router'
import { projects } from 'data/projects'
import { Tech } from 'data/dataTypes'
import { Fade } from 'react-awesome-reveal'

const Projects = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 sm:py-12 snap-always snap-center">
      <Fade cascade duration={500}>
        <h3 id="tech-projects">Projects</h3>
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="relative w-full h-8">
                <Image
                  src={`/${project.logo}.svg`}
                  alt={project.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  className="filter-gray dark:filter-white"
                />
              </div>
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
                </a>
              )}
            </div>
            <div>
              <h5>{project.title}</h5>
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

export default Projects
