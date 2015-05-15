$(document).ready(function() {

  // CSS Toggle
  $('.CSStoggle').click(function(){
    $('.toggle').toggleClass('faded');
  });

  // JQuery Toggle
  $('.jQueryToggle').click(function(){
    $('.toggle').slideToggle();
  });

  // Parallax Scrolling
  $(window).scroll(function() {
      var x = $(window).scrollTop();
      $('.parallax').css('background-position', 'left ' + parseInt(-x / 3) + 'px');
  });
});
