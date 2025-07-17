import React from "react";
import Image from "next/image";

function Services({ page = false }: { page?: boolean }) {
  return (
    <section className="py-10 bg_dark" id="services">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="text-uppercase tc_heading-50">
              Our Services, Your Vision
            </p>
            {page ? (
              <h1 className="mb-4">
                Full-Service Production, Start to Finish.
              </h1>
            ) : (
              <h2 className="mb-4">
                Full-Service Production, Start to Finish.
              </h2>
            )}
            <p className="mb-8">
              High-end cinematic production for brands, artists, and filmmakers
              who care about visual storytelling.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="services_tab">
          <div className="tab-content">
            <div
              aria-labelledby="sv_one_tab"
              className="tab-pane show active fade"
              id="services_one"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="sv_tab_box shadow-sm">
                <div className="sv_tab_content">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <span className="tab_icon">
                        <i className="ph ph-flower-tulip"></i>
                        From concept to storyboard.
                      </span>
                      <h3 className="fs-2">Creative Development</h3>
                      <p>
                        We help shape your vision into a cinematic blueprint
                        with scriptwriting, treatments, and shot planning that
                        guide everything that follows.
                      </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <ul className="list-unstyled sv_tab_list">
                        <li>
                          <Image alt="" src="img/services/small1.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>How do I book a session?</h4>
                            <p>
                              You can book a session by contacting me through
                              the website’s contact form.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Image alt="" src="img/services/small2.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>Do you travel for shoots?</h4>
                            <p>
                              Travel fees may apply depending on the location.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Image
                  alt=""
                  className="services_tab_img"
                  src="img/services/1.jpg"
                />
              </div>
            </div>
            <div
              aria-labelledby="sv_two_tab"
              className="tab-pane show fade"
              id="services_two"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="sv_tab_box shadow-sm">
                <div className="sv_tab_content">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <span className="tab_icon">
                        <i className="ph ph-flower-tulip"></i>
                        Where story meets camera.
                      </span>
                      <h3 className="fs-2">Production</h3>
                      <p>
                        On set, we bring your project to life with top-tier
                        cinematography, direction, and crew—capturing visuals
                        that feel as good as they look.
                      </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <ul className="list-unstyled sv_tab_list">
                        <li>
                          <Image alt="" src="img/services/small1.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>How do I book a session?</h4>
                            <p>
                              You can book a session by contacting me through
                              the website’s contact form.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Image alt="" src="img/services/small2.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>Do you travel for shoots?</h4>
                            <p>
                              Travel fees may apply depending on the location.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Image
                  alt=""
                  className="services_tab_img"
                  src="img/services/4.jpg"
                />
              </div>
            </div>
            <div
              aria-labelledby="sv_three_tab"
              className="tab-pane show fade"
              id="services_three"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="sv_tab_box shadow-sm">
                <div className="sv_tab_content">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <span className="tab_icon">
                        <i className="ph ph-flower-tulip"></i>
                        Polished. Cinematic. Complete.
                      </span>
                      <h3 className="fs-2">Post-Production</h3>
                      <p>
                        From editing to color grading and sound design, we
                        refine every frame until your project is ready to move
                        audiences.
                      </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <ul className="list-unstyled sv_tab_list">
                        <li>
                          <Image alt="" src="img/services/small1.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>How do I book a session?</h4>
                            <p>
                              You can book a session by contacting me through
                              the website’s contact form.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Image alt="" src="img/services/small2.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>Do you travel for shoots?</h4>
                            <p>
                              Travel fees may apply depending on the location.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Image
                  alt=""
                  className="services_tab_img"
                  src="img/services/3.jpg"
                />
              </div>
            </div>
            <div
              aria-labelledby="sv_four_tab"
              className="tab-pane show fade"
              id="services_four"
              role="tabpanel"
              tabIndex={0}
            >
              <div className="sv_tab_box shadow-sm">
                <div className="sv_tab_content">
                  <div className="row align-items-end">
                    <div className="col-lg-6">
                      <span className="tab_icon">
                        <i className="ph ph-flower-tulip"></i>
                        Fast-paced storytelling, tailored for impact.
                      </span>
                      <h3 className="fs-2">Commercials & Music Videos</h3>
                      <p>
                        We specialize in branded content and music visuals that
                        cut through the noise—crafted for both screen and soul.
                      </p>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                      <ul className="list-unstyled sv_tab_list">
                        <li>
                          <Image alt="" src="img/services/small1.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>How do I book a session?</h4>
                            <p>
                              You can book a session by contacting me through
                              the website’s contact form.
                            </p>
                          </div>
                        </li>
                        <li>
                          <Image alt="" src="img/services/small2.jpg" />
                          <div className="sv_tab_list_content">
                            <h4>Do you travel for shoots?</h4>
                            <p>
                              Travel fees may apply depending on the location.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Image
                  alt=""
                  className="services_tab_img"
                  src="img/services/2.jpg"
                />
              </div>
            </div>
          </div>
          <ul
            className="d-flex list-unstyled services_nav_box shadow-sm"
            role="tablist"
          >
            <li className="col-lg-3 col-sm-6" role="presentation">
              <div
                aria-controls="services_one"
                aria-selected="true"
                className="sv_tab_link cursor_big active"
                data-bs-target="#services_one"
                data-bs-toggle="tab"
                id="sv_one_tab"
                role="tab"
              >
                <h4>Creative Development</h4>
                <p>From concept to storyboard.</p>
                <i className="ph ph-confetti"></i>
              </div>
            </li>
            <li className="col-lg-3 col-sm-6" role="presentation">
              <div
                aria-controls="services_two"
                aria-selected="false"
                className="sv_tab_link cursor_big"
                data-bs-target="#services_two"
                data-bs-toggle="tab"
                id="sv_two_tab"
                role="tab"
              >
                <h4>Production</h4>
                <p>Where story meets camera.</p>
                <i className="ph ph-chart-donut"></i>
              </div>
            </li>
            <li className="col-lg-3 col-sm-6" role="presentation">
              <div
                aria-controls="services_three"
                aria-selected="false"
                className="sv_tab_link cursor_big"
                data-bs-target="#services_three"
                data-bs-toggle="tab"
                id="sv_three_tab"
                role="tab"
              >
                <h4>Post-Production</h4>
                <p>Polished. Cinematic. Complete.</p>
                <i className="ph ph-cheers"></i>
              </div>
            </li>
            <li className="col-lg-3 col-sm-6" role="presentation">
              <div
                aria-controls="services_four"
                aria-selected="false"
                className="sv_tab_link cursor_big"
                data-bs-target="#services_four"
                data-bs-toggle="tab"
                id="sv_four_tab"
                role="tab"
              >
                <h4>Commercials & Music Videos</h4>
                <p>Fast-paced storytelling, tailored for impact.</p>
                <i className="ph ph-chair"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="d-flex mt-10 align-items-stretch flex-lg-row flex-column">
          <div className="col-lg-6 col-12">
            <div className="position-relative h-100">
              <div className="eq_heading shadow-sm">
                <p className="text-uppercase tc_heading-50">
                  Cutting-Edge Technology
                </p>
                <h2 className="fs-4 mb-0 fw-normal">
                  Equipment that elevates every shot i take
                </h2>
              </div>
              <div className="img_eq" data-list="eq_lists_one">
                <Image alt="" src="img/services/eq1.jpg" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <ul className="list-unstyled eq_lists" data-list="eq_lists_one">
              <li
                className="eq_list cursor_big active"
                data-image="img/services/eq1.jpg"
              >
                <i className="ph ph-webcam"></i>
                <div className="eq_list_content">
                  <p className="eq_sub">Camera Used</p>
                  <h3 className="fs-4">Canon EOS 5D Mark IV</h3>
                  <p>
                    Versatile cameras for both photography and videography with
                    excellent low-light performance.
                  </p>
                </div>
              </li>
              <li
                className="eq_list cursor_big"
                data-image="img/services/eq2.jpg"
              >
                <i className="ph ph-aperture"></i>
                <div className="eq_list_content">
                  <p className="eq_sub">Lenses Used</p>
                  <h3 className="fs-4">Sony FE 35mm f/1.8</h3>
                  <p>
                    Versatile lenses for events, weddings, and landscapes,
                    providing flexibility with focal lengths.
                  </p>
                </div>
              </li>
              <li
                className="eq_list cursor_big"
                data-image="img/services/eq3.jpg"
              >
                <i className="ph ph-beanie"></i>
                <div className="eq_list_content">
                  <p className="eq_sub">Lighting Used</p>
                  <h3 className="fs-4">Godox SL60W</h3>
                  <p>
                    Used to soften and diffuse light, ensuring even lighting for
                    portraits and product photography.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
