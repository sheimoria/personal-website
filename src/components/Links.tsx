import { Fade } from 'react-awesome-reveal'
import GitHub from './GitHubIcon'
import LinkedIn from './LinkedInIcon'

function Links() {
  return (
    <aside className="fixed flex-col hidden gap-8 bottom-12 sm:flex">
      <Fade cascade direction="up">
        <GitHub url="https://github.com/sheimoria" />
        <LinkedIn />
      </Fade>
    </aside>
  )
}

export default Links
