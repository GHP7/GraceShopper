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
export const getCart = cart => ({
  type: GET_CART,
  cart
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


// Thunks
//gets all items in cart associated with logged in user- data is logged and shown in dev tools console, api route works!!
export const fetchCart = () => async dispatch => {
  const {data} = await axios.get('/api/cart/productsByUser/')
  // console.log('i am in cart store fetchcart', data)
  dispatch(getCart(data))
  history.push('/cart')
}

// this works!! - used in single product component
export const addItemToCart = (productId) => async dispatch => {
  try {
    const {data} = await axios.post('/api/cart/', productId)
    dispatch(addToCart(data))
  } catch (error) {
    console.log('add to cart button is broken!', error)
  }
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

export const changeStatus = (status) => async dispatch => {
  await dispatch(updateStatus(status))
}

export const checkoutCart = async (products) => {
  await axios.post('/api/order', products)
}

// *** REMINDER: FINISH WRITING REMAINDER OF THUNKS

// INITIAL STATE
// checking if we have a localStorage cart already
// otherwise assigning cart to an empty array
let initialState = {
  currentCart: [],
}

// LOCAL STORAGE
// localStorage.getItem('cart')
//   ? (currentCart = JSON.parse(localStorage.getItem('cart')))
//   : (currentCart = {
//     status: 'active',
//     items: [],
//     subTotal: 0
//   })

// REDUCIN'

const cartReducer = (state = initialState, action) => {
  // let products, productId
  switch (action.type) {
    case GET_CART:
      return { ...state, currentCart: action.cart}
    case CLEAR_CART:
      localStorage.setItem('cart', [])
      return { ...state, currentCart: { subTotal: 0, quantity: 0 }}
    // case ADD_TO_CART:
    //   return { ...state, currentCart: { }}
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
