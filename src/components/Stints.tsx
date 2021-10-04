import { ExternalLinkIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import router from 'next/router'
import stints from 'data/stints'

const Stints = () => {
  return (
    <>
      <h1 id="stints">Stints</h1>
      <section>
        {stints.map((stint, index) => (
          <article key={index}>
            <div className="flex items-center justify-between gap-6">
              <div className="relative w-full h-8">
                <Image
                  src={`/${stint.logo}.svg`}
                  alt={stint.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              {stint.url && (
                <a href={stint.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="link-icon" />
                </a>
              )}
            </div>
            <div>
              <h2>{stint.title}</h2>
              <h3>{stint.organisation}</h3>
              <h4>{stint.period}</h4>
            </div>
            <p>{stint.description}</p>
            {stint.stack && (
              <div className="flex flex-wrap gap-6">
                {stint.stack.map((tech, index) => (
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
            )}
          </article>
        ))}
      </section>
    </>
  )
}

export default Stints
