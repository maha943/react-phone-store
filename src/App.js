import React , {Component , Fragment} from 'react';
import {Route , Switch } from "react-router-dom";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import ProductList from "./Components/ProductList.js";
import Details from "./Components/Details.js";
import Default from "./Components/Default.js";
import Cart from "./Components/Cart";
import Modal from "./Components/Modal.js";





class App extends Component{
   
  render(){
    return (
      <Fragment>
        
         <Navbar/>
         <Switch>

           <Route  exact path="/" component={ProductList}/>
           <Route path="/details" component={Details}/>
           <Route path="/cart" component={Cart}/>
           <Route component={Default}/>

         </Switch>
         <Modal />
      </Fragment>
      );
  }
}
export default App



