import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ShopAllItems from './components/ShopAllItems';
import ShopCategory from './components/ShopCategory';
import ShoppingCart from './components/ShoppingCart';
import Admin from './components/admin/Admin';
import AddItem from './components/admin/AddItem';
import AllItems from './components/admin/AllItems';
import EditItem from './components/admin/EditItem';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getItems } from './actions/items.actions';

class App extends Component {
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              {/* USERS */}
              <Route exact path="/" component={ Home }/>
              <Route exact path="/about" component={ About }/>
              <Route exact path="/contact" component={ Contact }/>
              <Route exact path="/shop" component={ ShopAllItems }/>
              <Route exact path="/shop/:category" component={ ShopCategory }/>
              <Route exact path="/cart" component={ ShoppingCart }/>
              {/* ADIMIN */}
              <Route exact path="/admin" component={ Admin }/>
              <Route exact path="/admin/items" component={ AllItems }/>
              <Route exact path="/admin/item/new" component={ AddItem }/>
              <Route exact path="/admin/item/edit/:name" component={ EditItem }/>
              {/* <Route exact path="/admin/messages" component={ Messages }/> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    getItems: bindActionCreators(getItems, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
