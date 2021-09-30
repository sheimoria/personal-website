import Image from 'next/image'
import router from 'next/router'
import tech from 'data/tech'

const Intro = () => {
  return (
    <div className="flex flex-col gap-8 px-8 sm:flex-row sm:px-0">
      <div className="flex flex-col gap-6">
        <h1 className="px-0">Hi there!</h1>
        <p>
          I&apos;m Shem, a computer science sophomore who enjoys making fast and
          beautiful things on the web. Here are some of the frameworks that
          I&apos;m currently having fun tinkering with:
        </p>
        <div className="flex gap-8">
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
          I&apos;ve been exploring these two interests of mine below! But as
          with everything, there&apos;s much to learn and do, so feel free to
          connect with me if there&apos;s something we can discover together
          &#128522;
        </p>
        <p>Have a great day!</p>
      </div>
    </div>
  )
}

export default Intro
