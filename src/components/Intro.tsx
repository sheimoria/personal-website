import Image from 'next/image'
import router from 'next/router'
import tech from 'data/tech'

const Intro = () => {
  return (
    <div className="flex flex-col max-w-xl gap-5 pb-7">
      <h1>Hi there!</h1>
      <p>
        I&apos;m Shem, a computer science sophomore who enjoys making fast and
        beautiful things on the web. Here are my current favourite technologies
        to tinker with:
      </p>
      <div className="flex gap-7">
        {tech.map((tech, index) => (
          <div
            key={index}
            className="relative w-6 h-6 cursor-pointer"
            onClick={() => router.push(tech.url)}
          >
            <Image
              src={`/${tech.logo}.svg`}
              alt={tech.name}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        ))}
      </div>
      <p>
        Besides technology, I also have a knack for design; check out how
        I&apos;ve been exploring these two interests of mine below! But as with
        everything, there&apos;s so much more to learn and do, so feel free to
        connect with me if there&apos;s something we can discover together!
      </p>
      <p>Have a great day!</p>
    </div>
  )
}

export default Intro
