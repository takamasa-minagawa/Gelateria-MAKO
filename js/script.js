// ---------------------------------
// variable header
// ---------------------------------
$(function(){
  var $win = $(window),
      $header = $(header),
      scrollClass = 'header__scroll';
      $li = $('.header__menu>li')
  $win.on('load scroll', function(){
    var value = $(this).scrollTop();

    $li.css('display', 'block' )
    if( value > 50 ){
      $header.addClass(scrollClass);
    }
    else{
      $header.removeClass(scrollClass);
      $li.removeClass('header__opacity');
    }
    if( $(window).width()<1024 ){
      if( value > 50 ){
        $li.addClass('header__opacity');
        $li.css('display', 'none' )
      }
      else{
        $li.css('display', 'block' )
      };
    };  
  });
});
// ---------------------------------
// Smooth scroll
// ---------------------------------
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// ---------------------------------
// humburger menu
// ---------------------------------
$(function(){
  $('.btn_trigger').on('click',function(){
    $('.btn_trigger').toggleClass('btn_close');
    $('body').toggleClass('noscroll')
    $('.header__opacity').fadeToggle(0);
    $('header').toggleClass('header__nav_wrapper');
  });
  if( $(window).width()<1024 ){
    $('.header__item>a').on('click',function(){
      $('.btn_trigger').removeClass('btn_close');
      $('header').removeClass('header__nav_wrapper');
      $('.header__opacity').fadeToggle(0);
      $('body').removeClass('noscroll');
    });
  };  
});
  

// ---------------------------------
// scroll in
// ---------------------------------
jQuery(function(){
  jQuery(window).scroll(function (){
      jQuery('.fadein').each(function(){
          var elemPos = jQuery(this).offset().top;
          var scroll = jQuery(window).scrollTop();
          var windowHeight = jQuery(window).height();
          if (scroll > elemPos - windowHeight + 200){
              jQuery(this).addClass('scrollin');
          }
      });
  });
  if( $(window).width()<1024 ){
    $('.fadein').removeClass('fadein');
  };
});
