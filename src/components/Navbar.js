import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    const linkStyles = {
        width: "50px",
        padding: '30px',
        margin: '0 6px 6px',
        background: 'blue',
        testDecoration: 'none',
        color: 'white',
      };

    return (
        <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
  
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
  
        <NavLink
          to="/signup"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Signup
        </NavLink>
  
        <NavLink
          to="/messages"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Messages
        </NavLink>
  
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      </div>
    )
}

export default Navbar