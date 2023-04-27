import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Features() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="features">
                     <div className="container">
                            <div className="text text-center flex-column flex-md-row d-flex align-items-center justify-content-between mb-4">
                                   <h3
                                          className="fs-1 mb-4"
                                          data-aos="fade-right"
                                          data-aos-duration="2500"
                                   >
                                          Travel To Make Memories All <br />{' '}
                                          around The World
                                   </h3>
                                   <button
                                          className="btn main-btn"
                                          data-aos="fade-left"
                                          data-aos-duration="2500"
                                   >
                                          view all
                                   </button>
                            </div>
                            <div className="all-features">
                                   <div className="row">
                                          <div
                                                 className="col-md-6 col-lg-4 mb-4"
                                                 data-aos="fade-up"
                                                 data-aos-duration="2500"
                                          >
                                                 <div className="feature blue m-auto bg-light text-center">
                                                        <span className="d-flex justify-content-center align-items-center m-auto rounded-circle ">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faCalendarDays
                                                                      }
                                                               />
                                                        </span>
                                                        <h3 className="mb-4 mt-4">
                                                               Book & Relax
                                                        </h3>
                                                        <p>
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket
                                                        </p>
                                                 </div>
                                          </div>
                                          <div
                                                 className="col-md-6 col-lg-4 mb-4"
                                                 data-aos="fade-up"
                                                 data-aos-duration="2500"
                                          >
                                                 <div className="feature red m-auto bg-light text-center">
                                                        <span className="d-flex justify-content-center align-items-center m-auto rounded-circle ">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faCalendarDays
                                                                      }
                                                               />
                                                        </span>
                                                        <h3 className="mb-4 mt-4">
                                                               Book & Relax
                                                        </h3>
                                                        <p>
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket
                                                        </p>
                                                 </div>
                                          </div>
                                          <div
                                                 className="col-md-6 col-lg-4 mb-4"
                                                 data-aos="fade-up"
                                                 data-aos-duration="2500"
                                          >
                                                 <div className="feature yellow m-auto bg-light text-center">
                                                        <span className="d-flex justify-content-center align-items-center m-auto rounded-circle ">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faCalendarDays
                                                                      }
                                                               />
                                                        </span>
                                                        <h3 className="mb-4 mt-4">
                                                               Book & Relax
                                                        </h3>
                                                        <p>
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default Features;
