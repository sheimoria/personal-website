import { Experience } from 'data/dataTypes'

const experience: Experience[] = [
  {
    logo: 'carfix',
    position: 'Frontend Developer Intern',
    organisation: 'Carfix',
    period: 'May 2021 – Present',
    url: 'https://staging.carfixsg.co',
    description: [
      'Created the web platform in collaboration with two other developers; tripled revenue since launch and secured government funding of SGD 50,000',
      'Developed the frontend and its user interface from scratch; served over 100 requests since launch',
      'Designed the company logo and design system for marketing'
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
        name: 'TailwindCSS',
        url: 'https://tailwindcss.com'
      },
      {
        logo: 'nodejs',
        name: 'Node.js',
        url: 'https://nodejs.org/en/'
      },
      {
        logo: 'mongodb',
        name: 'MongoDB',
        url: 'http://mongodb.com'
      }
    ]
  },
  {
    logo: 'grab',
    position: 'Marketing Assistant',
    organisation: 'Grab',
    period: 'Jan – Jul 2020',
    description: [
      'Programmed interactive landing pages for acquisition campaigns as a member of the marketing team',
      'Designed marketing collaterals such as brochures and electronic direct mail; sent to over 1000 driver-partners',
      'Produced creative, promotional content for social media channels; increased incoming customer enquiries by over 3 times'
    ],
    stack: [
      {
        logo: 'html5',
        name: 'HTML5',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      {
        logo: 'css3',
        name: 'CSS3',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },

      {
        logo: 'javascript',
        name: 'Javascript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      }
    ]
  }
]

export default experience
