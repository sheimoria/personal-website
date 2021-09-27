import Image from 'next/image'

type EducationArticleProps = {
  logo: string
  heading: string
  subheading: string
  period: string
  description?: string
}

const EducationArticle = ({
  logo,
  heading,
  subheading,
  period,
  description
}: EducationArticleProps) => {
  return (
    <article className="flex items-center flex-1 gap-6 p-8 border border-gray-200 rounded-md">
      <div className="relative w-12 h-full">
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
      </div>
    </article>
  )
}

export default EducationArticle
