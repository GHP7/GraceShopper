import React from 'react'
import { Connect, Link } from 'react-router-dom'
// import { AllProducts } from './all-products';
import { fetchCart, removeItemFromCart } from '../store/cart'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          quantity: 1,
          subTotal:0
        }
        this.changeQuantity = this.changeQuantity.bind(this)
        this.updateSubtotal = this.updateSubtotal.bind(this)
    }
    componentDidMount() {
      this.props.removeItemFromCart(this.products.items.id)
    }

    // when user changes quantity input, this.state.quantity updates as well
    changeQuantity(event) {
      this.setState = {
        quantity: event.target.value
      }
    }

    // when each product is mapped and rendered, product price should add to subTotal
    updateSubtotal(event) {
      this.setSate = {
        subTotal: this.state.subTotal + event.target.value
      }
    }

    render() {
      let tax = this.state.subTotal* 0.9
      let totalPrice = this.state.subTotal + tax
      return (<div className='cart'>
        <div id='cart-view'>
          {this.products.items.map(product => {
            return (
              <div className='single-cart-product' key={product.id}>
                  <Link to={`/products/${product.id}`}>
                      <div className='single-product'>
                        <img src={product.imageURL}></img>
                      </div>
                  </Link>
                  <div className='single-product-info'>
                      <div className='single-product-name'>{product.name}</div>
                      <div className='single-product-description'>{product.description}</div>
                      <div className='single-product-itemsInStock'>{product.itemsInStock}</div>
                      <div className='single-product-price' onRender = {this.updateSubtotal}>{product.price}</div>
                  </div>
                  <div className='remove-item-button'>
                    <button type='submit' onSubmit={this.props.removeItemFromCart(product.id)}>Remove Item</button>
                  </div>
                  <div className='update-quantity-button'>
                    <label className='itemQuantity'>Quantity: {this.state.quantity}</label>
                    <input type='number' onChange={this.changeQuantity}/>
                  </div>
              </div>
            )
          })}
          <div className='cart-subtotal'>
          {this.state.subTotal}
          </div>
        </div>
        <div className='cart-summary'>
          <div className='summary-title'>Summary</div>
          <div className='summary-subtotal'>{this.state.subTotal}</div>
          <div className='summary-tax'>{tax}</div>
          <div className='summary-total-price'>{totalPrice}</div>
        </div>
        <div className='checkout'>
          <button className='checkout-button' type='submit'>Proceed to Check Out</button>
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
    fetchCart: () => dispatch(fetchCart()),
    removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
  }
}

export default Connect(mapState, mapDispatch)(Cart)
