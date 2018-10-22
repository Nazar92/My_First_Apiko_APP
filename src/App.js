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
  };

  async componentDidMount() {
    const prods = await getProducts();
    this.setState({
      products: prods,
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to={routes.admin}>Admin</Link>
        </header>

        <Route 
        exact
          path={routes.admin} 
          render={
            (renderProps) => (
              <AdminPage 
                productList={this.state.products} {...renderProps} 
              />
            )}
        />
      </div>
    );
  }
}

export default App;
