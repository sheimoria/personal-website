import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <footer className="flex justify-center pb-8 sm:pb-12">
      <a
        href="https://github.com/sheimoria/portfolio"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 font-mono text-gray-300 sm:gap-3 hover:text-gray-400 dark:text-gray-600 dark:hover:text-gray-500"
      >
        Designed and developed with
        <HeartIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        by Shem
      </a>
    </footer>
  )
}

export default Footer
