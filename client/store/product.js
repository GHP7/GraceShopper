import history from '../history'
import axios from 'axios'

// ACTION CREATORS
const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS'
const REMOVE_SINGLE_PRODUCT = 'REMOVE_SINGLE_PRODUCT'
const GOT_SINGLE_PRODUCT = 'GOT_SINGLE_PRODUCT'
const UPDATED_QUANTITY = 'UPDATED_QUANTITY'

// INITIAL STATE
// All Products will be an array of objects.
// Each product will be an object with the following keys and value types
// name of product (string)
// description (text)
// price (integer)
// # of items in stock (integer)
// imageUrl (string)

const initialState = {
  allProducts: [],
  singleProduct: {}
}

// ACTION CREATORS
export const gotAllProducts = products => ({
  type: GOT_ALL_PRODUCTS,
  products
})

export const gotSingleProduct = product => ({
  type: GOT_SINGLE_PRODUCT,
  product
})

export const removeSingleProduct = () => ({
  type: REMOVE_SINGLE_PRODUCT
})

export const updatedQuantity = product => ({
  type: UPDATED_QUANTITY,
  product
})

// THUNK CREATORS
export const getAllProducts = () => async dispatch => {
  const {data} = await axios.get('/api/products')
  dispatch(gotAllProducts(data))
}

export const getSingleProduct = id => async dispatch => {
  const {data} = await axios.get(`/api/candies/${id}`)
  dispatch(gotSingleProduct(data))
}

export const increaseQuantity = id => async dispatch => {
  const {data} = await axios.put(`/api/products/${id}/increase`)
  dispatch(updatedQuantity(data))
}

export const decreaseQuantity = id => async dispatch => {
  const {data} = await axios.put(`/api/products/${id}/decrease`)
  dispatch(updatedQuantity(data))
}

// REDUCER
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      return {...state, allProducts: action.products}
    case GOT_SINGLE_PRODUCT:
      return {...state, singleProduct: action.product}
    case REMOVE_SINGLE_PRODUCT:
      return singleProduct
    case UPDATED_QUANTITY:
      return {...state, singleProduct: action.product}
    default:
      return state
  }
}

export default productReducer
