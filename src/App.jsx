import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Tokenomix from './components/Tokenomix'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Tokenomix />
      <Roadmap />
    </>
  )
}

export default App
