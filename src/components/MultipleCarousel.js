import React, { Component } from 'react'

export default class MultipleCarousel extends Component {
  render() {
    return (
        <>

        <div className='carousel-container'>

            <div className='multi-carousel mt-4'>


                <div className='carouselHeader'>

                    <div className='timeDiv'>
                        <span className='fw-bolder'>Deals Of The Day</span>
                        <span className='clockImg'><img src="./clock.png" alt="" /></span>
                        <span className='timeLeft'>23 : 10 : 50 left</span>
                    </div>

                    <div className='viewAllDiv'>

                        <button type="button" className='btn btn-primary viewAll-btn'>View All</button>

                    </div>

                </div>

                <hr />

                <div id="carouselExampleControls1" className="carousel slide mt-3" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">

                            <div class="row">



                                <div class="col-sm-3 colDiv">

                                    <img src="./caro6.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro2.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro3.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro5.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>





                            </div>


                        </div>


                        <div className="carousel-item">

                            <div class="row">



                                <div class="col-sm-3 colDiv">

                                    <img src="./caro6.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>


                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro2.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro3.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro5.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>



                            </div>


                        </div>



                        <div className="carousel-item">

                            <div class="row">



                                <div class="col-sm-3 colDiv">

                                    <img src="./caro6.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro2.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro3.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>

                                <div class="col-sm-3 colDiv">

                                    <img src="./caro5.webp" className="img-fluid" alt="..." /><br />

                                    <span className='span1'>Notebooks, pens, games...</span><br />
                                    <span className='span2'>Upto 70% Off</span><br />
                                    <span className='span3'>Grab the Best Deal</span>

                                </div>



                            </div>


                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>



            <div class="ad_div">

                <img src="./refurbished.png" alt="" className='img-fluid' />

            </div>

        </div>

    </>
    )
  }
}
