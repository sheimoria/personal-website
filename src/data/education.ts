import { Degree } from 'data/dataTypes'

const education: Degree[] = [
  {
    logo: 'nus',
    name: 'National University of Singapore',
    accreditation: 'Bachelor of Computing in Computer Science',
    period: 'Aug 2020 – Present',
    courses: [
      {
        logo: 'givehub',
        code: 'CP2106',
        name: 'Independent Software Development Project (Orbital)',
        period: 'May – Aug 2021',
        url: 'https://drive.google.com/file/d/1aGGiJyPwKbFIPt89lJFg3RLGicotU8C8/view?usp=sharing',
        description: [
          'Developed a social platform for Singaporeans to discover volunteer opportunities and for charities to manage volunteers; achieved the highest level certification (Artemis).'
        ],
        stack: [
          {
            logo: 'typescript',
            name: 'Typescript',
            url: 'https://www.typescriptlang.org'
          },
          { logo: 'reactjs', name: 'React.js', url: 'https://reactjs.org' },
          {
            logo: 'graphql',
            name: 'GraphQL',
            url: 'https://graphql.org'
          },
          {
            logo: 'tailwindcss',
            name: 'TailwindCSS',
            url: 'https://tailwindcss.com'
          },
          {
            logo: 'nodejs',
            name: 'Node.js',
            url: 'https://nodejs.org/en/'
          },
          {
            logo: 'postgresql',
            name: 'PostgreSQL',
            url: 'https://www.postgresql.org'
          }
        ]
      },
      {
        logo: 'nus',
        code: 'TR3301',
        name: 'Summer Programme in Entrepreneurship',
        period: 'July 2021',
        url: 'https://enterprise.nus.edu.sg/education-programmes/summer-programme/',
        description: [
          'Orientated a group of 12 students from South-east Asia and China as a student ambassador',
          "Delivered a product pitch with 4 teammates to a panel of judges from Singapore's startup scene",
          'Received the Temasek Foundation-NUS STEP Entrepreneurship Initiative 2021 scholarship, which is awarded to high-potential individuals with a passion for entrepreneurship'
        ]
      }
    ]
  },
  {
    logo: 'sji',
    name: "St. Joseph's Institution",
    accreditation: 'International Baccalaureate Diploma',
    period: 'Jan 2016 – Oct 2017'
  }
]

export default education
