import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import HeaderMenu from 'components/HeaderMenu'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import router from 'next/router'
import { Fade } from 'react-awesome-reveal'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header>
      <nav className="flex items-center justify-between gap-6">
        <Fade direction="down" duration={400} triggerOnce>
          <div
            className="relative w-10 h-10 cursor-pointer"
            onClick={() => router.push('/')}
          >
            <Image
              src="/logo.svg"
              alt="Shem"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          {/* Mobile */}
          <HeaderMenu />
          {/* Desktop */}
          <div className="hidden sm:gap-8 sm:items-center sm:flex">
            <Fade
              cascade
              damping={0.3}
              direction="down"
              duration={400}
              triggerOnce
            >
              <a
                href="#about"
                className="text-gray-700 transition-colors hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
              >
                About Me
              </a>
              <a
                href="#tech-projects"
                className="text-gray-700 transition-colors hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
              >
                Tech Projects
              </a>
              <a
                href="#designs"
                className="text-gray-700 transition-colors hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
              >
                Designs
              </a>
              <a
                href="#artworks"
                className="text-gray-700 transition-colors hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
              >
                Artworks
              </a>
              <button className="px-4 py-2 text-gray-700 transition-colors bg-gray-100 rounded hover:text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100">
                Resume
              </button>
              <button className="p-2.5 text-gray-700 bg-gray-100 rounded hover:text-gray-800 hover:bg-gray-200 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100">
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
              </button>
            </Fade>
          </div>
        </Fade>
      </nav>
    </header>
  )
}

export default Header
