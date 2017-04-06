$(function(){
  $('.qlikSenseList ul li').on('click', function(){
      $('.qlikSenseBody').hide();
      $('iframe').show();
  });
  $('.Qlik-sense').on('click', function(){
     $('.qlikSenseBody').show();
      $('iframe').hide();
  })
})
