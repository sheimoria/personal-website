import { Extracurricular } from 'data/dataTypes'

const extracurriculars: Extracurricular[] = [
  {
    logo: 'sbs-transit',
    position: 'Winner',
    event: 'Hackathon',
    organisation: 'SBS Transit',
    period: 'Sep – Nov 2021',
    url: 'https://drive.google.com/file/d/1pQRowKxDTs-RqOpqCLEVn9CkrOCNLnvh/view?usp=sharing',
    description: [
      'Collaborated with 3 teammates to propose a revamp of the SBS Transit app into an industry-leading, accessibility-focused commuting app for the handicapped and disabled; awarded as one of the top three teams'
    ],
    stack: [{ logo: 'figma', name: 'Figma', url: 'https://www.figma.com' }]
  },
  {
    logo: 'eusoff-eagle',
    position: 'Publicity Head',
    event: 'Sports Management Committee',
    organisation: 'Eusoff Hall',
    period: 'May 2021 – Present',
    url: 'https://www.instagram.com/eusoff_smc/?hl=en',
    description: [
      "Leading a team of 12 to design various sporting merchandise and social media content in support of the hall's 17 sports and 300 over athletes"
    ],
    stack: [
      { logo: 'photoshop', name: 'Photoshop', url: '' },
      { logo: 'illustrator', name: 'Illustrator', url: '' }
    ]
  },
  {
    logo: 'bettersg',
    event: 'Race Relations in Singapore',
    organisation: 'better.sg',
    period: 'May 2020 – Present',
    url: 'https://racerelationssg.vercel.app',
    description: [
      "Partnered with an activist to initiate a website that showcases a growing public repository of over 100 educational resources on Singapore's race relations; attracted support from civic tech collective better.sg"
    ],
    stack: [
      {
        logo: 'typescript',
        name: 'Typescript',
        url: 'https://www.typescriptlang.org'
      },
      { logo: 'nextjs', name: 'Next.js', url: 'http://nextjs.org' },
      {
        logo: 'sheets',
        name: 'Sheets API',
        url: 'https://developers.google.com/sheets/api'
      }
    ]
  },
  {
    logo: 'eusoff-crest',
    position: 'Member',
    event: 'Eusoff Hackers',
    organisation: 'Eusoff Hall',
    period: 'Aug 2020 – May 2021',
    description: [
      'Collaborated with 3 teammates to build a Telegram bot to track CCA attendance for 40 CCAs and over 400 residents'
    ],
    stack: [
      {
        logo: 'python',
        name: 'Python',
        url: 'https://github.com/python-telegram-bot/python-telegram-bot'
      },
      {
        logo: 'telegram',
        name: 'Telegram API',
        url: 'https://core.telegram.org'
      }
    ]
  },
  {
    logo: 'hack&roll21',
    event: 'Hack&Roll',
    organisation: 'NUS Hackers',
    period: 'Jan 2021',
    url: 'https://devpost.com/software/lookout-lgzdkx',
    description: [
      'Developed a web app with 2 teammates to notify users via Telegram whenever keywords appeared during online class'
    ],
    stack: [
      { logo: 'bootstrap', name: 'Bootstrap', url: 'https://getbootstrap.com' },
      {
        logo: 'python',
        name: 'Flask',
        url: 'https://palletsprojects.com/p/flask/'
      },
      {
        logo: 'telegram',
        name: 'Telegram API',
        url: 'https://core.telegram.org'
      }
    ]
  },
  {
    logo: 'aws',
    event: 'Build On Singapore Hackathon',
    organisation: 'Amazon Web Services',
    period: 'Jul – Aug 2020',
    url: 'https://drive.google.com/file/d/15a1b7f8DNrlyfPLNYkHG8JZFKWyD5n89/view?usp=sharing',
    description: [
      'Collaborated with 3 teammates to propose an app to connect workers affected by COVID-19 to contract work; emerged as finalists'
    ],
    stack: [{ logo: 'figma', name: 'Figma', url: 'https://www.figma.com' }]
  },
  {
    logo: 'imda',
    position: 'Volunteer',
    event: 'Digital Media Clinics for Merdeka Generation',
    organisation: 'Infocomm and Media Development Authority',
    period: 'Feb – Apr 2020',
    description: [
      'Conducted weekly workshops at community centres to teach senior citizens how to use the Grab app for their daily needs; each session catered to over 20 participants',
      'Cooperated with other volunteers to organise logistics and optimise the workshop curriculum',
      'Briefed Grab driver-partners on available COVID-19 aid initiatives by Grab and the government'
    ]
  }
]

export default extracurriculars
