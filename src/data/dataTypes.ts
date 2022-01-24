export type Tech = { logo: string; name: string; url: string }

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
  description: string[]
  stack?: Tech[]
}

export type Experience = {
  logo: string
  position: string
  organisation: string
  period: string
  url?: string
  description: string[]
  stack: Tech[]
}

export type Extracurricular = {
  logo: string
  position?: string
  event: string
  organisation: string
  period: string
  url?: string
  description: string[]
  stack?: Tech[]
}
