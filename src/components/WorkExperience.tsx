import { Tab } from '@headlessui/react'
import { ExternalLinkIcon } from '@heroicons/react/solid'
import { workExperiences } from 'data/workExperiences'
import Image from 'next/image'
import router from 'next/router'
import { Fade } from 'react-awesome-reveal'

const WorkExperience = () => {
  return (
    <Fade cascade duration={500} triggerOnce fraction={1}>
      <h4>Work Experience</h4>
      <Tab.Group
        vertical
        as="section"
        className="flex gap-8 p-8 border border-gray-200 rounded dark:border-gray-700"
      >
        <Tab.List as="nav" className="flex flex-col gap-3">
          {workExperiences.map((workExperience, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                ` ${
                  selected ? ' bg-gray-100 rounded dark:bg-gray-800' : '  '
                } w-36 flex text-gray-700 font-medium dark:text-gray-200 px-6 py-3 hover:text-gray-800 dark:hover:text-gray-100 transition`
              }
            >
              {workExperience.organisation}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {workExperiences.map((workExperience, index) => (
            <Tab.Panel key={index} as="article" className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-6">
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
                    <ExternalLinkIcon className="w-6 h-6 text-gray-700 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100" />
                  </a>
                )}
              </div>
              <div>
                <h5>
                  {workExperience.title}, {workExperience.organisation}
                </h5>
                <h6>{workExperience.period}</h6>
              </div>
              <p>{workExperience.description}</p>
              {workExperience.stack && (
                <div className="flex flex-wrap gap-6">
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
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Fade>
  )
}

export default WorkExperience
