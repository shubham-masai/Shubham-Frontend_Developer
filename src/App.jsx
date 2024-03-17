import './App.css'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import IDOSection from './components/IDOSection'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Tokenomix from './components/Tokenomix'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Introduction />
      <IDOSection />
      <Tokenomix />
      <Roadmap />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
