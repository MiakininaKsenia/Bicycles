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

    //mobile menu
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
    $('.header').on( 'click', '.menu-button', function() {
        $('.header').toggleClass('menu-opened');
    });

    // Anchor links
    
      $( ".js-anchor" ).click(function( event ) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
      });
  


  });
   