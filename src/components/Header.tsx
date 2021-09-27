import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex flex-col justify-center max-w-6xl min-h-screen px-6 mx-auto">
      <header className="sticky top-8">
        <nav className="flex justify-between gap-4">
          <div className="relative w-full h-6">
            <Image
              src="/logo.svg"
              alt="Shem Maleriado"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="flex gap-6">
            <a href="">Education</a>
            <a href="">Experience</a>
            <a href="">Projects</a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
