import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className="w-full p-3 shadow-sm flex justify-between items-center px-5 fixed top-0 left-0 bg-white z-50">
      <img src="/navio_logo.png" alt="Navio Logo" className="h-10" />
      <Button>Sign in</Button>
    </div>
  )
}

export default Header
