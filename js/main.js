$(function(){
    $('#humBtn').on('click',function(){
        $('#humBer,#shadow,#humNav').toggleClass('show');
    })
})
$(function(){
    $('#shadow,#humNav').on('click',function(){
        $('#humBer,#shadow,#humNav').removeClass('show');
    })
})

$(function(){
    $('.secFlex').on('inview',function(event){
      $(this).addClass('fade__in');
    })
  })
  