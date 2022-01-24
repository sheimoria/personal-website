import { ExternalLinkIcon } from '@heroicons/react/solid'
import { Course } from 'data/dataTypes'
import Image from 'next/image'
import router from 'next/router'

const Courses = ({ courses }: { courses: Course[] }) => {
  return (
    <>
      <h4>Courses</h4>
      {courses.map((course, index) => (
        <article
          key={index}
          className="flex flex-col gap-8 p-8 bg-gray-100 rounded dark:bg-gray-800"
        >
          <div className="flex items-center justify-between gap-8">
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
                <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
              </a>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs tracking-wide text-white bg-gray-800 rounded dark:text-gray-800 dark:bg-gray-100">
                {course.code}
              </span>{' '}
              {course.name}
            </h5>
            <h6>{course.period}</h6>
          </div>
          <p>{course.description}</p>
          {course.stack && (
            <div className="flex flex-wrap gap-8">
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
        </article>
      ))}
    </>
  )
}

export default Courses
