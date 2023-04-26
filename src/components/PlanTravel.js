import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sky_1 from '../images/sky-1.jpg';
import sky_2 from '../images/sky-2.jpg';
import sky_3 from '../images/sky-3.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
function PlanTravel() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="plan-travel">
                     <div className="container">
                            <div className="text text-center mb-5">
                                   <p className="text-secondary-emphasis first-desc">
                                          TRAVEL SUPPORT
                                   </p>
                                   <h3>Plan Your Travel With Confidence</h3>
                                   <p className="text-secondary second-desc">
                                          Find Help With Booking and Travel
                                          plans. See what to expect along the
                                          journey!
                                   </p>
                            </div>
                            <div className="travel-desc">
                                   <div className="row">
                                          <div className="col-md-5">
                                                 <div className="box-contain">
                                                        <div
                                                               className="box mb-4 text-center text-md-start"
                                                               data-aos="fade-down"
                                                               data-aos-duration="2500"
                                                        >
                                                               <span className="p-2">
                                                                      01
                                                               </span>
                                                               <h3 className="mt-3 mb-3">
                                                                      Travel
                                                                      Requirments
                                                                      For Dubai
                                                               </h3>
                                                               <p className="text-secondary">
                                                                      Find Help
                                                                      With
                                                                      Booking
                                                                      and Travel
                                                                      plans. See
                                                                      what to
                                                                      expect
                                                                      along the
                                                                      journey to
                                                                      your
                                                                      favourite
                                                                      destinations!
                                                               </p>
                                                        </div>
                                                        <div
                                                               className="box mb-4 text-center text-md-start"
                                                               data-aos="fade-down"
                                                               data-aos-duration="3500"
                                                        >
                                                               <span className="p-2">
                                                                      02
                                                               </span>
                                                               <h3 className="mt-3 mb-3">
                                                                      Chaffeur
                                                                      Services
                                                                      at Your
                                                                      Arrival
                                                               </h3>
                                                               <p className="text-secondary">
                                                                      Find Help
                                                                      With
                                                                      Booking
                                                                      and Travel
                                                                      plans. See
                                                                      what to
                                                                      expect
                                                                      along the
                                                                      journey to
                                                                      your
                                                                      favourite
                                                                      destinations!
                                                               </p>
                                                        </div>
                                                        <div
                                                               className="box mb-4 text-center text-md-start"
                                                               data-aos="fade-down"
                                                               data-aos-duration="4500"
                                                        >
                                                               <span className="p-2">
                                                                      03
                                                               </span>
                                                               <h3 className="mt-3 mb-3">
                                                                      Multi-risk
                                                                      Travel
                                                                      Insurance
                                                               </h3>
                                                               <p className="text-secondary">
                                                                      Find Help
                                                                      With
                                                                      Booking
                                                                      and Travel
                                                                      plans. See
                                                                      what to
                                                                      expect
                                                                      along the
                                                                      journey to
                                                                      your
                                                                      favourite
                                                                      destinations!
                                                               </p>
                                                        </div>
                                                 </div>
                                          </div>
                                          <div
                                                 className="col-md-7 d-flex justify-content-center"
                                                 data-aos="fade-left"
                                                 data-aos-duration="2500"
                                          >
                                                 <div className="box-images position-relative">
                                                        <img src={sky_1} />
                                                        <img src={sky_2} />
                                                        <img src={sky_3} />
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default PlanTravel;
