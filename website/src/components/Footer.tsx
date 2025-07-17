import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer bg_dark">
      <Image
        src="/brand assets/pat/Asset 20.png"
        alt="billboard image"
        className="img-fluid w-100"
        style={{ maxHeight: "36rem", objectFit: "cover" }}
      />
      <div className="container text-center  py-10">
        <Image alt="" className="footer_img" src="img/general/logo.png" />
        <ul className="list-unstyled d-flex align-items-center justify-content-center gap-4 my-4 footer_menu">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="list-unstyled d-flex justify-content-center gap-2 mt-4">
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
          <li>
            <a href="#!">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
        </ul>
        <p className="mt-10">
          © Copyright {new Date().getFullYear()} - Solstice Cinematics. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
