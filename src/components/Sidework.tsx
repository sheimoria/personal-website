import { ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import router from 'next/router'
import sidework from 'data/sidework'

const Sidework = () => {
  return (
    <section id="sidework">
      <h1>Sidework</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {sidework.map((sidework, index) => (
          <article key={index}>
            <div className="flex items-center justify-between gap-7">
              <div className="relative w-full h-8">
                <Image
                  src={`/${sidework.logo}.svg`}
                  alt={sidework.logo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </div>
              {sidework.url && (
                <a href={sidework.url} target="_blank" rel="noreferrer">
                  <ExternalLinkIcon className="w-6 h-6 text-gray-800 transition-colors cursor-pointer hover:text-gray-900" />
                </a>
              )}
            </div>

            <div>
              <h2>{sidework.title}</h2>
              <h3>{sidework.organisation}</h3>
              <h4>{sidework.period}</h4>
            </div>
            <p>{sidework.description}</p>
            {sidework.stack && (
              <div className="flex flex-wrap gap-6">
                {sidework.stack.map((tech, index) => (
                  <div
                    key={index}
                    onClick={() => router.push(tech.url)}
                    className="relative w-6 h-6 cursor-pointer"
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
      </div>
    </section>
  )
}

export default Sidework
