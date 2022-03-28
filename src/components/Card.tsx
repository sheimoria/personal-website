import {
  DocumentTextIcon,
  ExternalLinkIcon,
  PhotographIcon,
  PlayIcon
} from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import classNames from 'util/classNames'
import Data from 'util/data'
import Link from 'util/link'

type CardProps = {
  size: 'large' | 'small'
  imagePosition: 'left' | 'right'
  data: Data
}

function Card({ size, imagePosition, data }: CardProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <article
      className={classNames(
        size == 'large'
          ? imagePosition == 'left'
            ? 'lg:flex-row items-center'
            : 'lg:flex-row-reverse items-center'
          : '',
        'p-8 rounded-xl flex-col bg-white dark:bg-gray-800 flex gap-6'
      )}
    >
      {/* Image */}
      <div
        className={classNames(
          size == 'large'
            ? imagePosition == 'left'
              ? 'lg:mt-0 lg:-ml-12 lg:w-2/5'
              : 'lg:mt-0 lg:-mr-12 lg:w-2/5'
            : '',
          '-mt-12 aspect-4/3 w-full relative rounded-lg flex-none overflow-hidden cursor-pointer'
        )}
      >
        <Image
          src={`/${data.image}`}
          alt={data.image}
          layout="fill"
          objectFit="cover"
        />
        {data.url && (
          <div
            onClick={() => window.open(data.url, '_ blank')}
            className="absolute flex items-center gap-2 hover:backdrop-brightness-50 rounded-lg text-gray-100 hover:text-white justify-center inset-0 opacity-0 hover:opacity-100 transition"
          >
            Visit Website
            <ExternalLinkIcon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
          {/* Logo */}
          <Fade direction="up" duration={800} triggerOnce>
            <div className="relative h-8 w-36">
              <Image
                src={`${theme == 'light' ? '/light' : '/dark'}/${
                  data.logo
                }.svg`}
                alt={data.logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
          </Fade>
          {/* Links */}
          {data.links && (
            <div className="flex gap-4 items-center flex-wrap">
              <Fade cascade direction="up" duration={600} triggerOnce>
                {data.links.map((link) => linkToIcon(link))}
              </Fade>
            </div>
          )}
        </div>
        <Fade duration={800} triggerOnce>
          {/* Headings */}
          <div className="flex flex-col gap-1">
            <h6>
              {data.heading && data.heading + ' @'} {data.heading2}
              {data.heading3 && ', ' + data.heading3}
            </h6>
            <p>{data.subheading}</p>
          </div>
          {/* Description */}
          <ul className="flex flex-col gap-2 ml-4 list-disc list-outside">
            {data.points.map((point, index) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Fade>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4">
          <Fade cascade direction="down" duration={600} triggerOnce>
            {data.stack?.map((tech) => (
              <button
                key={tech.name}
                onClick={() => window.open(tech.url, '_blank')}
                className="flex items-center flex-none gap-2 font-mono text-sm group px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 dark:bg-gray-700 text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white transition-colors"
              >
                <div className="relative flex-none w-4 h-4 group-hover:-rotate-12 transition-transform">
                  <Image
                    src={`${theme == 'light' ? '/light' : '/dark'}/${
                      tech.logo
                    }.svg`}
                    alt={tech.name}
                    layout="fill"
                  />
                </div>
                {tech.name}
              </button>
            ))}
          </Fade>
        </div>
      </div>
    </article>
  )
}

function linkToIcon(link: Link) {
  return (
    <button
      onClick={() => window.open(link.url, '_blank')}
      className="btn-hollow group"
    >
      {link.type == 'Repo' ? (
        <GitHubIcon url={link.url} />
      ) : link.type == 'Docs' || link.type == 'Proposal' ? (
        <DocumentTextIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      ) : link.type == 'Poster' ? (
        <PhotographIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      ) : link.type == 'Recommendation' ? (
        <DocumentTextIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      ) : link.type == 'Video' ? (
        <PlayIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      ) : (
        <ExternalLinkIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
      )}
      {link.type}
    </button>
  )
}

function GitHubIcon({ url }: { url: string }) {
  return (
    <svg
      onClick={() => window.open(url, '_blank')}
      fill="currentColor"
      viewBox="0 -1 18 18"
      className="w-5 h-5 group-hover:-rotate-12 transition-transform"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

export default Card
