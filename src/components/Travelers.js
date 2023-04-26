import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import paris from '../images/paris.jpg';
import newYork from '../images/newYork.jpg';
import qatar from '../images/qatar.jpg';
import burjAlarab from '../images/burj-alarab.jpg';
import avatar_1 from '../images/avatar02.jpg';
import avatar_2 from '../images/avatar04.png';
import avatar_3 from '../images/avatar06.jpg';
import avatar_4 from '../images/avatar03.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Travelers() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="travelers">
                     <div className="container">
                            <h3
                                   className="text-center mb-5"
                                   data-aos="fade-down"
                                   data-aos-duration="2500"
                            >
                                   Top Travelers Of This month!
                            </h3>
                            <div
                                   className="row"
                                   data-aos="fade-up"
                                   data-aos-duration="2500"
                            >
                                   <div className="col-md-6 col-lg-3 d-flex justify-content-center mb-5">
                                          <div className="travel-box position-relative">
                                                 <img
                                                        src={newYork}
                                                        alt="place"
                                                        className="place"
                                                 />
                                                 <img
                                                        src={avatar_4}
                                                        alt="avatar"
                                                        className="avatar"
                                                 />
                                                 <div className="text">
                                                        <h3>malik</h3>
                                                        <p className="text-secondary">
                                                               malik
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="col-md-6 col-lg-3 d-flex justify-content-center mb-5">
                                          {' '}
                                          <div className="travel-box position-relative">
                                                 <img
                                                        src={paris}
                                                        alt="place"
                                                        className="place"
                                                 />
                                                 <img
                                                        src={avatar_3}
                                                        alt="avatar"
                                                        className="avatar"
                                                 />
                                                 <div className="text">
                                                        <h3>malik</h3>
                                                        <p className="text-secondary">
                                                               malik
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="col-md-6 col-lg-3 d-flex justify-content-center mb-5">
                                          {' '}
                                          <div className="travel-box position-relative">
                                                 <img
                                                        src={qatar}
                                                        alt="place"
                                                        className="place"
                                                 />
                                                 <img
                                                        src={avatar_2}
                                                        alt="avatar"
                                                        className="avatar"
                                                 />
                                                 <div className="text">
                                                        <h3>malik</h3>
                                                        <p className="text-secondary">
                                                               malik
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                                   <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                                          {' '}
                                          <div className="travel-box position-relative">
                                                 <img
                                                        src={burjAlarab}
                                                        alt="place"
                                                        className="place"
                                                 />
                                                 <img
                                                        src={avatar_1}
                                                        alt="avatar"
                                                        className="avatar"
                                                 />
                                                 <div className="text">
                                                        <h3>malik</h3>
                                                        <p className="text-secondary">
                                                               malik
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default Travelers;
