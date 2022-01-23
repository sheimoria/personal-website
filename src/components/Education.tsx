import { Tab } from '@headlessui/react'
import { education } from 'data/education'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Courses from './Courses'

const Education = () => {
  const degree = education[0]

  return (
    <Fade cascade duration={500} triggerOnce>
      <h4 id="about-me">Education</h4>
      <article className="flex flex-col gap-6 p-8 border border-gray-200 rounded dark:border-gray-700">
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
      </article>
    </Fade>
  )
}

export default Education
