import react from 'react'
import { Connect, Link } from 'react-router-dom'
import { AllProducts } from './all-products';
import { removeItemFromCart } from '../store/cart'

export class Cart extends React.Component {
    constructor(props) {
        super(props); 
    }
    
    componentDidMount() {
        this.props.removeItemFromCart(id)
    }

    render() {
        return <div className='cart'>
            <div id='cart-view'>
                {products.map(product => {
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
                                <div className='single-product-price'>{product.price}</div>
                                <div className='single-product-itemsInStock'>{product.itemsInStock}</div>
                            </div>
                            <button type='submit' onSubmit={this.props.removeItemFromCart(product.id)}>Remove Item</button>
                            <label for='itemQuantity'>Quantity: </label>
                            <input type='number'></input>>
                        </div>
                    )
                }}
            </div>
        </div>
    }
}


const mapState = state => {
    return {
        products: state.products
    }
}

const mapDispatch = dispatch => {
    return {
        getProducts: () => dispatch(getAllProducts()),
        removeItemFromCart: (id) => dispatch(removeItemFromCart(id))
    }
}

export default connect(mapState, mapDispatch)(AllProducts)