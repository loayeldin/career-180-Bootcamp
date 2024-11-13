$('.arrow-box').click(() => {
  

    $('.aside-menu').toggleClass('aside-collapsed');
    $('.main').toggleClass('main-collapsed');
    let x = $('#toggleBtn').attr('class');
    if(x.includes('fa-arrow-left')){
        $('#toggleBtn').removeClass('fa-arrow-left').addClass('fa-arrow-right')
    }else{
        $('#toggleBtn').removeClass('fa-arrow-right').addClass('fa-arrow-left')
    }
   
  
});
$('.cat-content').click(function() {
    $('.cat-content').removeClass('active');
    $(this).addClass('active');
});

