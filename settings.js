
// for card animation //
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
});


var animation = lottie.loadAnimation({
    container: document.getElementById('lottie'), // o ID do contêiner
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets8.lottiefiles.com/packages/lf20_Gt93hB.json' // URL da animação em JSON
  });
  

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  