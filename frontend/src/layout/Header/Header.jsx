import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.scss'
import Helmet from "react-helmet"
const Header = () => {
  return (
  <>
  <Helmet>
    <title>Home</title>
  </Helmet>
  <nav>

<div className="container">
    <div className="d-flex align-itens-center justify-content-between">
        <div className="logo">
<h2>Floral Studio
</h2>
        </div>
<div className="nav-links">
<ul className='d-flex align-items-center  list-unstyled'>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/contacts'>Contacts</NavLink></li>
<li><NavLink to='/about'>About us</NavLink></li>
<li><NavLink to='/portfolio'>Portfolio</NavLink></li>
<li><NavLink to='/pricing'>Pricing</NavLink></li>
<li><NavLink to='/add'>Add</NavLink></li>
</ul>



    </div>
</div>
</div>
</nav>
  
  </>  

  )
}

export default Header
