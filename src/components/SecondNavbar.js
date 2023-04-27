import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import SideBar from './SideBar';

function SecondNavbar() {
       let [show, setShow] = useState(false);
       let handleActive = () => {
              setShow(false);
       };

       return (
              <div className="second-nav p-3">
                     <div className="container d-flex justify-content-between align-items-center">
                            <SideBar show={show} handleActive={handleActive} />
                            <img src={logo} />
                            <ul className="list-unstyled d-none d-md-flex align-items-center gap-5">
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Home
                                          </a>
                                   </li>
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 About
                                          </a>
                                   </li>
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Offers
                                          </a>
                                   </li>
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary-emphasis"
                                          >
                                                 Seats
                                          </a>
                                   </li>
                                   <li>
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
                            <span
                                   className="d-md-none"
                                   onClick={() => setShow(true)}
                            >
                                   <FontAwesomeIcon
                                          icon={faBarsStaggered}
                                          className="fs-4"
                                   />
                            </span>
                     </div>
              </div>
       );
}

export default SecondNavbar;
