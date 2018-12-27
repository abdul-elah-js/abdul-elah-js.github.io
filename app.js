window.onload = function () {

  $('.modal').modal();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 25) {
      $('#nav-links-container').addClass('nav-bar-bg', 1000);
      $('#nav-links').find('a').addClass('nav-link-down');
    } else {
      $('#nav-links-container').removeClass('nav-bar-bg', 1000);
      $('#nav-links').find('a').removeClass('nav-link-down');
    }
  })

  $("#home-btn").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#header-container").offset().top
    }, 1000);
  });

  $("#skills-btn").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: ($("#skills").offset().top - 80)
    }, 1000);
  });

  $("#projects-btn").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: ($("#projects").offset().top - 80)
    }, 1000);
  });

  $("#contact-btn").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: ($("#contact").offset().top - 80)
    }, 1000);
  });

  $('.modal-trigger').click(function(e) {
    e.preventDefault();
    $('#modal1').modal('open')
  })

}