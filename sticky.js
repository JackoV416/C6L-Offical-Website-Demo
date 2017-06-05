$(window).scroll(
function ScrollNav(){
var  mn = $('.main-nav');
    na = $('.na');
    nah = $('.na').hover
    nav = $('#nav');
    selected = $('.selected')
    logo = $('.logo')
    footer = $('footer')

  if( $(this).scrollTop() > 255 ) {
     mn.addClass('mns');
    na.addClass('nas');
    na.addClass('whover');
    na.css('color', 'rgb(221, 168, 51)');
    nav.addClass('navs');
    selected.css('border-bottom', '3px solid rgb(221, 168, 51)');
    logo.show();
    logo.css('display','inherit');
    footer.addClass('float');
  } else {
     mn.removeClass('mns');
    na.removeClass('nas');
    na.removeClass('whover');
    na.css('color', '#000');
    nav.removeClass('navs');
    selected.css('border-bottom', '3px solid rgb(221,168,51)');
    logo.hide();
    footer.removeClass('float');
  }
}
);

$( ".na.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

$( ".mns.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});
