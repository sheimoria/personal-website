export type Tech = { logo: string; name: string; url: string }

export type WorkExperience = {
  logo: string
  title: string
  organisation: string
  period: string
  url?: string
  description: string
  stack: Tech[]
}

export type Degree = {
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

export type Project = {
  logo: string
  title: string
  organisation: string
  period: string
  url?: string
  description: string
  stack: Tech[]
}
