import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Footer = () => {

  return (
    <div>
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">CONTACT US</h5>
                <p className="grey-text text-lighten-4">Products and Order Inquiries - customercare@boop3.com</p>
                <p>Operating Time 9AM - 6PM UTC+8</p>
                <p>Made with 💉💦😭 by Elle, Kitty and Yanjaa.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">CUSTOMER SERVICE</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Track My Order</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Common Questions</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Payments</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Shipping Information</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 All Rights Reserved
            <a className="grey-text text-lighten-4 right" href="#!">Privacy policy</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(Footer)

/**
 * PROP TYPES
 */
Footer.propTypes = {
  email: PropTypes.string
}
