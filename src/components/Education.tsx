import { education } from 'data/education'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Courses from './Courses'

const Education = () => {
  const degree = education[0]
  const { theme, setTheme } = useTheme()

  return (
    <section className="flex flex-col justify-center min-h-screen gap-8 py-8 snap-always snap-center sm:py-12">
      <Fade cascade duration={800}>
        <h4 id="about-me">Education</h4>
        <div className="flex flex-col gap-8 ">
          <div className="relative flex-none w-12 h-12">
            <Image
              src={`${theme == 'dark' ? '/dark' : '/light'}/${degree.logo}.svg`}
              alt={degree.logo}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div>
            <h6>{degree.name}</h6>
            <h6>{degree.accreditation}</h6>
            <p>{degree.period}</p>
          </div>
          {degree.courses && <Courses courses={degree.courses} />}
        </div>
      </Fade>
    </section>
  )
}

export default Education
