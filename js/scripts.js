  $(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container', {
       loop: true,
       pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
      }
     
    });
    var mySwiper = new Swiper('.review-container', {
      loop: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },    
      autoplay: {
       delay: 5000,
     }
    
   })
  });
   