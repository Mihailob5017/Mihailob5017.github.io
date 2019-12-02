
//HIDES THE NAVBAR
const scrollup = e => {
  if (
    e.target.tagName != "UL" &&
    e.target.tagName != "A" &&
    e.target.tagName != "LI"
  ) {
    document.getElementById("show").style.animationName = "slide-up-menu";
    document.getElementById("show").style.transform = "translateY(-100%)";
    //removes the event listener so that the other event listener can be recognised
    document.body.removeEventListener("click", scrollup);
  }
};

window.addEventListener("resize", e => {
  if (e.target.innerWidth >= 900)
    document.getElementById("show").style.transform = "translateY(0%)";
  else if (e.target.innerWidth <= 900) {
    document.getElementById("show").style.transform = "translateY(-100%)";
  }
});

//shows the navbar
document.querySelector(".hamburger").addEventListener("click", () => {
  document.getElementById("show").style.animationName = "slide-menu";
  document.getElementById("show").style.transform = "translateY(0%)";
  // wait's for a secend for the function to finish
  setTimeout(() => {
    document.body.addEventListener("click", scrollup);
  }, 1001);
});
//
//
//
//
//PLAYS AND STOPS THE VIDEO
document.querySelectorAll(".video-start-btn").forEach(video =>
  video.addEventListener("click", e => {
    const video = e.target.parentNode.parentNode.querySelector("video");
    video.style.opacity = "1";
    video.play();
  })
);

document.querySelectorAll(".video-stop-btn").forEach(video =>
  video.addEventListener("click", e => {
    const video = e.target.parentNode.parentNode.querySelector("video");
    video.style.opacity = "0.5";
    video.pause();
  })
);
//
//
//
//
//DROPS DOWN
document.querySelectorAll(".service-header-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    let grandparentNode = e.target.parentNode.parentNode;
    let bodyNode = grandparentNode.querySelector(".service-body");
    if (bodyNode.style.display == "none" || bodyNode.style.display=='') {
      bodyNode.style.display = "inherit";
      bodyNode.style.animationName = "fade-in";
    } else {
      bodyNode.style.display = "none";
    }
  });
});

//JQUERRY
$(document).ready(() => {

  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.btn-left',
    prevArrow: '.btn-right'
  })
  $('.slide-header').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.header-next',
    prevArrow: '.header-prev'
  })



  $(".slider-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          infinite: true,} 
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          arrows: false,
          infinite: true,}
      }
    ]
  });
});
