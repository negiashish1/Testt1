import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
	  <About />
	  <Experience />
	  <Services />
      <Footer />
    </>
  )
}

export default App