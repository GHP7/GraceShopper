import React from 'react'
import axios from 'axios'
import  { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Cart } from './cart'
import { fetchCart, removeItemFromCart } from '../store/cart'

export class Checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            subTotal: 0
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.updateStatus = this.updateStatus.bind(this)
    }

    changeHandler(event) {
        this.setState = {
            [event.target.name]: event.target.value
        }
    }

    submitHandler(event) {
        event.preventDefault()
        axios.post('/api/cart', this.state)
        this.setState({
            quantity: 1,
            subTotal: 0
        })
    }

    // Might be better to have updateStatus here because users might click checkout but decide at
    // the last minute not to finalize their purchase
    updateStatus(event) {
        this.props.updateStatus({
            status: 'COMPLETED'
        })
    }

    render() {
        let tax = this.state.subTotal * 0.9
        let totalPrice = this.state.subTotal + tax
        return (
            <div className='checkoutContainer'>
                <h1>Hello, this is the checkout page!</h1>
                <h2>Payment Information</h2>
                <div className='paymentFormContainer'>
                    <form onSubmit={this.submitHandler}>
                        <label>Name on card: </label>
                        <br/>
                        <input type="text"/>

                        <label>Card number: </label>
                        <br/>
                        <input type="number"/>

                        <label>Expiration date: </label>
                        <br/>
                        <input type="number"/>

                        <label>CVV: </label>
                        <br/>
                        <input type="number"/>
                    </form>
                </div>

                <div className='priceBox'>
                    <div className='priceBoxTitle'>Summary of purchase: </div>
                    <div className='orderSubtotal'>{this.state.subTotal}</div>
                    <div className='orderTax'>{tax}</div>
                    <div className='orderTotalPrice'>{totalPrice}</div>
                </div>

                <div className='submitPaymentContainer'>
                    <Link className='submitPaymentButton' to='/' onClick={this.updateStatus}>Submit Payment</Link>
                </div>
            </div>
        )
    }
}

const mapState = state => {
    return {
        products: state
    }
}

const mapDispatch = dispatch => {
    return {
        changeStatus: (status) => dispatch(changeStatus(status))
    }
}

export default connect(mapState, mapDispatch)(Checkout)
