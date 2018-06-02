import React, { Component } from 'react';
import './customer.css'

class Customer extends Component {
  constructor(){
    super()
      this.state={
        customers:[]
      
    }
  }

  componentDidMount(){
    fetch('/api/customers')
      .then(customer=>customer.json())
      .then(data=>this.setState({ customers:data }))
  }

  render() {
    return (
      <div className="App">
        <h1>customers</h1>
        <ul>
        {
        this.state.customers.map((customer)=>{
          return(
              <li key={customer.id}>{customer.name}  {customer.age} </li>
          )
        })
      }
      </ul>
      </div>
    );
  }
}

export default Customer;
