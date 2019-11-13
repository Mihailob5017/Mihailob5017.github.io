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

document.querySelectorAll(".video-start-btn").forEach(video =>
  video.addEventListener("click", e => {
    const video = e.target.parentNode.parentNode.querySelector("video");
    video.style.opacity='1';
    video.play();
  })
);

document.querySelectorAll(".video-stop-btn").forEach(video =>
  video.addEventListener("click", e => {
    const video = e.target.parentNode.parentNode.querySelector("video");
    video.style.opacity='0.5';
    video.pause();
  })
);
