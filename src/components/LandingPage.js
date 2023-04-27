import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import video from '../images/sunset-153976.mp4';
import plane from '../images/pngwing.com.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
function LandingPage() {
       useEffect(() => {
              Aos.init({ duration: 2000 });
       }, []);
       return (
              <div className="landing-page pt-4">
                     <div className="container">
                            <h1
                                   className="text-center"
                                   data-aos="fade-up"
                                   data-aos-duration="2500"
                            >
                                   Create Ever-lasting
                            </h1>
                            <h3
                                   className="text-center"
                                   data-aos="fade-up"
                                   data-aos-duration="2500"
                            >
                                   Memories With Us
                            </h3>

                            <div className="video-plane m-auto mt-5 position-relative">
                                   <div className="all-video d-flex justify-content-center">
                                          <div className="only-video">
                                                 <video
                                                        autoPlay={true}
                                                        muted
                                                        loop
                                                 >
                                                        <source
                                                               src={video}
                                                               type="video/mp4"
                                                        />
                                                 </video>
                                                 <img
                                                        src={plane}
                                                        className="airplane-img"
                                                        data-aos="fade-down"
                                                        data-aos-duration="5500"
                                                 />
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}

export default LandingPage;
