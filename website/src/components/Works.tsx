import React from "react";
import Image from "next/image";

function Works({ page = false }: { page?: boolean }) {
  return (
    <section className="bg_darker py-10" id="works">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="text-uppercase tc_heading-50">
              Explore our work in film, advertising, and music.
            </p>

            {page ? (
              <h1 className="mb-8">
                A Collection of Moments Told Through Light, Lens, and Motion.
              </h1>
            ) : (
              <h2 className="mb-8">
                A Collection of Moments Told Through Light, Lens, and Motion.
              </h2>
            )}
          </div>
        </div>
        <ul className="port_filter list-unstyled">
          <li>
            <a className="active" data-filter="*" href="#">
              All
            </a>
          </li>
          <li>
            <a data-filter=".wedding" href="#">
              Films
            </a>
          </li>
          <li>
            <a data-filter=".videography" href="#">
              Commercials & Ads
            </a>
          </li>
          <li>
            <a data-filter=".potrait" href="#">
              Music Videos
            </a>
          </li>
        </ul>
        <div className="row port_body">
          <div className="col-lg-4 col-md-6 port_item mb-4 wedding">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Venezuela
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">Event</p>
                    <h3>Corpo Event Highlights</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/1.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port_item mb-4 videography">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Yogyakarta
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">
                      Lifestyle
                    </p>
                    <h3>Urban Lifestyle Shoot</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/2.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port_item mb-4 potrait">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Bangkok
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">Wedding</p>
                    <h3>Golden Hour Wedding</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/3.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port_item mb-4 potrait videography">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Sydney
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">Event</p>
                    <h3>Product Launch Film</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/4.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port_item mb-4 wedding">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Singapore
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">
                      Lifestyle
                    </p>
                    <h3>Fashion Editorial</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/5.jpg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 port_item mb-4 videography wedding">
            <div className="port_box position-relative">
              <div className="port_location">
                <i className="ph ph-map-pin-area"></i>
                Bandung
              </div>
              <div className="port_content">
                <div className="port_line"></div>
                <div className="port_bottom">
                  <div className="port_detail">
                    <p className="text-uppercase tc_heading-50 mb-1">Brand</p>
                    <h3>Brand Story Video</h3>
                  </div>
                  <div className="port_link_box">
                    <a className="port_link" href="single-work.html">
                      <i className="ph ph-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="port_mask"></div>
              <Image alt="#" className="img-fluid" src="/img/works/6.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
