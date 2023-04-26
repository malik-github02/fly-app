import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import {
       faFacebookF,
       faTwitter,
       faPinterestP,
       faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Contact() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="contact">
                     <div className="container">
                            <div
                                   className="text text-center"
                                   data-aos="fade-up"
                                   data-aos-duration="2500"
                            >
                                   <h2 className="mb-4">
                                          Subscribe Newsletters & get Latest
                                          News
                                   </h2>
                                   <div className="inputs">
                                          <input
                                                 type="text"
                                                 placeholder="Enter your Email Address"
                                          />
                                          <input
                                                 type="submit"
                                                 value="Subscribe"
                                          />
                                   </div>
                            </div>
                            <div
                                   className="row mt-5"
                                   data-aos="fade-up"
                                   data-aos-duration="2500"
                            >
                                   <div className="col-md-6 col-lg-3 mb-3 text-center text-md-start">
                                          <a className="music-icon" href="#">
                                                 <FontAwesomeIcon
                                                        icon={faCompactDisc}
                                                 />
                                          </a>
                                          <p className="text-secondary mt-4 mb-4">
                                                 Your mind should be stronger
                                                 than your feelings. fly!
                                          </p>
                                          <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 social">
                                                 <li>
                                                        <a href="#">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faFacebookF
                                                                      }
                                                               />
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faTwitter
                                                                      }
                                                               />
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faFacebookMessenger
                                                                      }
                                                               />
                                                        </a>
                                                 </li>

                                                 <li>
                                                        <a href="#">
                                                               <FontAwesomeIcon
                                                                      icon={
                                                                             faPinterestP
                                                                      }
                                                               />
                                                        </a>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="col-md-6 col-lg-3 mb-3 text-center text-md-start">
                                          <h3 className="mb-3">Information</h3>
                                          <ul className="list-unstyled">
                                                 <li>
                                                        <a href="#">Home</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Explore</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Flight Status
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Travel</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Check-in</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Manage your
                                                               booking
                                                        </a>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="col-md-6 col-lg-3 mb-3 text-center text-md-start">
                                          <h3 className="mb-3">Quick Guide</h3>
                                          <ul className="list-unstyled">
                                                 <li>
                                                        <a href="#">FAQ</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">How to</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Features</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Baggage</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Route Map
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Our Communities
                                                        </a>
                                                 </li>
                                          </ul>
                                   </div>
                                   <div className="col-md-6 col-lg-3 text-center text-md-start">
                                          <h3 className="mb-3">Information</h3>
                                          <ul className="list-unstyled">
                                                 <li>
                                                        <a href="#">
                                                               Chauffeur
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Our Partners
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Destination
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">Careers</a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Transportation
                                                        </a>
                                                 </li>
                                                 <li>
                                                        <a href="#">
                                                               Programme Rules
                                                        </a>
                                                 </li>
                                          </ul>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default Contact;
