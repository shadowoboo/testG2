function moveR() {
        $('.itemDetail').css({
            'opacity': '0',
            'transform': 'translateX(100%)'
        })
        setTimeout(() => {
            $('.itemDetail').css({
                'opacity': '1',
                'transform': 'translateX(0%)'
            })
        }, 400);
}

function allPanel(){
    $('.sw_class').each(function () {
        $('.sw_class').click(function(e){
            $('.sw_class').removeClass('catLoc');
            $(this).addClass('catLoc');

            $('#titleCat').css({
                'opacity': '0',
                'transform': 'translateX(-100%)'
            })
            moveR();
            switch ($(this).attr('id')) {
                case 'sw_all':
                    newTitleCtx = "本月<br>綜合排行";
                    newIp = "/images/rankBoard/ipCookie.png";
                    break;

                case 'sw_cookie':
                    newTitleCtx = "本月<br>餅乾排行";
                    newIp = "/images/rankBoard/ipCookie.png";
                    break;

                case 'sw_candy':
                    newTitleCtx = "本月<br>糖果排行";
                    newIp = "/images/rankBoard/ipCandy.png";
                    break;

                case 'sw_choco':
                    newTitleCtx = "本月<br>巧克力排行";
                    newIp = "/images/rankBoard/ipChoco.png";
                    break;

                case 'sw_chip':
                    newTitleCtx = "本月<br>洋芋片排行";
                    newIp = "/images/rankBoard/ipChips.png";
                    break;
            }


            $('#ipImg').attr('src',newIp);
            $('#sw_ring').css('transform', 'translateY(-50%) rotate(0deg)');
            $('#rankPanel').css({
                'opacity': '0',
                'transform': 'scale(0)'
            }) ;
            setTimeout(() => {
                $('#rankPanel').css({
                    'opacity': '1',
                    'transform': 'scale(1)'
                });
                $('#titleCatCtx').html(newTitleCtx);
            }, 400);
            
            setTimeout(() => {
                $('#titleCat').css({
                    'opacity': '1',
                    'transform': 'translateX(0%)'
                })
            }, 400);
        });
    });
}

function ringPanel() {
    $('.sw_rk').each(function () {
        
        $('.sw_rk').click(function (e) {

            moveR();
            switch ($(this).attr('id')) {
                case 'sw_1':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(0deg)');
                break;

                case 'sw_2':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(60deg)');
                break;

                case 'sw_3':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(120deg)');
                break;

                case 'sw_4':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(180deg)');
                break;

                case 'sw_5':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(240deg)');
                break;

                case 'sw_6':
                    $('#sw_ring').css('transform', 'translateY(-50%) rotate(300deg)');
                break;
            }
        })
    });
    
}

function createRadar() {
    var ctx = document.getElementsByClassName("radarCanvas")[0].getContext('2d');
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips = false;
    //改字體大小
    Chart.defaults.global.defaultFontSize = 20;
    //因為畫完一次圖表之後希望可以再變動，所以用變數代表每個項目的值
    good = 4.7;
    sweet = 3;
    sour = 3;
    spicy = 3;
    radarOptions = {
        scale: {
            ticks: {
                fontSize: 0,
                beginAtZero: true,
                maxTicksLimit: 7,
                min: 0,
                max: 5
            },
            pointLabels: {
                fontSize: 12,
                color: '#076baf'
            },
            gridLines: {
                // color: '#009FCC'
            }
        },
        maintainAspectRatio: false
    };
    radarCanvas = new Chart(ctx, {
        type: 'radar',
        data: {
            //項目標籤的文字
            labels: ["好評度", "甜", "酸", "辣"],
            datasets: [{
                // label: '# of Votes',
                data: [good, sweet, sour, spicy],
                backgroundColor: [
                    'rgba(233, 125, 88, 0.7)',
                ],
                borderColor: [
                    'rgba(233,125,88,1)',
                ],
                borderWidth: 2,
                //端點的大小
                pointRadius: 0,
            }]
        },
        options: radarOptions
    });
}
    
function init(){
    createRadar();
    ringPanel();
    allPanel();
}

window.addEventListener('load',init,false);