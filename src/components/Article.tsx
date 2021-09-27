import Image from 'next/image'

type ArticleProps = {
  logo: string
  heading: string
  subheading?: string
  period: string
  description?: string
  stack?: string[]
}

const Article = ({
  logo,
  heading,
  subheading,
  period,
  description,
  stack
}: ArticleProps) => {
  return (
    <article className="flex flex-col flex-1 gap-6 p-8 border border-gray-200 rounded-md">
      <div className="relative w-full h-10">
        <Image
          src={`/${logo}.svg`}
          alt={logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div>
        <h3>{heading}</h3>
        {subheading && <h4>{subheading}</h4>}
        <h5>{period}</h5>
      </div>
      {description && <p>{description}</p>}
      {stack && (
        <div className="flex flex-wrap gap-6">
          {stack?.map((tech, index) => (
            <div key={index} className="relative w-6 h-6">
              <Image
                src={`/${tech}.svg`}
                alt={tech}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  )
}

export default Article
