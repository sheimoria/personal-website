import { Fade } from 'react-awesome-reveal'
import classNames from 'util/classNames'
import Data from 'util/data'
import Card from './Card'

type CardsProps = {
  size: 'large' | 'small'
  heading: string
  data: Data[]
}

function Cards({ size, heading, data }: CardsProps) {
  return (
    <>
      <h4 id={heading.toLowerCase()}>{heading}</h4>
      <div
        className={classNames(
          size == 'large'
            ? 'flex flex-col lg:gap-y-8 lg:pt-0'
            : 'grid grid-cols-1 lg:grid-cols-2',
          'gap-y-12 pt-4 gap-8'
        )}
      >
        {data.map((data, index) => (
          <Card
            key={data.heading}
            size={size}
            imagePosition={index % 2 == 0 ? 'left' : 'right'}
            data={data}
          />
        ))}
      </div>
    </>
  )
}

export default Cards
