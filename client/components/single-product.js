import React from 'react'
import { connect } from 'react-redux'
import { fetchSingleProduct } from '../store/product'
import { addItemToCart } from '../store/cart'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.addToCartFunc = this.addToCartFunc.bind(this)
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id)
    this.props.addItemToCart()
  }

  addToCartFunc() {
    this.props.addItemToCart({
      // name: this.props.product.name,
      // description: this.props.product.description,
      // price: this.props.product.price,
      // itemsInStock: this.props.product.itemsInStock,
      // imageURL: this.props.product.imageURL
      productId: this.props.product.id
    })
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
          <div className="center-align">
              <h4 className="title">Product Deets</h4>
              <div key={product.id}>
              <h5>{product.name}</h5>
              <img src={product.imageURL} width="200" height="200" />
              <p>Price: ${product.price}</p>
              {product.itemsInStock < 20 ? <p>Hurry! Only {product.itemsInStock} left in stock!</p> : ''}
              <p>Description: {product.description}</p>
              <button className='waves-effect waves-light btn' type='btn-floating pulse' onClick = {this.addToCartFunc}>Add To Cart</button>
          <div>
            <hr />
          <a href="../products">Not quite what you're looking for?</a>
          </div>
            </div>
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
