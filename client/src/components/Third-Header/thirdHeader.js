import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./thirdHeader.css";

function ThirdHeader() {
  const [showModal, setShowModal] = useState(false);
  const [showSubModal, setShowSubModal] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State to handle fixed class

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setShowModal(true);
    setShowSubModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSubModal(false);
  };

  return (
    <div className={`btn-menu-div ${isFixed ? 'fixed' : ''}`}>
      <button
        type="button"
        className="btn-menu"
        onClick={handleMenuClick}
      >
        <span>Shop By Department</span>
        <span className="img-menu">
          <i className="fas fa-bars"></i>
        </span>
      </button>

      {/* Main Modal */}
      {showModal && (
        <div className="modal model-move" onClick={handleCloseModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content modal-length">
              <Link to="/products/computers" className="btn btn-light madal-btn-style">
                Computer & Desktop <span className="less-then">{`>`}</span>
              </Link>
              <Link to="/products/laptops" className="btn btn-light madal-btn-style">
                Laptops & Iap
              </Link>
              <Link to="/products/cameras" className="btn btn-light madal-btn-style">
                Cameras & Photos
              </Link>
              <Link to="/products/smartphones" className="btn btn-light madal-btn-style">
                Smart Phones & Tablets
              </Link>
              <Link to="/products/home-kitchen" className="btn btn-light exact-madal">
                Home & Kitchen
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sub Modal */}
      {showSubModal && (
        <div className="modal model-move-one" onClick={handleCloseModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content modal-length">
              <Link to="/products/computers" className="btn btn-light exact-madal">
                Computer
              </Link>
              <Link to="/products/laptops" className="btn btn-light exact-madal">
                Laptop
              </Link>
              <Link to="/products/mobiles" className="btn btn-light exact-madal">
                Mobiles
              </Link>
              <Link to="/products/photos" className="btn btn-light exact-madal">
                Photos
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="middleMenu">
        <div>
          <ul className="navbar-nav nav-items-anchor">
            <li className="nav-item line-items">
              <a className="nav-link anchor" onClick={() => setShowSubModal(true)}>
                HOME
              </a>

              {showSubModal && (
                <div className="modal home-move-modal" onClick={handleCloseModal}>
                  <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-content content-length">
                      <ul>
                        <li className="dot-remove">Home 1</li>
                        <li className="dot-remove">Home 2</li>
                        <li className="dot-remove">Home 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="nav-item line-items">
              <Link className="nav-link anchor" to="/shop">
                SHOP
              </Link>
            </li>

            <li className="nav-item line-items">
              <Link className="nav-link anchor" to="/products">
                PRODUCT
              </Link>
            </li>

            <li className="nav-item line-items">
              <Link className="nav-link anchor" to="/pages">
                PAGES
              </Link>
            </li>

            <li className="nav-item line-items">
              <Link className="nav-link anchor" to="/blog">
                BLOG
              </Link>
            </li>
            <li className="nav-item line-items">
              <Link className="nav-link anchor" to="/contact">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bell-icons-div">
        <div>
          <img src="https://icon-library.com/images/bell-icon-png/bell-icon-png-16.jpg" className="bell-icons" alt="Bell Icon" />
          <span className="span-bell-text">Hotline: (+100) 123 456 7890</span>
        </div>
      </div>
    </div>
  );
}

export default ThirdHeader;
