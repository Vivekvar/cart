import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import 'firebase/firestore';
import firebase from 'firebase/app';

class App extends React.Component {
  constructor () {
    super();
    this.state={
      products: [],
      loading: true
    } 
    this.db = firebase.firestore();
  } 
  componentDidMount () {
    this.db
      .collection('products')
      .orderBy('price')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const curr_doc = doc.data();
          curr_doc["id"] = doc.id;
          return curr_doc;
        })
        this.setState({
          products,
          loading: false
        })
      })
  }
  handleIncrement = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Product updated successfully!');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  handleDecrement = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
         return;
    }
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Product updated successfully!');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  } 
  handleDelete = (id) => {
    const { products } = this.state;
    const docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(() => {
        console.log('Product deleted successfully!');
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.forEach((product) => {
      cartTotal += product.qty * product.price;
    })
    return cartTotal;
  }
  // addProduct = () => {
  //   this.db
  //     .collection('products')
  //     .add({
  //       img: '',
  //       price: 19999,
  //       qty: 1,
  //       title: 'Washing Machine'
  //     })
  //     .then((docRef) => {
  //       console.log('Product added successfully!.', docRef);
  //     })
  //     .catch((error) => {
  //       console.log('Error: ', error);
  //     })
  // }
  render () {
    const { products, 
      loading } = this.state;
    return (
      <div className="App">
        <Navbar 
          count = { this.getCartCount()}
        />
        {/* <button onClick={this.addProduct} style={{ margin: 20, padding: 20, fontSize: 20}}>ADD PRODUCT</button> */}
        { loading && <h1>Hang On! Loading Products ...</h1>}
        <Cart 
          products = { products }
          onIncrease = {this.handleIncrement}
          onDecrease = {this.handleDecrement}
          onDelete = {this.handleDelete}
        />
        <div style = { { fontSize: 20, padding: 10 } }>
          TOTAL : { this.getCartTotal() }
        </div>
      </div>
    );
  }
}

export default App;
