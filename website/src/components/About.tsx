import React from "react";
import Image from "next/image";

function About({ page = false }: { page?: boolean }) {
  return (
    <section className="py-10 bg_darker" id="about">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="text-uppercase tc_heading-50">
              We are filmmakers, not just videographers.
            </p>
            {page ? (
              <h1 className="mb-4">
                The Cinematic Architects Behind Every Frame
              </h1>
            ) : (
              <h2 className="mb-4">
                The Cinematic Architects Behind Every Frame
              </h2>
            )}
            <p className="mb-8">
              Solstice Cinematics is based in Toronto, built by passionate
              creatives who’ve worked in studios, indie sets, and music
              trenches. We combine cinematic direction with grounded production
              knowledge to make work that moves people.
            </p>
          </div>
          <div className="clearfix mb-4"></div>
          <div className="col-lg-4 position-relative mb-4">
            <div className="p-4 bg_dark about_box overflow-hidden">
              <div className="about_stats_top">
                <h2 className="about_stats mb-4">
                  <span className="zs_count" data-end="612"></span>
                  <span className="tc_primary">+</span>
                </h2>
                <p className="text-uppercase tc_heading">Projects finished</p>
                <p className="mb-4">
                  Our mission is to produce visually arresting content that
                  balances story and aesthetic.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <ul
                  className="list-unstyled d-flex flex-row about_ava_list"
                  data-cues="slideInUp"
                >
                  <li>
                    <Image
                      alt=""
                      className="img-fluid shadow-sm"
                      src="img/about/ava1.jpg"
                    />
                  </li>
                  <li>
                    <Image
                      alt=""
                      className="img-fluid shadow-sm"
                      src="img/about/ava2.jpg"
                    />
                  </li>
                  <li>
                    <Image
                      alt=""
                      className="img-fluid shadow-sm"
                      src="img/about/ava3.jpg"
                    />
                  </li>
                </ul>
                <a className="about_arrow_link go_btn" href="#video">
                  <Image
                    alt=""
                    className="img-fluid"
                    src="img/about/arrow.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="about_detail">
              <a className="about_link" href="#!">
                <i className="ph ph-read-cv-logo"></i>
                Download My Resume
              </a>
              <div className="about_detail_bottom">
                <div className="about_line"></div>
                <p className="text-uppercase tc_heading mb-1 lh-1">
                  Creative Director
                </p>
                <h3 className="mb-0 lh-1 fw-normal">Zusee Lyn</h3>
              </div>
              <Image alt="" className="about_me_img" src="img/about/1.jpg" />
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <p className="text-uppercase tc_heading-50 mb-1">
              My Creative Toolkit
            </p>
            <h3 className="mb-4 fw-normal">
              The tools behind creating the magic
            </h3>
            <p className="mb-4">
              I use industry-leading software to edit, refine, and perfect every
              photo and video.
            </p>
            <ul className="list-unstyled tool_list">
              <li>
                <Image alt="" src="img/about/ph.png" />
                <div>
                  <p className="text-uppercase tc_heading mb-0">
                    Adobe Photoshop
                  </p>
                  <p>Advanced Post-Processing.</p>
                </div>
              </li>
              <li>
                <Image alt="" src="img/about/ae.png" />
                <div>
                  <p className="text-uppercase tc_heading mb-0">After Effect</p>
                  <p>Motion Graphics &amp; Visual Effects.</p>
                </div>
              </li>
              <li>
                <Image alt="" src="img/about/final.png" />
                <div>
                  <p className="text-uppercase tc_heading mb-0">
                    Final cut Pro
                  </p>
                  <p>Cinematic Video Editing.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-4">
            <div className="about_slider overflow-hidden position-relative">
              <a
                className="video_link popup_video shadow-sm"
                href="https://www.youtube.com/watch?v=Ultk2c4D5WY"
              >
                <i className="ph ph-play"></i>
              </a>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Image alt="" className="img-fluid" src="img/about/2.jpg" />
                </div>
                <div className="swiper-slide">
                  <Image alt="" className="img-fluid" src="img/about/3.jpg" />
                </div>
                <div className="swiper-slide">
                  <Image alt="" className="img-fluid" src="img/about/4.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p-4 bg_dark rounded-2 shadow-sm position-relative overflow-hidden">
              <p className="text-uppercase tc_heading-50 mb-1">
                highlight &amp; accomplishments
              </p>
              <h3 className="fw-normal">Awards &amp; Recognition</h3>
              <p className="mb-4">
                I’m proud to have received recognition for my photography and
                videography, from award-winning projects to features in top
                publications.
              </p>
              <div className="d-flex gap-2 flex-column flex-md-row">
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled d-flex flex-column abt_list">
                    <li data-cue="slideInUp">
                      <span className="achiv_icon">
                        <i className="ph ph-trophy"></i>
                      </span>
                      Award-Winning Photography
                    </li>
                    <li data-cue="slideInUp" data-delay="200">
                      <span className="achiv_icon">
                        <i className="ph ph-certificate"></i>
                      </span>
                      Certified Professional
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="list-unstyled d-flex flex-column abt_list">
                    <li data-cue="slideInUp" data-delay="100">
                      <span className="achiv_icon">
                        <i className="ph ph-article"></i>
                      </span>
                      Featured in The Verse
                    </li>
                    <li data-cue="slideInUp" data-delay="300">
                      <span className="achiv_icon">
                        <i className="ph ph-clover"></i>
                      </span>
                      Collaborated with Convarse
                    </li>
                  </ul>
                </div>
              </div>
              <svg
                className="achiv_svg"
                fill="var(--rdn-heading-color)"
                height="9rem"
                viewBox="0 0 256 256"
                width="9rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207,44H49A13,13,0,0,0,36,57v49.21A13,13,0,0,0,43.62,118l70.72,32.14a44,44,0,1,0,27.32,0L212.38,118A13,13,0,0,0,220,106.21V57A13,13,0,0,0,207,44Zm-43,8v79.24l-36,16.37L92,131.24V52ZM44,106.21V57a5,5,0,0,1,5-5H84v75.61L46.93,110.76A5,5,0,0,1,44,106.21ZM164,192a36,36,0,1,1-36-36A36,36,0,0,1,164,192Zm48-85.79a5,5,0,0,1-2.93,4.55L172,127.61V52h35a5,5,0,0,1,5,5Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
