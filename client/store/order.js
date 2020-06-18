import axios from 'axios'
// database changes are happening at checkout so axios is needed

// consider renaming based on past and imperative tense?


// ACTION TYPES
const GET_ORDERS = 'GET_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'

// ACTION CREATORS
const getOrders = orders => ({ type: GET_ORDERS, orders })
const createOrder = order => ({ type: CREATE_ORDER, order })


// THUNKIN'

export let fetchOrders = userId => dispatch =>
  axios.get('/api/users/' + userId + '/orders')
      .then(res => {
        dispatch(getOrders(res.data || defaultOrders))
      })
      .catch(err => console.err(err))

export const makeNewOrder = (userId, order) => dispatch =>
    axios.post('/api/users/' + userId + '/orders', order)
      .then(res => {
        dispatch(createOrder(res.data))
        return axios.post('/api/email/sendCheckoutMail', {
          order,
          subtotal: order.items.reduce((acc, i) => i.quantity * i.price + acc, 0),
          to: order.confirmationEmail
        })
      })
      .catch(err => console.err(err))



// INITIAL STATE
const defaultOrders = []


// REDUCIN'
export default function (state = defaultOrders, action) {
  switch (action.type) {
    case CREATE_ORDER:
      const newState = state
      newState.push(action.order)
      return newState
    case GET_ORDERS:
      return action.orders
    default:
      return state
  }
}
