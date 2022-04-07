import technologies from 'data/technologies'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

const Intro = () => {
  const { theme, setTheme } = useTheme()

  return (
    <section className="flex flex-col-reverse items-center justify-center min-h-screen gap-12 lg:flex-row pt-32 sm:pt-0">
      <Fade duration={800}>
        <div className="flex flex-col gap-6">
          <h4>Hi there!</h4>
          <p className="px-8 sm:px-0">
            I&apos;m Shem, a computer science sophomore at the National
            University of Singapore.
            <br />
            <br />
            As an aspiring visual artist <i>turned</i> aspiring software
            engineer, I enjoy using my knack for both design and technology to
            build innovative, responsive and elegant solutions. Check out how
            I&apos;ve been doing so below!
            <br />
            <br />
            But of course, there&apos;s much to discover and learn, so please do
            connect with me if there&apos;s an opportunity for us to develop
            something together! Here are some technologies which I&apos;m
            currently tinkering with:
          </p>
          <div className="flex flex-wrap gap-4 xl:w-4/5 px-8 sm:px-0">
            <Fade cascade direction="down" duration={600} triggerOnce>
              {technologies.map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => window.open(tech.url, '_blank')}
                  className="flex items-center flex-none gap-2 font-mono text-sm group px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white transition-colors"
                >
                  <div className="relative flex-none w-4 h-4 group-hover:-rotate-12 transition-transform">
                    <Image
                      src={`${theme == 'light' ? '/light' : '/dark'}/${
                        tech.logo
                      }.svg`}
                      alt={tech.name}
                      layout="fill"
                    />
                  </div>
                  {tech.name}
                </button>
              ))}
            </Fade>
          </div>
          <p className="px-8 sm:px-0">Have a great day ✌️</p>
        </div>
        <div className="relative flex-none w-52 h-52 overflow-hidden rounded-full">
          <Image
            src="/profile.png"
            alt="Profile"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </Fade>
    </section>
  )
}

export default Intro
