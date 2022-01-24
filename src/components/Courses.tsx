import { ExternalLinkIcon } from '@heroicons/react/solid'
import { Course } from 'data/dataTypes'
import Image from 'next/image'
import router from 'next/router'
import { useTheme } from 'next-themes'

const Courses = ({ courses }: { courses: Course[] }) => {
  const { theme, setTheme } = useTheme()

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
                src={`${theme == 'dark' ? '/dark' : '/light'}/${
                  course.logo
                }.svg`}
                alt={course.logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
            {course.url && (
              <a href={course.url} target="_blank" rel="noreferrer">
                <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100" />
              </a>
            )}
          </div>
          <div>
            <h6 className="flex flex-col items-start gap-2">
              <span className="px-2 py-1 text-xs tracking-wide text-white bg-gray-800 rounded dark:text-gray-800 dark:bg-gray-100">
                {course.code}
              </span>{' '}
              {course.name}
            </h6>
            <p>{course.period}</p>
          </div>
          <ul className="flex flex-col gap-2 ml-4 list-disc list-outside">
            {course.description.map((point, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-100">
                {point}
              </li>
            ))}
          </ul>
          {course.stack && (
            <div className="flex flex-wrap gap-6">
              {course.stack.map((tech, index) => (
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
    </>
  )
}

export default Courses
