$('.tab').on('click','.tabLis', function () {
    let imgSrcNum = $(this).children('img').attr('src').slice(8,9)
    $(this).children('img').attr('src', 'img/icon' + imgSrcNum + '-1.png')
    $(".tabLis span").eq($(this).index()).addClass("active").parent().siblings().find('span').removeClass('active')
})
