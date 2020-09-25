import React , {Component} from "react"; 
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import "./Navbar.css";

class Navbar extends Component{
	render(){
		return (
           <nav className="navbar navwrapper navbar-expand-sm navbar-dark px-sm-5">
           {/* 
             https://www.iconfinder.com/icons/1243689/call_phone_icon
              Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                 <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                   <li className="nav-item ml-5">
                      <Link className="nav-link" to= "/" > products</Link>
                   </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                     <button className="btnContainer">
                       <span className="span" >
                        <i className="fas fa-cart-plus icon"></i>
                        my cart
                        </span>
                      </button>
                </Link>
           </nav>
			)
	}
}


export default Navbar;