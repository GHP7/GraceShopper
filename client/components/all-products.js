import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/product';
import { Link } from 'react-router-dom';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div className="container">
        <p className="title">All Products</p>
        <div id="all-products-view">
          {products && products.length > 0
            ? products.map((product) => {
                return (
                  <div className="single-product" key={product.id}>
                    <Link to={`/products/${product.id}`}>
                      <div>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <img src={product.imageUrl} width='20%'/>
                      </div>
                    </Link>
                  </div>
                );
              })
            : 'No Products'}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.productReducer.allProducts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
