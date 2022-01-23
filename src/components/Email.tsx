import { Fade } from 'react-awesome-reveal'

const Email = () => {
  return (
    <aside className="fixed flex items-center gap-8 -right-16 bottom-40">
      <a
        href="mailto: shem.maleriado@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="font-mono tracking-wide text-gray-700 transition-colors transform rotate-90 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-100"
      >
        shem.maleriado@gmail.com
      </a>
    </aside>
  )
}

export default Email
