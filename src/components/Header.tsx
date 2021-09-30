import HeaderMenu from 'components/HeaderMenu'
import Image from 'next/image'
import router from 'next/router'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="relative w-full h-6" onClick={() => router.push('/')}>
          <Image
            src="/logo.svg"
            alt="Shem Maleriado"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        {/* Mobile */}
        <HeaderMenu />
        {/* Desktop */}
        <div className="hidden sm:gap-6 sm:items-center sm:flex">
          <a href="#stints">Stints</a>
          <a href="#studies">Studies</a>
          <a href="#sidework">Sidework</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
