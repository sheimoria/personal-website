import Article from 'components/Article'
import EducationArticle from 'components/EducationArticle'
import Header from 'components/Header'
import type { NextPage } from 'next'
import Section from 'components/Section'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-6xl gap-12 p-6 mx-auto">
        <Section heading="Education">
          <EducationArticle
            logo="nus"
            heading="Bachelor of Computing in Computer Science"
            subheading="National University of Singapore"
            period="August 2020 — Present"
          />
          <EducationArticle
            logo="sji"
            heading="International Baccalaureate Diploma"
            subheading="St. Joseph's Institution"
            period="Jan 2016 — Nov 2017"
          />
        </Section>
        <Section heading="Experience">
          <Article
            logo="carfix"
            heading="Frontend Developer Intern"
            period="May 2021 — Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum lectus mauris ultrices eros in cursus turpis massa.
              Porta nibh venenatis cras sed felis eget velit aliquet."
            stack={['nextjs', 'ts']}
          />
          <Article
            logo="grab"
            heading="Marketing Assistant"
            period="Jan — Jun 2020"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vestibulum lectus mauris ultrices eros in cursus turpis massa.
              Porta nibh venenatis cras sed felis eget velit aliquet."
            stack={['html', 'css', 'js']}
          />
        </Section>
        <Section heading="Projects">
          <div>hi</div>
        </Section>
      </main>
    </>
  )
}

export default Home
