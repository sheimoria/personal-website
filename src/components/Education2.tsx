import { Tab } from '@headlessui/react'
import { education } from 'data/education'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Courses from './Courses'

const Education = () => {
  return (
    <Fade cascade duration={500}>
      <h4>Education</h4>
      <Tab.Group
        vertical
        as="section"
        className="flex gap-8 p-8 border border-gray-200 rounded dark:border-gray-700"
      >
        <Tab.List as="nav" className="flex flex-col gap-3">
          {education.map((degree, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                ` ${
                  selected ? ' bg-gray-100 rounded dark:bg-gray-800' : '  '
                } w-36 flex truncate text-gray-700 font-medium dark:text-gray-200 px-6 py-3 hover:text-gray-800 dark:hover:text-gray-100 transition`
              }
            >
              {degree.accreditation}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="flex-1">
          {education.map((degree, index) => (
            <Tab.Panel key={index} as="article" className="flex flex-col gap-6">
              <div className="relative flex-none w-12 h-12">
                <Image
                  src={`/${degree.logo}.svg`}
                  alt={degree.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  className="filter-gray dark:filter-white"
                />
              </div>
              <div>
                <h5>{degree.name}</h5>
                <h6>{degree.accreditation}</h6>
                <p>{degree.period}</p>
              </div>
              {degree.courses && <Courses courses={degree.courses} />}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Fade>
  )
}

export default Education
