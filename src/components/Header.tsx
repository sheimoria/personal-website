import HeaderMenu from './HeaderMenu'
import Image from 'next/image'
import router from 'next/router'

const Header = () => {
  return (
    <header className="flex flex-col justify-center max-w-6xl min-h-screen px-6 mx-auto">
      <nav className="sticky flex justify-between gap-6 top-6">
        <div className="relative w-full h-6" onClick={() => router.push('/')}>
          <Image
            src="/logo.svg"
            alt="Shem Maleriado"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <HeaderMenu />
        <div className="hidden sm:gap-6 sm:flex">
          <a href="#Education">Education</a>
          <a href="#Experience">Experience</a>
          <a href="#Projects">Projects</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
