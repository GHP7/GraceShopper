import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts, addProduct, deleteProduct} from '../store/product'
import {Link} from 'react-router-dom'
import AddProduct from './AddProduct'

// Notice that we're exporting the AllProducts component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    const products = this.props.products

    return (
      <div className="container">
        <div className="form-container">
          <p className="title">Add a new product</p>
          <AddProduct addProduct={this.props.addProduct} />
        </div>
        <p className="title">All Products</p>
        <div id="all-products-view">
          {products && products.length > 0
            ? products.map(product => {
                return (
                  <div className="single-product" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                      <div className="product-card">{product.title}</div>
                    </Link>
                    <button
                      type="button"
                      className="delete"
                      onClick={() => this.props.deleteProduct(product.id)}
                    >
                      X
                    </button>
                  </div>
                )
              })
            : 'No Products'}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts()),
    addProduct: productInfo => dispatch(addProduct(productInfo)),
    deleteProduct: productId => dispatch(deleteProduct(productId))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
