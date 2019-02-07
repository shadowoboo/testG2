function createRadar() {
    var ctx = document.getElementById("radarCanvas").getContext('2d');
    // console.log(ctx);
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips = false;
    //改字體大小
    // Chart.defaults.global.defaultFontSize = '12';
    //因為畫完一次圖表之後希望可以再變動，所以用變數代表每個項目的值
    good = 3;
    sweet = 3;
    sour = 3;
    spicy = 3;
    radarOptions =
        {
            scale:
            {
                ticks:
                {
                    fontSize: 0,
                    beginAtZero: true,
                    maxTicksLimit: 7,
                    min: 0,
                    max: 5
                },
                pointLabels:
                {
                    //label字體大小
                    fontSize: 14,
                    color: '#0044BB'
                },
                gridLines:
                {
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
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 1,
                //端點的大小
                pointRadius: 1,
            }]
        },
        options: radarOptions
    });
}
//取得新的值並依此更新雷達圖
function showRadar(e){
   var id = e.target.id;
   var kindArr = id.split('|');
   console.log(kindArr);
}
window.addEventListener('load', function (){
    createRadar();
    var items = document.getElementsByClassName('item');
    for(var i = 0; i < items.length; i++){
        items[i].addEventListener('mouseover', showRadar);
    }
});