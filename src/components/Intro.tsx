import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

const Intro = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center min-h-screen gap-8 sm:flex-row">
      <Fade duration={800}>
        <div className="flex flex-col gap-8">
          <h4>Hi there!</h4>
          <p>
            I&apos;m Shem, a computer science sophomore who enjoys making fast,
            beautiful and useful solutions. Besides development, I also have a
            knack for design; check out how I&apos;ve been exploring these two
            interests of mine below! But of course, there&apos;s much more to
            learn and do, so do connect with me if there&apos;s an opportunity
            for us to discover something together!
          </p>
          <p>Have a great day ✌️</p>
        </div>
        <div className="relative flex-none w-40 h-40 overflow-hidden rounded-full">
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
