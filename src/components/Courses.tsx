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
          <Disclosure.Button className="flex items-center justify-between gap-6 px-4 py-3 font-medium text-gray-800 transition-colors bg-gray-100 rounded shadow cursor-pointer hover:text-gray-900">
            Courses
            <ChevronDownIcon
              className={`${open ? 'transform rotate-180' : ''} w-6 h-6`}
            />
          </Disclosure.Button>
          <Disclosure.Panel as="div" className="flex flex-col gap-6">
            {courses.map((course, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex items-center justify-between gap-8">
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
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Courses
