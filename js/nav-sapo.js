$(function(){
    $('#header-nav-course').toggle();
  }
);

$('#course-list').click(
    function(){
        $('#header-nav-course').toggle(700);
      }
);

$('.popupimg1').on('click',function(){
    $('.popup1').addClass('show').fadeIn();
});
  
$('#popup-item1').on('click',function(){
    $('.popup1').fadeOut();
});

$('.popupimg2').on('click',function(){
    $('.popup2').addClass('show').fadeIn();
});
  
$('#popup-item2').on('click',function(){
    $('.popup2').fadeOut();
});
$('.popupimg3').on('click',function(){
    $('.popup3').addClass('show').fadeIn();
});
  
$('#popup-item3').on('click',function(){
    $('.popup3').fadeOut();
});