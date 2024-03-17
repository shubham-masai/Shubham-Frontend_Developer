import './App.css'
import HeroSection from './components/HeroSection'
import Introduction from './components/Introduction'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Tokenomix from './components/Tokenomix'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Introduction/>
      <Tokenomix />
      <Roadmap />
    </>
  )
}

export default App
