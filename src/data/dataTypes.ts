export type Tech = { logo: string; name: string; url: string }

export type Stint = {
  logo: string
  title: string
  organisation: string
  period: string
  url?: string
  description: string
  stack: Tech[]
}

export type Study = {
  logo: string
  name: string
  accreditation: string
  period: string
  courses?: Course[]
}

export type Course = {
  logo: string
  code: string
  name: string
  period: string
  url?: string
  description: string
  stack: Tech[]
}

export type Sidework = {
  logo: string
  title: string
  organisation: string
  period: string
  url?: string
  description: string
  stack: Tech[]
}
