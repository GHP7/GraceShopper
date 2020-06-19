import React from 'react'
import { connect } from 'react-redux'
import { getSingleProduct } from '../store/product'
import { addItemToCart } from '../store/cart'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
    this.props.addItemToCart(this.props.getSingleProduct)
  }

  componentWillUnmount() {
    this.props.clearProduct()
  }



  render() {
    const product = this.props.singleProduct

    return (
      <div>
        <div className="container">
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
          </div>
          <p className="title">Product Information</p>
          <div id="single-product-view">
            <div key={product.id}>
              <p>Product Name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Left in stock: {product.itemsInStock}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div>
            <button type= 'submit' onSubmit = {this.props.addItemToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: productId => dispatch(getSingleProduct(productId)),
    addItemToCart: product => dispatch(addItemToCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
