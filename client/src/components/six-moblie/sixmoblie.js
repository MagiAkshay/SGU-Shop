import React, { useState, useEffect } from "react";
import './sixmobile.css'
import AddCart from "../Add-Cart/addCart";


import FindId from "../FindID/findbyid";
import { Link } from "react-router-dom";



function SixMoblie() {
  

    const [loading, setLoading] = useState(false);
  
    const handleAddCartClick = () => {
      
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 200); // Simulate some delay for the loader
    };
    const [showSecondImage, setShowSecondImage] = useState(false);
    const handleMouseMove = () => {
        setShowSecondImage(true);
      };
    
      const handleMouseLeave = () => {
        setShowSecondImage(false);
      };

    return(
      
        <div>
            
            <div className="top-deals-div">
                <span className="top-deals">Top Deals Of The Day</span>
            </div>
            

            <div className="six-mobile-div">
            <Link to="/find-id" className="link-tag">
            <div className="each-mobile-div" style={{ marginLeft: "50px" }}>

               <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div></Link>


                <Link to="/find-id" className="link-tag">
                <div className="each-mobile-div">

                <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div></Link>

                <Link to="/find-id" className="link-tag">
                <div className="each-mobile-div" >

                <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div></Link>


                <Link to="/find-id" className="link-tag">
                <div className="each-mobile-div" >

                <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div>
                </Link>


                <Link to="/find-id" className="link-tag">
                <div className="each-mobile-div" >

                <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div>
                </Link>

                <Link to="/find-id" className="link-tag">
                <div className="each-mobile-div">

                <div>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="btn-mobile"
          >
            <div className="btb-image-change">
              {showSecondImage ? (
                <div className="image-icon-div">
                  <div>
                    <img
                      src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_2.jpg?v=1697644653"
                      alt="Second Image"
                      className="six-mobile-image"
                    />
                  </div>
                  <div className="icon-mobile-div">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.mnwz82yom-isoIarPAWoSwHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.vuWB39fUFnaGup8182k9XAHaHa&pid=Api&P=0&h=180"
                      className="heart-icons-mobile"
                    />
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/000/576/623/original/eye-icon-vector-illustration.jpg"
                      className="heart-icons-mobile"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <img
                    src="https://demo-morata.myshopify.com/cdn/shop/products/products_5_1.jpg?v=1697644653"
                    alt="First Image"
                    className="six-mobile-image"
                  />
                </div>
              )}
            </div>
          </button>
                 </div>

                 <div className="decription-sixmobile-div">
                    <div >
                        <h6>Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB</h6>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.asZ3_cc6V-RSE5ejL7PjfgHaHa&pid=Api&P=0&h=180"
                            className="star-icon-moblie"
                        />
                        
                        &nbsp;&nbsp;&nbsp;<span>2 Reviews</span><br/>
                        <span>${210}</span><br />
                    
                        <button
                         type="button"
                        class="btn btn-dark btm-six-mobiles"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onClick={handleAddCartClick}
              
                        >
              Add Cart
                        </button>
                        
            {loading ? <div className="loader"></div> : ""}
            <AddCart />
           
                    </div>
                 </div>

                </div>
                </Link>
            </div>
        </div>
       
    )
}

export default SixMoblie;

