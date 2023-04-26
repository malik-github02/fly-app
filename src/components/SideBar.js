import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function SideBar({ show, handleActive }) {
       return (
              <div className={show ? 'side-bar active' : 'side-bar'}>
                     <div className="container d-flex justify-content-center align-items-center h-100">
                            <span className="close" onClick={handleActive}>
                                   X
                            </span>
                            <ul className="list-unstyled text-center">
                                   <li className="p-4">
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Home
                                          </a>
                                   </li>
                                   <li className="p-4">
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 About
                                          </a>
                                   </li>
                                   <li className="p-4">
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Offers
                                          </a>
                                   </li>
                                   <li className="p-4">
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Seats
                                          </a>
                                   </li>
                                   <li className="p-4">
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Destinations
                                          </a>
                                   </li>
                                   <button className="main-btn btn">
                                          Contact
                                   </button>
                            </ul>
                     </div>
              </div>
       );
}

export default SideBar;
