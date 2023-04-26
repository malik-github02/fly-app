import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
       faCompactDisc,
       faLifeRing,
       faGlobe,
} from '@fortawesome/free-solid-svg-icons';
function FirstNavbar() {
       return (
              <div className="first-nav p-3 sticky-top">
                     <div className="container d-flex justify-content-between align-items-center">
                            <a className="music-icon" href="#">
                                   <FontAwesomeIcon icon={faCompactDisc} />
                            </a>
                            <ul className="list-unstyled d-none m-0 gap-3 d-md-flex">
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary"
                                          >
                                                 <span className="me-2">
                                                        <FontAwesomeIcon
                                                               icon={faLifeRing}
                                                        />
                                                 </span>
                                                 <span>Support</span>
                                          </a>
                                   </li>
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary"
                                          >
                                                 <span className="me-2">
                                                        <FontAwesomeIcon
                                                               icon={faGlobe}
                                                        />
                                                 </span>
                                                 <span>Languages</span>
                                          </a>
                                   </li>
                            </ul>
                            <ul className="list-unstyled d-flex m-0 gap-3">
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary"
                                          >
                                                 Sign In
                                          </a>
                                   </li>
                                   <li>
                                          <a
                                                 href="#"
                                                 className="text-secondary"
                                          >
                                                 Sign Out
                                          </a>
                                   </li>
                            </ul>
                     </div>
              </div>
       );
}

export default FirstNavbar;
