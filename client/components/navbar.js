import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store' 


const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
      {isLoggedIn ? (
         <div className="navbar-fixed">
          {/* The navbar will show these links after you log in */}
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">BOOP</a>
              <ul className="left hide-on-med-and-down">
                <li><a href="/products">🛍Shop</a></li>
                </ul>
              <ul className="right hide-on-med-and-down">
                <li><a href="#" onClick={handleClick}>
            Logout
          </a></li>
                <li><a href="/cart">🛒Cart</a></li>
              </ul>
            </div>
          </nav>
          {/* <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link> */}
        </div>
      ) : (
        <div className="navbar-fixed">
          {/* The navbar will show these links before you log in */}
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">BOOP</a>
              <ul className="left hide-on-med-and-down">
                <li><a href="/products">🛍Shop</a></li>
                </ul>
              <ul className="right hide-on-med-and-down">
                <li><a href="/login">🔑Login</a></li>
                <li><a href="/signup">👋Sign Up</a></li>
                <li><a href="/cart">🛒Cart</a></li>
              </ul>
            </div>
          </nav>
          {/* <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">Cart</Link> */}
        </div>
      )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
