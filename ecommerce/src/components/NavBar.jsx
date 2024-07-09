import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
      <h1>Ecommerce</h1>
        <CartWidget/>
        </nav>
  )
}

NavBar.propTypes = {}

export default NavBar