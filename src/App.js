import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import ProductDetails from './components/ProductDetails'
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/notfound" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
