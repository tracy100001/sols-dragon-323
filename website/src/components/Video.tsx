function Video() {
  return (
    <section className="py-10 bg-black" id="video">
      <div className="container position-relative z-1 my-lg-10 video_outer">
        <div className="video_row">
          <div className="video_col video_title">
            <p className="text-uppercase tc_heading-50">A Visual Journey</p>
            <h2 className="mb-0">Stories in motion</h2>
          </div>
          <div className="video_col video_box_link">
            <span className="border_video"></span>
            <a
              className="popup_video"
              href="https://www.youtube.com/watch?v=wX8fNG1Bg9k"
            >
              <i className="fa fa-play"></i>
            </a>
          </div>
          <div className="video_col">
            <p className="tc_heading">
              Explore a selection of video works that capture the heart of every
              story I tell.
            </p>
          </div>
        </div>
      </div>
      <div className="bg_mask"></div>
    </section>
  );
}

export default Video;
