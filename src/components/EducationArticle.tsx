import Image from 'next/image'
import { ReactNode } from 'react'

type EducationArticleProps = {
  logo: string
  heading: string
  subheading: string
  period: string
  description?: string
  children?: ReactNode
}

const EducationArticle = ({
  logo,
  heading,
  subheading,
  period,
  description,
  children
}: EducationArticleProps) => {
  return (
    <article className="flex items-center flex-1 gap-6 p-6 border border-gray-200 rounded-lg shadow">
      <div className="relative flex-none w-12 h-16">
        <Image
          src={`/${logo}.svg`}
          alt={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <h3>{heading}</h3>
          <h4>{subheading}</h4>
          <h5>{period}</h5>
        </div>
        {description && <p>{description}</p>}
        {children}
      </div>
    </article>
  )
}

export default EducationArticle
