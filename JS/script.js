(function($){
   $(function(){
       
       //scroll to section
       
       $(".jq--scroll-treneri").click(function(){
          $("html, body").animate({scrollTop: $(".jq--treneri").offset().top}, 1000); 
       });
       
       $(".jq--scroll-fotogaleria").click(function(){
          $("html, body").animate({scrollTop: $(".jq--fotogaleria").offset().top}, 1500); 
       });
       
       $(".jq--scroll-nase-sluzby").click(function(){
          $("html, body").animate({scrollTop: $(".jq--nase-sluzby").offset().top}, 2000); 
       });
       
       $(".jq--scroll-referencie").click(function(){
          $("html, body").animate({scrollTop: $(".jq--referencie").offset().top}, 2500); 
       });
       
       $(".jq--scroll-kontakt").click(function(){
          $("html, body").animate({scrollTop: $(".jq--kontakt").offset().top}, 3000); 
       });
       
       //scroll buttons to section
       $(".jq--scroll-treneri").click(function(){
          $("html, body").animate({scrollTop: $(".jq--treneri").offset().top}, 1000); 
       });
       
       $(".jq--scroll-nase-sluzby").click(function(){
          $("html, body").animate({scrollTop: $(".jq--nase-sluzby").offset().top}, 2000); 
       });
       
       /* Mobile navigation */
       $(".jq--nav-icon").click(function() {
          
           $(".nav-background").fadeToggle();
           $(".mobile-nav-back").fadeToggle();
           $("nav ul").fadeToggle();
           
       });
       
       /* Menime obrazok hamburgeru za obrazok kriza a naopak */
       $(".jq--image-hamburger").click(function(){
          
           if($(".jq--image-hamburger").attr("src") == "obrazky/hamburgerMenu.png")
           {
                $($(".jq--image-hamburger").attr("src","obrazky/crossMenu.png"));    
           } 
           else 
           {
               $($(".jq--image-hamburger").attr("src","obrazky/hamburgerMenu.png"));
           }
       });
       
       
   }); 
})(jQuery);