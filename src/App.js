import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <div className="container">
          <Title subtitle="Our PROGRAM" title="What We Offer"/>
          <Programs/>
          <About/>
          <Title subtitle="Gallery" title="Campus Photos"/>
          <Campus/>
          <Title subtitle="testimonials" title="What Students Say "/>
          <Testimonials/>


       </div>
       
    </div>
  ) 
}

export default App
