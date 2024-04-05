var animation = anime.timeline({
    autoplay: false
  });
  animation.add({
    targets: ".section-btn",
    top: "1500px",
    duration: 500,
    easing: "easeInOutSine",
  });
  animation.add({
    targets: "header",
    marginLeft:'-100%',
    duration: 1000,
    easing: "easeInOutSine",
  });
  animation.add({
    targets: "#stars",
    top: "0px",
    duration: 1000,
    easing: "easeInOutSine",
  });

  animation.add({
    targets: "#mountains_behind",
    bottom: "0px",
    duration: 1000,
    easing: "easeInOutSine",
  });

  animation.add({
    targets: "#moon",
    top: "0px",
    duration: 1000,
    easing: 'easeInOutBack',
  });
  animation.add({
    targets: "#mountains_front",
    bottom: "0px",
    duration: 1000,
    easing: "easeInOutSine",
  });
  animation.add({
    targets: "#text",
    bottom: "0px",
    marginRight:'5px',
    duration: 1000,
    easing: "easeInOutSine",
  });
  animation.add({
    targets: "header",
    marginLeft:'0px',
    duration: 1000,
    easing: "easeInOutSine",
  });
  animation.add({
    targets: ".section-btn",
    top: "50%",
    duration: 1000,
    easing: "easeInOutBack",
  });



  document.querySelector('.section-btn').onclick = animation.play;