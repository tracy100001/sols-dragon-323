import Link from "next/link";

import Image from "next/image";

function Header() {
  return (
    <header className="top_header py-2">
      <div className="container-fluid px-4">
        <div className="row align-items-center">
          <div className="col-lg-2 col-6">
            <a className="logo img-fluid" href="/">
              <img
                alt=""
                src="/img/general/logo.png"
                style={{
                  objectFit: "cover",
                }}
              />
            </a>
          </div>
          <div className="col-lg-8 justify-content-center d-none d-lg-flex">
            <ul className="list-unstyled d-flex align-items-center justify-content-center gap-4 mb-0 rdn_menu scroll_menu">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 d-none d-lg-flex justify-content-end">
            <a className="rdn_btn header_btn go_btn" href="/contact">
              <span className="btn_top">
                <i className="me-1 ph ph-chat-centered-text"></i>
                Get Quote
              </span>
              <span className="btn_bottom">
                <i className="me-1 ph ph-chat-centered-text"></i>
                Get Quote
              </span>
            </a>
          </div>
          <div className="col-6 d-lg-none mobile_menu_box">
            <div className="mobile_menu_btn cursor_big">
              <i className="ph ph-list"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top_offcanvas_container offcanvas offcanvas-end bg_black shadow-sm"
        data-bs-scroll="true"
        id="top_offcanvas"
        tabIndex={-1}
      >
        <button
          aria-label="Close"
          className="close_mb"
          data-bs-dismiss="offcanvas"
        >
          <i className="ph ph-x"></i>
        </button>
        <a className="logo_offcanvas mb-auto" href="/">
          <Image
            width={2000}
            height={1000}
            alt="image"
            className="logo img-fluid"
            src="/img/general/logo.png"
          />
        </a>
        <div className="offcanvas_nav"></div>
        <div className="d-flex mt-auto">
          <a className="rdn_btn header_btn go_btn" href="/contact">
            <span className="btn_top">
              <i className="me-1 ph ph-chat-centered-text"></i>
              Get Quote
            </span>
            <span className="btn_bottom">
              <i className="me-1 ph ph-chat-centered-text"></i>
              Get Quote
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
