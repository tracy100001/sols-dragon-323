import Image from "next/image";

function Blog({ page = false }: { page?: boolean }) {
  return (
    <section className="py-10 bg_dark" id="news">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="text-uppercase tc_heading-50">
              Read behind-the-scenes stories, gear reviews, filmmaker tips, and
              more.
            </p>
            {page ? (
              <h1 className="mb-8">From Set Notes to Industry Insights.</h1>
            ) : (
              <h2 className="mb-8">From Set Notes to Industry Insights.</h2>
            )}
          </div>
        </div>
        <div className="blog_slider overflow-hidden position-relative">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <BlogCard
                category="Filmmaking Tips"
                title="How to Budget Your Indie Film in Canada"
                author="Riani Drew"
                date="8th May 2023"
              />
            </div>
            <div className="swiper-slide">
              <BlogCard
                category="Behind The Lens"
                title="From Script to Screen: Our Production Process Explained"
                author="Riani Drew"
                date="8th May 2023"
              />
            </div>
            <div className="swiper-slide">
              <BlogCard
                category="Behind The Lens"
                title="From Script to Screen: Our Production Process Explained"
                author="Riani Drew"
                date="8th May 2023"
              />
            </div>
            <div className="swiper-slide">
              <BlogCard
                category="Behind The Lens"
                title="From Script to Screen: Our Production Process Explained"
                author="Riani Drew"
                date="8th May 2023"
              />
            </div>
            <div className="swiper-slide">
              <BlogCard
                category="Behind The Lens"
                title="From Script to Screen: Our Production Process Explained"
                author="Riani Drew"
                date="8th May 2023"
              />
            </div>
          </div>
          <ul className="list-unstyled mb-0 blog_nav">
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

  /* function BlogVideoCard() {
    return (
      <div className="blog_box shadow-sm">
        <div className="rounded-1 overflow-hidden plyr_outer">
          <div
            className="plyr_video"
            data-plyr-embed-id="Qq23pd22QxM"
            data-plyr-provider="youtube"
            data-poster="img/news/1.jpg"
          ></div>
        </div>
        <p className="blog_cat">Tips &amp; Trick</p>
        <h3 className="mb-4">
          <a className="blog_link" href="single-news.html">
            Cinematic brand video for creative
          </a>
        </h3>
        <ul className="list-unstyled blog_meta mb-0 d-flex gap-2 align-items-center">
          <li>
            <i className="ph ph-user"></i>
            Rihani Drew
          </li>
          <li>
            <i className="ph ph-calendar-blank"></i>
            18 June 2024
          </li>
        </ul>
      </div>
    );
  } */

  function BlogCard({
    category,
    title,
    author,
    date,
  }: {
    category?: string;
    title?: string;
    author?: string;
    date?: string;
  }) {
    return (
      <div className="blog_box shadow-sm">
        <Image alt="" src="img/news/1.jpg" />
        <p className="blog_cat">{category}</p>
        <h3 className="mb-4">
          <a className="blog_link line-clamp-2" href="single-news.html">
            {title}
          </a>
        </h3>
        <ul className="list-unstyled blog_meta mb-0 d-flex gap-2 align-items-center">
          <li>
            <i className="ph ph-user"></i>
            {author}
          </li>
          <li>
            <i className="ph ph-calendar-blank"></i>
            {date}
          </li>
        </ul>
      </div>
    );
  }
}

export default Blog;
