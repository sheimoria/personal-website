import { education } from 'data/education'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Courses from './Courses'

const Education = () => {
  const degree = education[0]

  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center sm:py-12">
      <Fade cascade duration={500}>
        <h3 id="about-me">Education</h3>
        <div className="flex flex-col gap-8 ">
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
            <h4>{degree.name}</h4>
            <h5>{degree.accreditation}</h5>
            <h6>{degree.period}</h6>
          </div>
          {degree.courses && <Courses courses={degree.courses} />}
        </div>
      </Fade>
    </section>
  )
}

export default Education
