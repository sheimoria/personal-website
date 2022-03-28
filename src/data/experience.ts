import Data from 'util/data'

const experience: Data[] = [
  {
    image: 'carfix.png',
    url: 'http://carfixsg.co',
    logo: 'carfix',
    links: [
      {
        type: 'Recommendation',
        url: 'https://drive.google.com/file/d/1yh6WKZgGbYVDtA32q4o_d96puyO5jIHz/view?usp=sharing'
      }
    ],
    heading: 'Frontend Development Intern',
    heading2: 'Carfix',
    subheading: 'May 2021 – Present',
    points: [
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
        name: 'Tailwind CSS',
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
    image: 'grab.png',
    url: 'https://www.grab.com/sg/driver/transport/rentals/',
    logo: 'grab',
    heading: 'Web Designer',
    heading2: 'Grab',
    subheading: 'Jan – Jul 2020',
    points: [
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
