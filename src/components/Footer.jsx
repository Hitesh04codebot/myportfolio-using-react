import React from 'react'

function Footer() {
  return (
    <footer className="bg-white text-black text-center py-2 px-2 text-sm sm:text-base">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  )
}

export default Footer