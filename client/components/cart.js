import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCart, removeItemFromCart, updateQuantityAmount} from '../store/cart'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.updateQuantity = this.updateQuantity.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }
    componentDidMount() {
      this.props.fetchCart()
    }

    updateQuantity(e, price, id) {
      event.preventDefault()
      console.log(id)
      let newPrice = price * e
      this.props.updateQuantityAmount(e, newPrice, id)
    }

    removeItem(productId) {
      this.props.removeItemFromCart(productId)
    }

    render() {
      let tax = this.props.subTotal* 0.09
      let totalPrice = this.props.subTotal + tax
      let cartItems = this.props.cart
      // console.log('i am in cart comp render', cartItems)
      // console.log('in cart render: first product in cart', cartItems[0])
      return (<div className='cart'>
        <div id='cart-view'>
          {cartItems && cartItems.length > 0
            ? (cartItems.map((product) => {
              if(product) {
                return (
                  <div className='single-cart-product' key={product.id}>
                      <Link to={`/products/${product.id}`}>
                        <div className='single-product'>
                          <img src={product.imageURL} width='100px' />
                        </div>
                      </Link>
                      <div className='single-product-info'>
                        <div className='single-product-name'>{product.name}</div>
                        <div className='single-product-description'>{product.description}</div>
                        <div className='single-product-itemsInStock'>{`Items in stock: ${product.itemsInStock}`}</div>
                        <div className='single-product-price'>{`Price: $${product.price}`}</div>
                      </div>
                      <div className='remove-item-button'>
                        <button type='submit' onClick={() => {this.removeItem(product.id)}}>Remove Item</button>
                      </div>
                      <div className='update-quantity-button'>
                        <form onSubmit={this.updateQuantity}>
                          <label className='itemQuantity'>Update Quantity: {this.props.quantity}</label>
                          <input type='number' onChange={() => {this.updateQuantity(event.target.value, product.price, product.id)}} />
                          {/* <input type='Submit' value="Change Quantity"/> */}
                        </form>
                      </div>
                  </div>
                )
              }
            }
          )
        ) : 'No items in cart' }
        <div className='cart-subtotal'>
         {`Subtotal: $${this.props.subTotal}`}
        </div>
        </div>
        <div className='cart-summary'>
          <div className='summary-title'>Summary</div>
          <div className='summary-subtotal'>{`Subtotal: $${this.props.subTotal}`}</div>
          <div className='summary-tax'>{`Tax: ${tax}`}</div>
          <div className='summary-total-price'>{`Total Price: $${totalPrice}`}</div>
        </div>
        <div className='checkout'>
          <Link className='checkout-button'to = '/checkout'>Proceed to Check Out</Link>
        </div>
      </div>
    )
  }
}

// remember to add route and component that redirects to payment page!!!

const mapState = state => {
  return {
    cart: state.cartReducer.currentCart,
    subTotal: state.cartReducer.subTotal
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id)),
    updateQuantityAmount: (num, price, id) => dispatch((updateQuantityAmount(num, price, id)))
  }
}

export default connect(mapState, mapDispatch)(Cart)
