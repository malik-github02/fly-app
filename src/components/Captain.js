import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import captain_1 from '../images/captain-1.jpg';
import captain_2 from '../images/captain-2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Captain() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="captain">
                     <div className="container">
                            <div className="row">
                                   <div className="col-lg-7 order-2 order-md-1 text-center text-md-start">
                                          <h2 className="mb-4">
                                                 Unaccompained Minor Lounge
                                          </h2>
                                          <div className="row">
                                                 <div
                                                        className="col-md-6"
                                                        data-aos="fade-down"
                                                        data-aos-duration="2500"
                                                 >
                                                        <h5>
                                                               Help Through Thr
                                                               airport
                                                        </h5>
                                                        <p className="text-secondary lh-base">
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket to one of
                                                               your favourite
                                                               destinations
                                                        </p>
                                                 </div>
                                                 <div
                                                        className="col-md-6"
                                                        data-aos="fade-down"
                                                        data-aos-duration="2500"
                                                 >
                                                        <h5>
                                                               Priority Boarding
                                                        </h5>
                                                        <p className="text-secondary lh-base">
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket to one of
                                                               your favourite
                                                               destinations
                                                        </p>
                                                 </div>
                                                 <div
                                                        className="col-md-6"
                                                        data-aos="fade-down"
                                                        data-aos-duration="2500"
                                                 >
                                                        <h5>
                                                               Care on The
                                                               Flight
                                                        </h5>
                                                        <p className="text-secondary lh-base">
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket to one of
                                                               your favourite
                                                               destinations
                                                        </p>
                                                 </div>
                                                 <div
                                                        className="col-md-6"
                                                        data-aos="fade-down"
                                                        data-aos-duration="2500"
                                                 >
                                                        <h5>
                                                               Chauffeur-drive
                                                               Service
                                                        </h5>
                                                        <p className="text-secondary lh-base">
                                                               You can also call
                                                               airlines from
                                                               your phone and
                                                               book a flight
                                                               ticket to one of
                                                               your favourite
                                                               destinations
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                                   <div
                                          className="col-lg-5 d-md-flex justify-content-center order-1 order-md-2"
                                          data-aos="fade-left"
                                          data-aos-duration="2500"
                                   >
                                          <div className="images">
                                                 <img src={captain_2} />
                                                 <img src={captain_1} />
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default Captain;
