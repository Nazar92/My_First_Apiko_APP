import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { routes } from './routes';
import { AdminPage } from './scens/admin/admin';
import { products } from './data/products';

import './App.css';


const getProducts = async () => products;

class App extends Component {
  state = {
    products: [],
    loading: true,
  };

  async componentDidMount() {
    const prods = await getProducts();
    this.setState({
      products: prods,
      loading: false,
    })
  };

  updateProduct = (newProduct) => (
    this.setState({
      products: this.state.products.map((oldProduct) => {
        if (oldProduct.id === newProduct.id) {
          return newProduct;
        }
        return oldProduct;
      }),
    })
  );
  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>
    }
    return (
      <div className="App">
        <header className="App-header">
          <Link to={routes.admin}>Admin</Link>
        </header>

        <Route 
        // exact
          path={routes.admin} 
          render={
            (renderProps) => (
              <AdminPage 
                productList={this.state.products} 
                updateProduct={this.updateProduct} {...renderProps} 
              />
            )}
        />
      </div>
    );
  }
}

export default App;
