$(function(){
    $('.slider_inner, .clients_slider_inner').slick({
        nextArrow: '<button type = "button" class="slick-btn slick-next"></ button>',
        prevArrow: '<button type = "button" class="slick-btn slick-prev"></ button>',
        infinite: false,
    });
    $('select').styler();
    $('.header_btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    
    $(window).on('load', function() {
        $('.preloader').addClass("hide");
      }); 
});
$(function() {
    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();
  
      $("body").toggleClass("overflow-hidden");
    });
  
    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");
  
      $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
    });
  });



