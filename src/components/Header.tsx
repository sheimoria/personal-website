import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import HeaderMenu from 'components/HeaderMenu'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import router from 'next/router'
import { Fade } from 'react-awesome-reveal'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 z-10 flex items-center justify-between w-full gap-8 p-8 bg-white/50 backdrop-filter backdrop-blur sm:px-12 sm:pt-12 sm:pb-8 dark:bg-gray-900/50">
      <Fade direction="down" duration={500}>
        <div
          className="relative w-10 h-10 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image
            src={theme == 'dark' ? '/logo-dark.svg' : '/logo.svg'}
            alt="Shem"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            className="filter-gray dark:filter-white"
          />
        </div>
        {/* Desktop */}
        <nav className="hidden sm:gap-8 sm:items-center sm:flex">
          <Fade cascade damping={0.4} direction="down" duration={400}>
            <a
              href="#about"
              className="text-gray-800 transition-colors hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
            >
              About Me
            </a>
            <a
              href="#tech-projects"
              className="text-gray-800 transition-colors hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
            >
              Tech Projects
            </a>
            <a
              /* href="#designs" */
              className="text-gray-800 transition-colors hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
            >
              Designs
            </a>
            <a
              /* href="#artworks" */
              className="text-gray-800 transition-colors hover:text-gray-900 dark:text-gray-100 dark:hover:text-white"
            >
              Artworks
            </a>
            <a
              href="https://drive.google.com/file/d/1qwqvHZsvSc15-skze3NwWs26OiqZc4tM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 text-gray-800 transition-colors bg-gray-100 rounded hover:text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              Resume
            </a>
            {/* <button className="p-3 text-gray-800 transition-colors bg-gray-100 rounded hover:text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 dark:hover:text-white">
              {theme != 'dark' ? (
                <MoonIcon
                  onClick={() => setTheme('dark')}
                  className="w-5 h-5"
                />
              ) : (
                <SunIcon
                  onClick={() => setTheme('light')}
                  className="w-5 h-5"
                />
              )}
            </button> */}
          </Fade>
          {/* Mobile */}
        </nav>
      </Fade>
      <HeaderMenu />
    </header>
  )
}

export default Header
