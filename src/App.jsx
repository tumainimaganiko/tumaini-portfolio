import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Interests from './components/Interests'
import MobileMenu from './components/MobileMenu'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Header />  
      <About /> 
      <Interests />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
