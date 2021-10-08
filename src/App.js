import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          title: 'Laptop',
          qty: 1,
          price: 60000,
          id: 1,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
        },
        {
          title: 'Refrigerator',
          qty: 1,
          price: 15000,
          id: 2,
          img: 'https://images.unsplash.com/photo-1585338667391-5b279a0c5eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
        },
        {
          title: 'Air Conditioner',
          qty: 1,
          price: 30000,
          id: 3,
          img: 'https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
        }
      ]
    }
  }

  getCount = () => {
    var res = 0;
    const { products } = this.state;
    products.map((product) => {
      res += product.qty;
    })
    return res;
  }

  getTotal = () => {
    var res = 0;
    const { products } = this.state;
    products.map((product) => {
      res += (product.qty * product.price);
    })
    return res;
  }

  handleIncrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
         products: products
    })
  }

  handleDecrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
         return;
    }
    products[index].qty -= 1;
    this.setState({
         products: products
    })
  }

  handleDelete = (id) => {
    const { products } = this.state;
    const remaining = products.filter((item) => item.id !== id);
    this.setState({
         products: remaining
    })
  }

  render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar 
          count = { this.getCount()}
        />
        <Cart 
          products = { products }
          onIncrease = {this.handleIncrease}
          onDecrease = {this.handleDecrease}
          onDelete = {this.handleDelete}
        />
        <div style = { { fontSize: 20, padding: 20 } }>
          TOTAL : { this.getTotal() }
        </div>
      </div>
    );
  }
}

export default App;
