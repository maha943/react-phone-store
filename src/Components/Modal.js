import React , {Component} from "react";
import {Link} from "react-router-dom";
import "./Modal.css";
import { ProductConsumer} from "../Context";


class Modal extends Component{
	render(){
		return (
           <ProductConsumer>
           {(value) =>{
              const {modalOpen , closeModal} = value;
              const {img,title,price}=value.modalProduct;
              if(!modalOpen){
                  return null;
              } else{
                  return(
            <div className="modalContainer">
                <div className="container">
                    <div className="row">
                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                            <h5>item added to the cart</h5>
                            <img src={img} className="img-fluid" alt="product"/>
                            <h5>{title}</h5>
                            <h5 className="text-muted">price : $ {price}</h5>
                            <Link to="/">
                                <button  className="btnContainer text-capitalize" onClick={()=> closeModal()} >
                                    continue shopping</button>
                            </Link>

                            <Link to="/cart">
                                <button  className="btnContainer cartbtn text-capitalize" onClick={()=> closeModal()} >
                                    go to cart</button>
                            </Link>
                       </div>

                    </div>
                </div>

             </div>
                  )
              }
           }}
           </ProductConsumer>
			)
	}
}

export default Modal;