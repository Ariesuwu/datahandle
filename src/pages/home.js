import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav>
        <Link to="/">My Profile</Link>
      </nav>
    </div>
  )
}
