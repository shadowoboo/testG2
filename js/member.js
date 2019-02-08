// $(document).ready(function(){
//     //先建立匿名函式頁籤群組
//     $('.tab-list').each(function(){//取得頁籤列表
//         //儲存目前的頁籤列表
//         var $this = $(this);
//         //取得目前啟用的項目清單
//         var $tab = $this.find('li.active');
//         //取得頁籤裡的a
//         var $link = $tab.find('a');
//         //取得頁籤內容面版
//         var $panel = $($link.attr('href'));

//         // console.log("start-----"+$this);
//         // console.log($tab);
//         // console.log($link);
//         // console.log($panel+"----end");
        

//         //點擊頁籤時的動作
//         $this.click(function(e){
//             console.log(`9999`);
            
//             //停止超連結預設動作
//             e.preventDefault();
//             //儲存此超連結
//             var $link = $(this);
//             //取得被點擊的超連結內容
//             var id = this.hash;

//             //如果active尚未啟用
//             if(id && !$link.is('.active')){
//                 //將目前面板設為未啟用
//                 $panel.removeClass('active');
//                 //將目前頁籤設為未啟用
//                 $tab.removeClass('active');
//                 //將新面板設為啟用
//                 $panel = $(id).addClass('active');
//                 //將新頁籤設為未啟用
//                 $tab = $link.parent().addClass('active');

//             }
//         });
        

//     });

// });

function changeTabs(e,tablist){
    var i,tablinks,tabPanel;
    tabPanel = document.getElementsByClassName('tabPanel');
    for (i = 0;  i< tabPanel.length; i++) {
        tabPanel[i].style.display = "none";   
    }
    tablinks = document.getElementsByClassName('tablinks');
    for(i =0; i<tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace("activ", "");
    }
    document.getElementById('tablist').style.display = "block";
    e.currentTarget.className += "active";
   
}
document.getElementById('defaultOpen').click();




