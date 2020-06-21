import history from '../history'
import axios from 'axios'
// history needed to keep cart refreshing
// no axios import since no database changes are happening until checkout

// ACTION TYPES
const GET_CART = 'GET_CART'
const CLEAR_CART = 'CLEAR_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_STATUS = 'UPDATE_STATUS'
const COMPLETE_CART  = 'COMPLETE_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// const DELETE_FROM_CART = 'DELETE_FROM_CART'

// Our cart will be an array of objects with the following keys and value types
//    id (INT)
//    product (OBJ)
//    quantity (INT)

// ACTION CREATORS
export const getCart = products => ({
  type: GET_CART,
  products
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
// export const deleteFromCart = product => ({
//   type: DELETE_FROM_CART,
//   product
// })

export const updateStatus = status => ({
  type: UPDATE_STATUS,
  status
})

export const completeCart = products => ({
  type: COMPLETE_CART,
  products
})

// INITIAL STATE
// checking if we have a localStorage cart already
// otherwise assigning cart to an empty array

let currentCart
localStorage.getItem('cart')
  ? (currentCart = JSON.parse(localStorage.getItem('cart')))
  : (currentCart = {
    status: 'active',
    items: [],
    subTotal: 0
  })

// Thunks
export const fetchCart = () => async dispatch => {
  const {data} = await axios.get('/api/cart')
  dispatch(getCart(data))
}

export const addItemToCart = (product) => async dispatch => {
  const {data} = await axios.post('/api/cart', product)
  dispatch(addToCart(data))
}

// need to write reducer for this
export const removeItemFromCart = (id) => async dispatch => {
  const {data} = await axios.delete(`/api/cart/${id}`)
  dispatch(removeFromCart(data));
}

export const emptyCart = () => async dispatch => {
  const {data} = await axios.put('/api/cart', {
    status: 'empty',
    items: [],
    subtotal: 0
  } )
  dispatch(clearCart(data))
}

export const changeStatus = (products) => async dispatch => {
  await dispatch(updateStatus(products))
}

export const checkoutCart = async (products) => {
  await axios.post('/api/order', products)
}

// *** REMINDER: FINISH WRITING REMAINDER OF THUNKS

// REDUCIN'

const cartReducer = (state = currentCart, action) => {
  // let products, productId
  switch (action.type) {
    case GET_CART:
      return {...state, state: action.products
      }
    case CLEAR_CART:
      localStorage.setItem('cart', [])
      return { ...state, state: {status: 'empty', items: [], subTotal: 0 }}
    case UPDATE_STATUS:
      return {...state,
        status: action.status
      }

    // case ADD_TO_CART:
    //   productId = state.findIndex(element => element.id === action.product.id)
    //   if (productId > -1) {
    //     products = state
    //     products["productId"].quantity += 1
    //   } else {
    //     products = state.concat([
    //       {
    //         id: action.product.id,
    //         product: action.product,
    //         quantity: 1
    //       }
    //     ])
    //   }
    //   localStorage.setItem('cart', JSON.stringify(products))
    //   history.push('/cart')
    //   return products
    // case REMOVE_FROM_CART:
    //   productId = state.findIndex(element => element.id === action.product.id)
    //   if (productId > -1) {
    //     products = state
    //     if (products[productId].quantity > 1) products[productId].quantity -= 1
    //     else products.splice(productId, 1)
    //   }
    //   localStorage.setItem('cart', JSON.stringify(products))
    //   history.push('/cart')
    //   return products


    // case DELETE_FROM_CART:
    //   productId = state.findIndex(element => element.id === action.product.id)
    //   if (productId > -1) {
    //     products = state
    //     products.splice(productId, 1)
    //   }
    //   localStorage.setItem('cart', JSON.stringify(products))
    //   history.push('/cart')
    //   return products

    default:
      return state
  }
}

export default cartReducer
