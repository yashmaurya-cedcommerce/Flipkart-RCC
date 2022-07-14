import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <>
    
   
        <nav className="navbar navbar-expand-lg navbar-dark">
        
        <div className="container">
            
            <a className="navbar-brand me-0" href="/#"><img id="flipkart-logo"
                src="./flipkart_logo.png" alt="flipkart-logo"
                draggable="false" height="30" />
                
            </a>
            
            
            
    
            <form className="d-flex align-items-center w-50 form-search">
                <div className="input-group">
                
                
                <input type="search" className="form-control searchBar" placeholder="Search for products, brands and more" aria-label="Search" />
                </div>
                <a href="#!" className="text-primary search-btn"><i className="fas fa-search ms-0"></i></a>
            </form>
    
            <div className="d-flex flex-row bd-highlight navbarLinks">
                <div className="bd-highlight py-2">
    
                    <button type="button" className="loginButton btn btn-light text-primary px-4 fw-bold">Login</button>
    
                </div>
    
    
                <div className="bd-highlight py-3 fw-bold">
                <a className="px-3 text-light" href="/#">Become a Seller</a>
                </div>
    
    
                <div className="bd-highlight py-3 fw-bold">
                <a className="align-items-center px-2 text-light" href="#!">
                    <i className="fas fa-bookmark pe-1 text-light"></i> More
                </a>
                </div>
    
    
                <div className="bd-highlight py-3 fw-bold">
                <a className="align-items-center px-2 text-light" href="#!">
    
                    <i class="fa-solid fa-cart-shopping pe-1 text-light"></i>
                    Cart
                </a>
                </div>
    
    
            </div>
            {/* </div> */}
            
        </div>
        </nav>
        
        </>
    )
  }
}
