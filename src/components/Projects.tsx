import { ExternalLinkIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import router from 'next/router'
import { projects } from 'data/projects'
import { Tech } from 'data/dataTypes'

const Projects = () => {
  return (
    <>
      <h4 id="tech-projects">Projects</h4>
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col gap-6 p-8 border border-gray-200 rounded dark:border-gray-700"
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
                  <ExternalLinkIcon className="link-icon" />
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
      </section>
    </>
  )
}

export default Projects
