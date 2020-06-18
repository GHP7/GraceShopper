import React from 'react'
import axios from 'axios'

class AddProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: 0,
      itemsInStock: 0,
      imageURL: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  // state set to input values
  changeHandler(event) {
    this.setState = {
      [event.target.name]: event.target.value
    }
  }

  // sends new state (new state set in changeHandler method) to our database via the express POST route. Then, current state resets.
  submitHandler(event) {
    event.preventDefault()
    axios.post('/api/products', this.state)
    this.setState({
      name: '',
      description: '',
      price: 0,
      itemsInStock: 0,
      imageURL: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, this is the add products page!</h1>
        <form onSubmit={this.submitHandler}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name={this.state.name}
            onChange={this.changeHandler}
          />
          <label>Description:</label>
          <br />
          <input
            type="text"
            name={this.state.description}
            onChange={this.changeHandler}
          />
          <label>Price:</label>
          <br />
          <input
            type="number"
            name={this.state.price}
            onChange={this.changeHandler}
          />
          <label>Items in Stock:</label>
          <br />
          <input
            type="number"
            name={this.state.itemsInStock}
            onChange={this.changeHandler}
          />
          <label>Image URL:</label>
          <br />
          <input
            type="text"
            name={this.state.imageURL}
            onChange={this.changeHandler}
          />
        </form>
      </div>
    )
  }
}

export default AddProduct
