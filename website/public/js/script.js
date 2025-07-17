!(function () {
  "use strict";
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    console.log("preloader", preloader);
    if (preloader) {
      console.log("RDN Menu initialized");
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }

    zsSlide(".home_slider");
    initScrollNavigation(".scroll_menu", ".top_header", 30);
    scrollCue.init();
    CursorMouse(".cursor");
  });

  if (document.querySelector(".rdn_menu")) {
    const t = document
      .querySelector(".rdn_menu")
      .querySelectorAll(".has_child");
    for (var e = 0; e < t.length; e++)
      (t[e].addEventListener("mouseenter", function () {
        this.classList.add("visible");
      }),
        t[e].addEventListener("mouseleave", function () {
          this.classList.remove("visible");
        }));
  }
  document.querySelectorAll(".mobile_menu_btn").forEach((e) => {
    e.addEventListener("click", function (e) {
      (e.preventDefault(), e.stopPropagation(), bsOffcanvas.toggle());
    });
  });
  const t = document
    .querySelector(".offcanvas_list")
    .querySelectorAll(".dd_child_btn");
  for (var n = 0; n < t.length; n++)
    t[n].addEventListener("click", function (e) {
      (this.parentNode.classList.toggle("active"),
        slidingToggle(this.parentNode.querySelector(".nav_menu_child"), 200),
        e.preventDefault());
    });
  document.querySelectorAll(".eq_lists").forEach((e) => {
    const t = e.dataset.list,
      n = document.querySelector(`.img_eq[data-list="${t}"]`);
    n && setupEqList(e, n);
  });
  (new Swiper(".about_slider", {
    speed: 800,
    loop: !0,
    slidesPerView: 1,
    centeredSlides: !1,
    crossFade: !0,
    effect: "fade",
    autoplay: { delay: 6e3, disableOnInteraction: !1 },
  }),
    new Swiper(".testi_slider", {
      speed: 800,
      loop: !0,
      slidesPerView: 1,
      centeredSlides: !1,
      crossFade: !0,
      effect: "fade",
      spaceBetween: "32px",
      autoHeight: !0,
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      navigation: { nextEl: ".testi_nav .next", prevEl: ".testi_nav .prev" },
    }),
    new Swiper(".blog_slider", {
      speed: 800,
      loop: !1,
      slidesPerView: 1,
      centeredSlides: !1,
      spaceBetween: "32px",
      breakpoints: { 767: { slidesPerView: 2 }, 991: { slidesPerView: 3 } },
      autoplay: { delay: 6e3, pauseOnMouseEnter: !0, disableOnInteraction: !1 },
      navigation: { nextEl: ".blog_nav .next", prevEl: ".blog_nav .prev" },
    }),
    GLightbox({ selector: ".popup_video" }),
    GLightbox({ selector: ".popup_gallery", width: "300px" }));
  const o = document.querySelector(".port_body"),
    r = document.querySelector(".port_filter");
  if (o) {
    const e = new Isotope(o, {
      itemSelector: ".port_item",
      layoutMode: "masonry",
    });
    (setTimeout(() => {
      e.arrange();
    }, 300),
      r &&
        r.addEventListener("click", function (t) {
          if (!matchesSelector(t.target, "a")) return;
          const n = t.target.getAttribute("data-filter");
          (e.arrange({ filter: n }),
            r.querySelector(".active").classList.remove("active"),
            t.target.classList.add("active"),
            t.preventDefault());
        }));
  }
  new Plyr(".plyr_video", {
    controls: ["play-large", "play", "mute", "fullscreen"],
  });
  document.querySelectorAll(".about_box").forEach(function (e) {
    var t = new IntersectionObserver(
      function (e) {
        e[0].isIntersecting &&
          (rdn_counter(".zs_count", 20), t.unobserve(e[0].target));
      },
      { once: !0 }
    );
    t.observe(e);
  });
})();
