import Link from './link'

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
  stack?: { logo: string; name: string; url: string }[]
}

export default Data
