import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { addItemToCart } from '../store/cart'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
    this.props.addItemToCart(this.props.getSingleProduct)
  }
  render() {
    const product = this.props.product
    return (
      <div>
        {/* <div className="container">
          <div className="form-container">
            <p className="title">Update a product</p>
            {product.id ? (
              <AddProduct
                product={product}
                updateProduct={this.props.updateProduct}
              />
            ) : (
              ''
            )}
          </div> */}
          <h4 className="title">Product details</h4>
          <div id="single-product-view">
              <div key={product.id}>
              <h5>{product.name}</h5>
              <img src={product.imgURL} width="200" height="200" />
              <p>Price: ${product.price}</p>
              {product.itemsInStock < 20 ? <p>Hurry! Only {product.itemsInStock} left in stock!</p> : ''}
              <p>Description: {product.description}</p>
            </div>
          </div>
          <button type= 'submit' onSubmit = {this.props.addItemToCart}>Add To Cart</button>
          <div>
          <a href="../products">Not quite what you're looking for?</a>
          </div>
            </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.productReducer.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: productId => dispatch(fetchSingleProduct(productId)),
    addItemToCart: product => dispatch(addItemToCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
