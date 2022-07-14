import React, { Component } from 'react'

export default class Carousel extends Component {
  render() {
    return (
        <>
        
        <div id="carouselExampleControls" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-image-div">
                <img src="./banner1.webp" className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="./banner1.webp" className="d-block w-100 img-fluid" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="./banner1.webp" className="d-block w-100 img-fluid" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
        </>
    )
  }
}
