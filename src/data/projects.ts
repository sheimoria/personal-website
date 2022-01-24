import { Project } from 'data/dataTypes'

export const projects: Project[] = [
  {
    logo: 'bettersg',
    title: 'Race Relations in Singapore',
    organisation: '',
    period: 'May 2020 – Present',
    url: 'https://racerelationssg.vercel.app',
    description:
      'Initiated a website to showcase a growing spreadsheet of educational resources on Singapore’s race relations, which attracted collaboration with a civic tech collective.',
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
    logo: 'aws',
    title: 'Build On Singapore',
    organisation: 'Amazon Web Services',
    period: 'Jul – Aug 2020',
    url: 'https://drive.google.com/file/d/15a1b7f8DNrlyfPLNYkHG8JZFKWyD5n89/view?usp=sharing',
    description:
      'Proposed an app that connects workers affected by COVID-19 to gigs and contract work; emerged as finalists.',
    stack: [{ logo: 'figma', name: 'Figma', url: 'https://www.figma.com' }]
  },
  {
    logo: 'hack&roll21',
    title: 'Hack&Roll',
    organisation: 'NUS Hackers',
    period: 'Jan 2021',
    url: 'https://devpost.com/software/lookout-lgzdkx',
    description:
      'Developed a web app that notifies users via Telegram whenever keywords appear during a live lecture.',
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
    logo: 'eusoff-eagle',
    title: 'Publicity Head',
    organisation: 'Eusoff Hall',
    period: 'May 2021 – Present',
    url: 'https://shemmaleriado.myportfolio.com',
    description:
      'Leading a team of 12 to design various media and merchandise for the sporting season.',
    stack: [
      { logo: 'photoshop', name: 'Photoshop', url: '' },
      { logo: 'illustrator', name: 'Illustrator', url: '' }
    ]
  },
  {
    logo: 'eusoff-crest',
    title: 'Eusoff Hackers',
    organisation: 'Eusoff Hall',
    period: 'Aug 2020 – May 2021',
    description:
      'Developed an all-in-one Telegram bot for extracurricular groups to mark attendance, track attendance and request for meetings.',
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
    logo: 'imda',
    title: 'Digital Clinics for the Merdeka Generation',
    organisation: 'Infocomm and Media Development Authority',
    period: 'Feb – Apr 2020',
    description:
      'Led workshops to teach senior citizens how to use the Grab app for their daily needs.',
    stack: []
  }
]
