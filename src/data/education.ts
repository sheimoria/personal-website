import Data from 'util/data'

type Education = {
  logo: string
  name: string
  degree: string
  period: string
  courses: Data[]
}

const education: Education = {
  logo: 'nus',
  name: 'National University of Singapore',
  degree: 'Bachelor of Computing in Computer Science',
  period: 'Aug 2020 – May 2024',
  courses: [
    {
      image: 'givehub.png',
      url: 'https://givehub.vercel.app',
      logo: 'givehub',
      links: [
        {
          type: 'Docs',
          url: 'https://docs.google.com/document/d/10YGPgDC4BL0CQGAM1K4XCLMPEwYsgUtpEHElV3E8U3I/edit?usp=sharing'
        },
        {
          type: 'Poster',
          url: 'https://drive.google.com/file/d/1aGGiJyPwKbFIPt89lJFg3RLGicotU8C8/view?usp=sharing'
        },
        {
          type: 'Repo',
          url: 'https://github.com/sheimoria/givehub-client'
        },
        {
          type: 'Video',
          url: 'https://drive.google.com/file/d/1aN4Ia6muHysXqE7F8ca6HiaGfnYw1uNT/view?usp=sharing'
        }
      ],
      heading2: 'Independent Software Development Project (Orbital)',
      subheading: 'May – Aug 2021',
      points: [
        'Co-developed a one-stop social platform for Singaporeans to discover volunteer opportunities and for charities to manage volunteers',
        'Attained the highest level of achievement (Artemis) for showing strong evidence of software engineering, testing and documentation',
        'Mentored by TikTok tech lead manager and President’s Volunteerism & Philanthropy Award winner Mr Laurence Franslay'
      ],
      stack: [
        {
          logo: 'typescript',
          name: 'Typescript',
          url: 'https://www.typescriptlang.org'
        },
        { logo: 'reactjs', name: 'React.js', url: 'https://reactjs.org' },
        {
          logo: 'tailwindcss',
          name: 'Tailwind CSS',
          url: 'https://tailwindcss.com'
        },
        {
          logo: 'graphql',
          name: 'GraphQL',
          url: 'https://graphql.org'
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
        },
        {
          logo: 'docker',
          name: 'Docker',
          url: 'https://www.docker.com/'
        }
      ]
    },
    {
      image: 'wishdish.png',
      url: 'https://enterprise.nus.edu.sg/education-programmes/summer-programme/',
      logo: 'nus',
      heading2: 'Summer Programme in Entrepreneurship',
      subheading: 'July 2021',
      points: [
        "Pitched a product with 4 teammates to a panel of judges from Singapore's startup scene",
        'Orientated a group of 12 students from Southeast Asia and China as a student ambassador',
        'Awarded the Temasek Foundation-NUS STEP Entrepreneurship Initiative scholarship, which is given to high-potential individuals with a passion for entrepreneurship'
      ]
    }
  ]
}

export default education
