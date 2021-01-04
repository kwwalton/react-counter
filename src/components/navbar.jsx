import React, { Component } from 'react'

// Stateless Function Component - instead of class
const NavBar = ({totalCounters}) => {
  console.log('Nav rendered')
  return (
    <nav className="nav">
      <a className="nav-link active" aria-current="page" href="#">
        Active
        <span className="badge badger-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default NavBar
