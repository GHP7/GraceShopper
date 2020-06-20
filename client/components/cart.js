import React from 'react'
import { Connect, Link } from 'react-router-dom'
// import { AllProducts } from './all-products';
import { fetchCart, removeItemFromCart } from '../store/cart'

export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          quantity: 1
        }
        this.changeQuantity = this.changeQuantity.bind(this)
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

    render() {
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
                      <div className='single-product-price'>{product.price}</div>
                  </div>
                  <button type='submit' onSubmit={this.props.removeItemFromCart(product.id)}>Remove Item</button>
                  <label className='itemQuantity'>Quantity: {this.state.quantity}</label>
                  <input type='number' onChange={this.changeQuantity}/>
              </div>
            )
          })}
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
