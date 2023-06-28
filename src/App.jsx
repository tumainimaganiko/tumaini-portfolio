import './App.css'
import About from './components/About'
import Header from './components/Header'
import Interests from './components/Interests'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <Header />  
      <About /> 
      <Interests />
      <Projects />
    </>
  )
}

export default App
