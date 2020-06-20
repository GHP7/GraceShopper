import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
    this.props.addItemToCart(this.props.getSingleProduct)
  }
  render() {
    const product = this.props.singleProduct[0]
    console.log('THIS BE MY SINGLE PRODDUCT', product)
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
          <h4 className="title">Product Information</h4>
          <div id="single-product-view">
              <div key={product.id}>
              <p>Product Name: {product.name}</p>
              <img src={product.imageUrl} />
              <p>Price: {product.price}</p>
              <p>Left in stock: {product.itemsInStock}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <button type= 'submit' onSubmit = {this.props.addItemToCart}>Add To Cart</button>
            </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.productReducer.singleProduct
  }
}

const mapDispatch = dispatch => {
  // console.log('mapping to dispatch', productId)
  return {
    getSingleProduct: productId => dispatch(fetchSingleProduct(productId)),
    addItemToCart: product => dispatch(addItemToCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
