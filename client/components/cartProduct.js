import React from 'react'
import {connect} from 'react-redux'
import {priceConverter} from '../../public/utilities'
import {updateCartProductThunk} from '../store/cart'

class CartProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0
    }
    this.onChange = this.onChange.bind(this)
    this.onUpdateSubmit = this.onUpdateSubmit.bind(this)
  }
  componentDidMount() {
    this.setState({quantity: this.props.product.amount})
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onUpdateSubmit = event => {
    event.preventDefault()
    this.props.updateCart(this.props.product.product.id, this.state.quantity)
  }

  render() {
    return (
      <div className="cart-container">
        <div className="cart-subcontainer-left">
          <h3>{this.props.product.product.name}</h3>
          <img src={this.props.product.product.imageUrl} />
        </div>
        <div className="cart-subcontainer-right">
          <form onSubmit={this.onUpdateSubmit}>
            <label>Quantity: </label>
            <input
              type="number"
              name="quantity"
              min="0"
              max="9999"
              value={this.state.quantity}
              onChange={event => this.onChange(event)}
            />
            <br />
            <button className="submit-button" type="submit">
              Update Quantity
            </button>
          </form>
          {/* <form onSubmit={this.onDeleteSubmit}>
          <button className="delete-button" type="submit">
              Remove
            </button>
          </form> */}
          <p>
            Price: ${priceConverter(
              this.props.product.product.price * this.state.quantity
            )}{' '}
            /lb{' '}
          </p>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCart: (productId, amount) =>
      dispatch(updateCartProductThunk(productId, amount))
  }
}

export default connect(null, mapDispatchToProps)(CartProduct)
