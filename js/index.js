$(document).ready(function(){
    
    $('.countryImg').each(function () {
        var originTop = $(this).css('top');//先抓原本你ＣＳＳ寫的高度
        $(this).css('top','-100px');//然後把國旗放到0的位置
        $(this).animate({//做個動畫讓它們掉下來}
            top:originTop,
        }, 2000, 'easeOutBounce');
    })


    $(window).scroll(function () {
        if ($(window).scrollTop() > $('#section_12').offset().top - 500) {
            $('.snackMap').css({
                'transform' : 'translateY(100%) scale(0)',
                'opacity' : '0',
                'transition' : '2.5s',
            });
        }else{
            $('.snackMap').css({
                'transform': 'translateY(0) scale(1)',
                'opacity': '1',
            });
        }
    });

    //給箱子姿態初始值
    boxBases.forEach(el => {
        el.style.transform = "rotateX(-30deg) rotateY(30deg) rotateZ(0deg)";
    })
    
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > $('#section_12').offset().top - 500) {
                cover_out_12.style.transform = "translate3d(0, 40px, -100px) rotateX(200deg)";
                cover_in_12.style.transform = "translate3d(0, 40px, -100px) rotateX(200deg) rotateY(180deg)";
                //下蓋初始關起來
                cover_dl_12.style.transform = "translate3d(-200px, 160px, 0px) rotateY(-90deg) rotateX(-90deg) ";
                cover_dr_12.style.transform = "translate3d(200px, 160px, 0px)  rotateY(90deg) rotateX(-90deg)";
                //box_12姿態固定
                box_12.style.transform = "rotateX(-30deg) rotateY(30deg) rotateZ(0deg)";
                setTimeout(e => {
                    box_12.style.transform = "rotateX(-30deg) rotateY(0deg) rotateZ(0deg)";
                }, 400)

                //延遲....上蓋關起來
                setTimeout(e => {
                    cover_out_12.style.transform = "translate3d(0, 40px, -100px) rotateX(90deg)";
                    cover_in_12.style.transform = "translate3d(0, 40px, -100px) rotateX(90deg) rotateY(180deg)";
                }, 1500);
                

        }
        if ($(window).scrollTop() > $('.boxBase').offset().top - 500) {

            //延遲...箱子抬起來
            setTimeout(e => {
                box_12.style.transform = "rotateX(20deg) rotateY(0deg) rotateZ(0deg)";
            }, 1500)
            //延遲...下蓋兩片打開
            setTimeout(e => {
                cover_dl_12.style.transform = "translate3d(-200px, 160px, 0px) rotateY(-90deg) rotateX(30deg) ";
                cover_dr_12.style.transform = "translate3d(200px, 160px, 0px)  rotateY(90deg) rotateX(30deg)";
            }, 1700);
        }
    });
});
