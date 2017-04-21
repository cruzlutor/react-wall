import React from 'react'

export default function TopNav(props) {
  return(
    <nav className="nav has-shadow">
      <div className="nav-left"></div>
      <div className="nav-center"><strong>Domicilios Test</strong></div>
      <div className="nav-right is-hidden-mobile">Hola Luis</div>
      <div className="nav-right is-hidden-tablet">&#9776;</div>
    </nav>
  )
}