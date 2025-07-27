import Image from "next/image";

function Contact({ page = false }: { page?: boolean }) {
  return (
    <section className="py-10 bg_darker" id="contact">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 mb-8 mb-lg-0">
            <p className="text-uppercase tc_heading-50">
              Let’s Make Something Beautiful
            </p>
            {page ? (
              <h1 className="mb-4">
                Contact us for your next creative project!
              </h1>
            ) : (
              <h2 className="mb-4">
                Contact us for your next creative project!
              </h2>
            )}

            <p className="mb-8">
              Have a project in mind or need more information about my services?
              Send me a message, and we can start to make your ideas a reality.
            </p>
            <div className="contact_box shadow-sm">
              <Image
                width={2000}
                height={1000}
                alt=""
                className="contact_img"
                src="/img/contact/1.jpg"
              />
              <ul className="contact_meta list-unstyled">
                <li>
                  <Image
                    width={2000}
                    height={1000}
                    alt=""
                    src="/img/general/logo.png"
                  />
                </li>
                <li>
                  <i className="ph ph-envelope"></i>
                  <a
                    className="__cf_email__"
                    data-cfemail="4b2e262a22270b2e262a222765282426"
                    href="/cdn-cgi/l/email-protection"
                  >
                    [email protected]
                  </a>
                </li>
                <li>
                  <i className="ph ph-clock"></i>
                  10.00 AM - 05.00 PM
                </li>
              </ul>
              <div className="bg_mask"></div>
            </div>
            <ul className="list-unstyled contact_list d-flex mt-4 mb-0">
              <li>
                <i className="ph ph-building-apartment"></i>
                Buah Batu Street 428, Bandung - Indonesia
              </li>
              <li className="ms-auto">
                View on map
                <a
                  href="https://maps.app.goo.gl/eU7KhP8TLeesLU9j8"
                  target="_blank"
                >
                  <i className="ph ph-arrow-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul
              className="list-unstyled d-flex row-cols-3 mb-8 text-center"
              data-cues="slideInUp"
            >
              <li>
                <Image
                  width={2000}
                  height={1000}
                  alt=""
                  className="img-fluid"
                  src="/img/client/1.png"
                />
              </li>
              <li>
                <Image
                  width={2000}
                  height={1000}
                  alt=""
                  className="img-fluid"
                  src="/img/client/2.png"
                />
              </li>
              <li>
                <Image
                  width={2000}
                  height={1000}
                  alt=""
                  className="img-fluid"
                  src="/img/client/3.png"
                />
              </li>
            </ul>
            <form action="#" className="contact_form bg_dark">
              <input name="name" placeholder="Your name..." type="text" />
              <input name="email" placeholder="Your email..." type="email" />
              <input name="phone" placeholder="Your phone..." type="tel" />
              <textarea
                name="message"
                placeholder="Your message..."
                rows={5}
              ></textarea>
              <div className="button-area">
                <button className="contact_btn" type="submit">
                  Send Message
                  <i className="ph ph-arrow-right"></i>
                </button>
                <span className="contact_out_text mt-2"></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
