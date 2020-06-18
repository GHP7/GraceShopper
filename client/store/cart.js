import history from '../history'
// history needed to keep cart refreshing
// no axios import since no database changes are happening until checkout

// ACTION TYPES
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

// Our cart will be an array of objects with the following keys and value types
//    id (INT)
//    product (OBJ)
//    quantity (INT)

// ACTION CREATORS
export const getCart = () => ({
  type: GET_CART
})
export const clearCart = () => ({
  type: CLEAR_CART
})
export const addToCart = product => ({
  type: ADD_TO_CART,
  product
})
export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
})
export const deleteFromCart = product => ({
  type: DELETE_FROM_CART,
  product
})

// INITIAL STATE
// checking if we have a localStorage cart already
// otherwise assigning cart to an empty array
let currentCart
localStorage.getItem('cart')
  ? (currentCart = JSON.parse(localStorage.getItem('cart')))
  : (currentCart = [])

// Thunks
export const getCart = () => async dispatch => {
  // const {data} = await axios.get('/api/cart')
  dispatch(getCart(data))
}

export const clearCart = () => async dispatch => {
  const {data} = await axios.post('/api/cart')
  dispatch(clearCart(data))
}

// *** REMINDER: FINISH WRITING REMAINDER OF THUNKS

// REDUCIN'

export default function(state = initialCart, action) {
  let products, productId
  switch (action.type) {
    case GET_CART:
      return state

    case CLEAR_CART:
      localStorage.setItem('cart', [])
      return { ...state, status: 'empty', items: [], subTotal: 0 }

    case ADD_TO_CART:
      productId = state.findIndex(element => element.id === action.product.id)
      if (productId > -1) {
        products = state
        products[productId].quantity += 1
      } else {
        products = state.concat([
          {
            id: action.product.id,
            product: action.product,
            quantity: 1
          }
        ])
      }
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products

    case REMOVE_FROM_CART:
      productId = state.findIndex(element => element.id === action.product.id)
      if (productId > -1) {
        products = state
        if (products[productId].quantity > 1) products[productId].quantity -= 1
        else products.splice(productId, 1)
      }
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products

    case DELETE_FROM_CART:
      productId = state.findIndex(element => element.id === action.product.id)
      if (productId > -1) {
        products = state
        products.splice(productId, 1)
      }
      localStorage.setItem('cart', JSON.stringify(products))
      history.push('/cart')
      return products

    default:
      return state
  }
}
