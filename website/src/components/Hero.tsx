import Link from "next/link";

import Image from "next/image";

function Hero() {
  return (
    <div
      className="home_slider overflow-hidden position-relative"
      data-delay="6000"
    >
      <div className="slider_item is-active">
        <div className="container my-12">
          <div className="row align-items-center">
            <div className="col-lg-6 position-relative z-2">
              <div className="slider_content_text">
                <p className="slider_subtitle">Cinematic Production Studio</p>
                <h1 className="slider_title">
                  <span className="text-wrapper">
                    <span className="letters">Where Vision Meets Frame</span>
                  </span>
                </h1>
                <p className="slider_text">
                  We don&apos;t just shoot—we translate emotion into motion.
                  Solstice brings your story to life with precision, style, and
                  soul.
                </p>
                <div className="slider_btn_box">
                  <Link className="slider_btn rdn_btn go_btn" href="/contact">
                    <span className="btn_top">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                    <span className="btn_bottom">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="slider_content_img col-lg-6">
              <div className="row">
                <div className="col-5 mb-4">
                  <div className="slider_img">
                    <Image
                      src="/img/slider/1.jpg"
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-7 mb-4">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/2.jpg"
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/3.jpg"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/4.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider_item">
        <div className="container my-12">
          <div className="row align-items-center">
            <div className="col-lg-6 position-relative z-2">
              <div className="slider_content_text">
                <p className="slider_subtitle">
                  Commercials | Music Videos | Documentaries
                </p>
                <h1 className="slider_title">
                  <span className="text-wrapper">
                    <span className="letters">Film That Moves People</span>
                  </span>
                </h1>
                <p className="slider_text">
                  From indie sets to global campaigns, our films are made to
                  linger—crafted to connect, designed to convert.
                </p>
                <div className="slider_btn_box">
                  <a className="slider_btn rdn_btn go_btn" href="#contact">
                    <span className="btn_top">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                    <span className="btn_bottom">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="slider_content_img col-lg-6">
              <div className="row">
                <div className="col-5 mb-4">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/5.jpg"
                    />
                  </div>
                </div>
                <div className="col-7 mb-4">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/6.jpg"
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/7.jpg"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/8.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider_item">
        <div className="container my-12">
          <div className="row align-items-center">
            <div className="col-lg-6 position-relative z-2">
              <div className="slider_content_text">
                <p className="slider_subtitle">
                  Toronto-Based. Globally Driven.
                </p>
                <h1 className="slider_title">
                  <span className="text-wrapper">
                    <span className="letters">
                      Trusted by Artists, Loved by Audiences
                    </span>
                  </span>
                </h1>
                <p className="slider_text">
                  Whether you&apos;re a label, agency, or director—we turn
                  complex visions into cinematic reality, frame by frame.
                </p>
                <div className="slider_btn_box">
                  <a className="slider_btn rdn_btn go_btn" href="#contact">
                    <span className="btn_top">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                    <span className="btn_bottom">
                      Let&apos;s Collaborate
                      <i className="ms-2 ph ph-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="slider_content_img col-lg-6">
              <div className="row">
                <div className="col-5 mb-4">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/9.jpg"
                    />
                  </div>
                </div>
                <div className="col-7 mb-4">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/10.jpg"
                    />
                  </div>
                </div>
                <div className="col-7">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/11.jpg"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="slider_img">
                    <Image
                      width={2000}
                      height={1000}
                      alt=""
                      className="img-fluid"
                      src="/img/slider/12.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav_slider">
        <div className="prev slide_nav cursor_big">
          <i className="ph ph-arrow-down-left"></i>
        </div>
        <div className="next slide_nav cursor_big">
          <i className="ph ph-arrow-up-right"></i>
        </div>
      </div>
      <div className="slider_pagi_box">
        <ul className="list-unstyled slider_pagination"></ul>
      </div>
      <Image
        width={2000}
        height={1000}
        alt=""
        className="circle_img"
        src="/brand assets/New folder/Asset 16.png"
      />
      <ul className="list-unstyled slider_social_icon">
        <li>
          <a href="#!">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#!">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
