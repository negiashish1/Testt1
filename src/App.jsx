import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
	  <About />
	  <Experience />
	  <Services />
	  <Portfolio />
	  <Testimonials />
      <Footer />
    </>
  )
}

export default App