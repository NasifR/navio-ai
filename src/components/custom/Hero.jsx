import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div>
      <h1 className="font-extrabold text-[50px]  text-center">
        <span className='text-[#17a4b0]'>Plan smarter, travel farther</span><br></br>
        <span className='text-black'>Your AI-powered trip planner for seamless adventures.</span>
      </h1>
      <Link to={'/create-trip'}>
      <Button className='mt-10'>Get Started</Button>
      </Link>
    </div>
  )
}

export default Hero