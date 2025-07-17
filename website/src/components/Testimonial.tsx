import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <section className="bg_darker" id="testimonial">
      <div className="container">
        <div className="testi_slider mx-lg-10 rounded-2 testi_outer shadow-sm overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide bg_dark align-content-center d-flex">
              <Image alt="" className="testi_img" src="img/about/ava1.jpg" />
              <div className="testi_content">
                <p className="tc_heading">
                  Working with this team was a fantastic experience. They
                  perfectly captured the emotions and moments that mattered most
                  to us. The final video brought our story to life in the most
                  meaningful way.
                </p>
                <ul className="list-unstyled d-flex align-items-center testi_info">
                  <li>
                    <i className="ph ph-user-circle"></i>
                    Lina Prasque
                  </li>
                  <li>
                    <i className="ph ph-briefcase-metal"></i>
                    Web Journalist
                  </li>
                </ul>
              </div>
            </div>
            <div className="swiper-slide bg_dark align-content-center d-flex">
              <Image alt="" className="testi_img" src="img/about/ava2.jpg" />
              <div className="testi_content">
                <p className="tc_heading">
                  The creativity and detail were exceptional. Every moment was
                  beautifully captured, and the final product far exceeded our
                  expectations. Highly recommend for anyone looking for
                  professional, stunning work.
                </p>
                <ul className="list-unstyled d-flex align-items-center testi_info">
                  <li>
                    <i className="ph ph-user-circle"></i>
                    Thomas Brain
                  </li>
                  <li>
                    <i className="ph ph-briefcase-metal"></i>
                    Studio Director
                  </li>
                </ul>
              </div>
            </div>
            <div className="swiper-slide bg_dark align-content-center d-flex">
              <Image alt="" className="testi_img" src="img/about/ava3.jpg" />
              <div className="testi_content">
                <p className="tc_heading">
                  From start to finish, everything was seamless. They understood
                  my vision completely and delivered results that were beyond
                  anything I could have imagined. The professionalism and
                  artistry were truly top-notch.
                </p>
                <ul className="list-unstyled d-flex align-items-center testi_info">
                  <li>
                    <i className="ph ph-user-circle"></i>
                    Tina Ruzy
                  </li>
                  <li>
                    <i className="ph ph-briefcase-metal"></i>
                    Author/Podcaster
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <i className="ph ph-sparkle testi_icon"></i>
          <ul className="testi_nav list-unstyled mb-0">
            <li className="prev cursor_big">
              <i className="ph ph-arrow-left"></i>
            </li>
            <li className="next cursor_big">
              <i className="ph ph-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
