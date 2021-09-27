import { ReactNode } from 'react'

type SectionProps = {
  heading: string
  children: ReactNode
}

const Section = ({ heading, children }: SectionProps) => {
  return (
    <section id={heading} className="flex flex-col gap-8">
      <h2>{heading}</h2>
      <div className="flex flex-col gap-8 sm:flex-row">{children}</div>
    </section>
  )
}

export default Section
