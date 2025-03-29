import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <Link to="/">Counter</Link> || 
    <Link to="/addemp/">AddEmp</Link> ||
    <Link to="/viewemp">ViewEmp</Link>
    </div>
  )
}

export default Header