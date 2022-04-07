import Link from './link'
import Tech from './tech'

type Data = {
  image?: string
  url?: string
  logo: string
  links?: Link[]
  heading?: string
  heading2?: string
  heading3?: string
  subheading?: string
  points: string[]
  stack?: Tech[]
}

export default Data
