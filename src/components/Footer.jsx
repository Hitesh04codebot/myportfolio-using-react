import React from 'react'

function Footer() {
  return (
    <footer className="bg-white text-black text-center py-2 px-2 text-sm sm:text-base">
      © {new Date().getFullYear()} Hitesh Kandari. All rights reserved.Made with love.
    </footer>
  )
}

export default Footer