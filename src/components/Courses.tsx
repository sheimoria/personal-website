import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import { Course } from 'data/dataTypes'
import { Fragment } from 'react'
import Image from 'next/image'
import router from 'next/router'

const Courses = ({ courses }: { courses: Course[] }) => {
  return (
    <Disclosure as={Fragment} defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button
            as="div"
            className="flex items-center justify-between gap-6 font-medium text-gray-700 transition-colors dark:hover:text-gray-100 dark:text-gray-200 hover:text-gray-800"
          >
            Courses
            <ChevronDownIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } className="w-6 h-6 text-gray-700 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100" `}
            />
          </Disclosure.Button>
          <Disclosure.Panel as="div" className="flex flex-col gap-6">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="relative w-full h-8">
                    <Image
                      src={`/${course.logo}.svg`}
                      alt={course.logo}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="left"
                      className="filter-gray dark:filter-white"
                    />
                  </div>
                  {course.url && (
                    <a href={course.url} target="_blank" rel="noreferrer">
                      <ExternalLinkIcon className="w-6 h-6 text-gray-700 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100" />
                    </a>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h5 className="flex items-center gap-2">
                    <span className="px-2 py-1 text-xs tracking-wide text-white bg-gray-700 rounded dark:text-gray-900 dark:bg-gray-200">
                      {course.code}
                    </span>{' '}
                    {course.name}
                  </h5>
                  <h6>{course.period}</h6>
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
                          className="filter-gray dark:filter-white"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Courses
