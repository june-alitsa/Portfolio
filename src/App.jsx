import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Work from './components/Work.jsx'
import Footer from './components/Footer.jsx'
import { ScrollProgress, Spotlight } from './components/Effects.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Work />
      </main>
      <Footer />
    </>
  )
}
