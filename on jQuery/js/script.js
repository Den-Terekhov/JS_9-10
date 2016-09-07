//jQuery menu
$(function() {
  $('.menu_item').hover(
    function() {
      $(this).children('.submenu').stop(true, true).slideDown();
    },
    function() {
      $(this).children('.submenu').stop(true, true).slideUp();
    }
  );

  $('.submenu_item').hover(
    function() {
      $(this).children('.submenu').stop(true, true).fadeIn();
    },
    function() {
      $(this).children('.submenu').stop(true, true).fadeOut();
    }
  );
});

//jCarousel
$(function() {
    $('.jcarousel').jcarousel({
      wrap: 'both'
    });

    $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
      target: '+=1'
    });

    $('.jcarousel-pagination')
      .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active_page');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active_page');
      })
  
      .jcarouselPagination({
        'perPage': 1,
        item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
        }
      });
});

//jQuery Selectric
$(function(){
  $('select').selectric();
});

//iCheck
$(document).ready(function(){
  $('.checkboxes input').iCheck({
    checkboxClass: 'icheckbox_square-red',
    radioClass: 'iradio_square-red',
    increaseArea: '20%'
  });
});