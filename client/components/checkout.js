import React from 'react'
import axios from 'axios'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCart } from '../store/cart'

export class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentInformation: {
              cardHolder: '',
              cardNumber: '',
              cardExpiration: '',
              CVV: ''
            }
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    submitHandler = async (event) => {
        event.preventDefault()
        let orderDetails = {
          items: this.props.cart,
          total: this.state.paymentInformation
        }
        await axios.post('/api/order', orderDetails)
    }

    render() {
      let tax = this.props.subTotal* 0.09
      let totalPrice = this.props.subTotal + tax
        return (
            <div className='checkoutContainer'>
                <h1>Hello, this is the checkout page!</h1>
                <h2>Payment Information</h2>
                <div className='paymentFormContainer'>
                  <form onSubmit={this.submitHandler}>
                    <label>Name on card: </label>
                    <br/>
                    <input type="text"  name = 'cardHodler' value= {this.state.paymentInformation.cardHolder} onChange = {this.changeHandler}/>

                    <label>Card number: </label>
                    <br/>
                    <input type="number" name = 'cardNumber' value= {this.state.paymentInformation.cardNumber} onChange = {this.changeHandler}/>

                    <label>Expiration date: </label>
                    <br/>
                    <input type="number" name= 'cardExpiration' value= {this.state.paymentInformation.cardExpiration} onChange = {this.changeHandler}/>

                    <label>CVV: </label>
                    <br/>
                    <input type="number" name= 'CVV' value= {this.state.paymentInformation.CVV} onChange = {this.changeHandler}/>
                    <div className='submitPaymentContainer'>
                    <Link className='submitPaymentButton' to='/' type= 'submit' onClick={this.submitHandler}>Submit Payment</Link>
                    </div>
                  </form>
                </div>
                <div className='priceBox'>
                    <div className='priceBoxTitle'>Summary of purchase: </div>
                    <div className='orderSubtotal'>{`Subtotal: $${this.props.subTotal}`}</div>
                    <div className='orderTax'>{`Tax: $${tax}`}</div>
                    <div className='orderTotalPrice'>{`Total: $${totalPrice}`}</div>
                </div>
          </div>
        )
    }
}

const mapState = state => {
    return {
      cart: state.cartReducer.currentCart,
      subTotal: state.cartReducer.subTotal
    }
}

const mapDispatch = dispatch => {
    return {
      fetchCart: () => dispatch(fetchCart())
    }
}

export default connect(mapState, mapDispatch)(Checkout)
