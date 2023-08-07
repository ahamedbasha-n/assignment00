import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/order">Place Order</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/order">
            <OrderForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
