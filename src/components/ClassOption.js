import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
       faLocationDot,
       faCircleUser,
       faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ClassOption() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="class-option">
                     <div className="container d-flex justify-content-center align-items-center">
                            <div className="box p-4">
                                   <ul
                                          className="list-unstyled d-flex m-auto text-secondary-emphasis"
                                          data-aos="fade-up"
                                          data-aos-duration="2000"
                                   >
                                          <li>Economy</li>
                                          <li>First Class</li>
                                          <li>Buisness Class</li>
                                   </ul>
                                   <div
                                          className="info-contain flex-wrap  d-flex align-items-center gap-5 mt-4"
                                          data-aos="fade-up"
                                          data-aos-duration="2500"
                                   >
                                          <div className="info d-flex justify-content-center  align-items-center">
                                                 <span className="me-3 p-2">
                                                        <FontAwesomeIcon
                                                               icon={
                                                                      faLocationDot
                                                               }
                                                        />
                                                 </span>
                                                 <div>
                                                        <h3>Location</h3>
                                                        <p className="text-secondary">
                                                               Where do you want
                                                               to
                                                        </p>
                                                 </div>
                                          </div>

                                          <div className="info d-flex  align-items-center">
                                                 <span className="me-3 p-2">
                                                        <FontAwesomeIcon
                                                               icon={
                                                                      faCircleUser
                                                               }
                                                        />
                                                 </span>
                                                 <div>
                                                        <h3>Travelers</h3>
                                                        <p className="text-secondary">
                                                               Add guests
                                                        </p>
                                                 </div>
                                          </div>

                                          <div className="info d-flex  align-items-center">
                                                 <span className="me-3 p-2">
                                                        <FontAwesomeIcon
                                                               icon={
                                                                      faCalendarDays
                                                               }
                                                        />
                                                 </span>
                                                 <div>
                                                        <h3>Check In</h3>
                                                        <p className="text-secondary">
                                                               Add dot
                                                        </p>
                                                 </div>
                                          </div>

                                          <div className="info d-flex align-items-center">
                                                 <span className="me-3 p-2">
                                                        <FontAwesomeIcon
                                                               icon={
                                                                      faCalendarDays
                                                               }
                                                        />
                                                 </span>
                                                 <div>
                                                        <h3>Check Out</h3>
                                                        <p className="text-secondary">
                                                               Add dot
                                                        </p>
                                                 </div>
                                          </div>

                                          <button className="btn main-btn">
                                                 Search Flight
                                          </button>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default ClassOption;
