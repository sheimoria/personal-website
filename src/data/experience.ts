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
      'Co-developed a web application within a 4-man engineering team, which has attained SGD 50,000 in government funding, tripled revenue and served over 100 requests since launch in Nov 2021',
      'Designed the user interface, user flow and company logo and brand'
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
    image: 'grab-poster.png',
    url: 'https://www.grab.com/sg/driver/transport/rentals/',
    logo: 'grab',
    heading: 'Web Designer',
    heading2: 'Grab',
    subheading: 'Jan – Jul 2020',
    points: [
      'Developed landing pages for acquisition campaigns as part of the marketing team',
      'Designed marketing collaterals such as brochures and electronic direct mail, which were sent to over 1000 driver-partners',
      'Produced creative and promotional content for social media channels, which tripled incoming customer enquiries'
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
