import Image from "next/image";

function Page() {
  return (
    <>
      <section id="news-hero" className="py-10 bg_darker">
        <div className="container text-center mt-lg-10">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <p className="text-uppercase tc_heading-50">Article Category</p>
              <h1 className="mb-0">Your Article Title Here</h1>
              <ul className="list-unstyled single_blog_meta">
                <li>
                  <i className="ph ph-calendar-blank"></i> 01 July 2025
                </li>
                <li>
                  <i className="ph ph-tag"></i> Tag 1, Tag 2
                </li>
                <li>
                  <i className="ph ph-user"></i> Author Name
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="blog_outer bg_dark py-10">
        <div className="container">
          <div className="row mt-8">
            <div className="col-lg-8">
              <div className="pe-lg-2 blog_content">
                <h3 className="fw-normal">Main Article Intro or Subheading</h3>
                <p>
                  Introductory paragraph or lead text here. You can expand this
                  as needed to introduce the topic of the article.
                </p>

                <h4 className="fw-normal mt-5">Section Title</h4>
                <p>Body content continues here with formatted text.</p>
                <p>Use additional subheadings, images, or quotes as needed.</p>

                <Image
                  src="/img/about/3.jpg"
                  alt="Article Image"
                  className="my-4 rounded-1 img-fluid"
                />

                <p>Wrap up your article with insights or takeaways.</p>
              </div>

              <div className="comments mt-5">
                <h4 className="comments_count">Leave a Comment</h4>
                <form className="comment_form bg_dark">
                  <input type="text" name="name" placeholder="Name*" required />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                  />
                  <textarea
                    rows={5}
                    placeholder="Message*"
                    name="message"
                    required
                  ></textarea>
                  <div className="button-area">
                    <button className="comment_btn" type="submit">
                      Post Comment <i className="ph ph-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 sidebar mt-4">
              <div className="widget">
                <h3 className="fw-normal fs-4 widget_title">Recent News</h3>
                <ul className="list-unstyled blog_widget_list">
                  <li>
                    <a href="#">
                      <h4>Sample Post Title</h4>
                    </a>
                    <span className="blog_widget_date">
                      <i className="ph ph-calendar-blank"></i> 01/07/2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
