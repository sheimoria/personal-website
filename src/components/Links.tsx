import { Fade } from 'react-awesome-reveal'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'

function Links() {
  return (
    <aside className="fixed flex-col hidden gap-8 bottom-12 sm:flex">
      <Fade cascade direction="up">
        <GitHubIcon url="https://github.com/sheimoria" />
        <LinkedInIcon />
      </Fade>
    </aside>
  )
}

export default Links
