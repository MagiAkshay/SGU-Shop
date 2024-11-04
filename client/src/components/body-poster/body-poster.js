import React from "react";
import './body-poster.css';

function BodyPosterOne() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="bodyPosterOne">
        <div id="carouselExampleControls" className="carousel slide slide-background" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="img-background-tv">
                <div className="para-div">
                  <div>
                    <p className="para-slide">Hurry up! <br /> American FastFood<br /> Everyday</p>
                  </div>
                  <div>
                    <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br />Super Speed. Wash a full load in 40 minutes</p>
                    <button type="button" className="btn btn-primary">Get It Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="img-background-washing">
                <div className="para-div">
                  <div>
                    <p className="para-slide">Hurry up! <br /> American FastFood<br /> Everyday</p>
                  </div>
                  <div>
                    <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br />Super Speed. Wash a full load in 40 minutes</p>
                    <button type="button" className="btn btn-primary">Get It Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="img-background-snacks">
                <div className="para-div">
                  <div>
                    <p className="para-slide">Hurry up! <br /> American FastFood<br /> Everyday</p>
                  </div>
                  <div>
                    <p className="para-slide-two">Powerful Steam Eliminates Stains without Pre-treatment<br />Super Speed. Wash a full load in 40 minutes</p>
                    <button type="button" className="btn btn-primary">Get It Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* Second section */}
        <div className="second-div">
          <div className="image-items-headphone">
            <p className="para-featured">Featured Products</p>
            <p className="para-big-sale">Big Sale Up To 40% Off</p>
            <p className="para-items-type">Laptop, Tablet & Accessories</p>
          </div>
          <div className="image-items-wires">
            <p className="para-featured">Hot Deals Of The Weel</p>
            <p className="para-big-sale">Best Quality of Music</p>
            <p className="para-items-type">Free shipping 60km</p>
          </div>
          <div className="image-items-watch">
            <p className="para-featured">Featured Products</p>
            <p className="para-big-sale">Big Sale Up To 40% Off</p>
            <p className="para-items-type">Laptop, Tablet & Accessories</p>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="thrid-div">
        <div className="thrid-inside-div">
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/012/744/228/original/rocket-outline-icon-free-vector.jpg" className="rocket-image" alt="Free Shipping"/>
          </div>
          <div className="para-details-type">
            <span className="para-support">Free Shipping</span><br/>
            <span className="para-small">Free Shipping On All Orders</span>
          </div>
        </div>
        <div className="thrid-inside-div">
          <div>
            <img src="https://cdn.icon-icons.com/icons2/3870/PNG/512/refresh_icon_243600.png" className="refresh-image" alt="Refresh"/>
          </div>
          <div className="para-details-type">
            <span className="para-support">Easy Returns</span><br/>
            <span className="para-small">30 Days Return Policy</span>
          </div>
        </div>    
        <div className="thrid-inside-div">
          <div>
            <img src="https://icon-library.com/images/contacts-icon/contacts-icon-0.jpg" className="refresh-image" alt="Contact Us"/>
          </div>
          <div className="para-details-type">
            <span className="para-support">24/7 Support</span><br/>
            <span className="para-small">We're here to help</span>
          </div>
        </div> 
        <div className="thrid-inside-div">
          <div>
            <img src="https://tse2.mm.bing.net/th?id=OIP.exgnPG1E0PJQrNpOn1jjBQHaHa&pid=Api&P=0&h=180" className="rocket-image" alt="Fast Delivery"/>
          </div>
          <div className="para-details-type">
            <span className="para-support">Fast Delivery</span><br/>
            <span className="para-small">Delivered to your door</span>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default BodyPosterOne;
    