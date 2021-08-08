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

});
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}