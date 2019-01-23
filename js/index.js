$(document).ready(function(){
    
    $('.countryImg').each(function () {
        var originTop = $(this).css('top');//先抓原本你ＣＳＳ寫的高度
        $(this).css('top','-100px');//然後把國旗放到0的位置
        $(this).animate({//做個動畫讓它們掉下來}
            top:originTop,
        }, 3000, 'easeOutBounce');
    })
});

