$('.icon').on('click',function() {
  $(this).toggleClass('active');
});

$('.humblegive').on('click', function() {
  $('.modal').addClass('show');
  $('body').addClass('active');
})
