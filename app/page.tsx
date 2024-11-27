import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ExtracurricularActivities from '../components/ExtracurricularActivities'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ExtracurricularActivities />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}

