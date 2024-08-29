


window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,500);
    $("#num2").countMe(30,30);
    $("#num3").countMe(40,130);

    }


    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
          autoPlay: true, 
          items: 4, 
          loop: true, 
          dots: true, 
          autoplayTimeout: 1000,
         
        });
      });