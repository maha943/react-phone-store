import React , {Component} from "react";
import {ProductConsumer} from "../Context";
import{Link} from "react-router-dom";

class Details extends Component{
	render(){
		return (
           <ProductConsumer>
            {value =>{
			const { id ,price ,company , title , img , info ,inCart} = value.detailProduct;
             return (
				 <div className="container py-5">
					 <div className="row">
						 
			          <div className="col-10 text-blue mx-auto text-center text-capitalize my-5 text-slanted">
						  <h1> {title}</h1>
					  </div>
					 </div>
					 <div className="row">
						 <div className="col-10 mx-auto col-md-6 my-3">
                              <img src={img} alt="product" className="img-fluid"/>
						 </div>

						 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
							 <h2>Model : {title}</h2>
							 <h4 className="text-title text-muted text-uppercase mt-3 mb-2 ">
								 made by : <span className="text-uppercase">{company}</span>
							 </h4>
							 <h4 className="text-blue">
								 <strong>
								Price : <span>$</span> {price} 
								</strong>
							 </h4>
							 <p className="text-capitalize font-weight-bold mt-3 mb-0">
								 some info about product
							 </p>
							 <p className="text-muted lead">
								 {info}
							 </p>
							 {/*buttons*/}
							 <div>
								 <Link to="/" >
									 <button className="btnContainer">
										 back to products
									 </button>
								 </Link>
								 <button className="btnContainer cartbtn" disabled={inCart? true : false} 
								 onClick={()=>{
									 value.addToCart(id);
									 value.openModal(id);
									 
                                      
								 }}>
									 {inCart ? "in cart" : "add to cart"}
								 
								 </button>
							 </div>
						 </div>
					 </div>
				 </div>
			 )

			}}
            </ProductConsumer>
			)
	}
}

export default Details;