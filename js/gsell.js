
// Initialize and add the map初始化並添加地圖
function initMap() {
    // 下面的代碼構造了一個新的Google地圖對象，並向地圖添加了屬性，包括中心和縮放級別。
    
      // The location of Uluru烏魯魯的位置
      var taipei = {lat: 24.9650192, lng: 121.1909533};
      // The map, centered at Uluru地圖以烏魯魯為中心
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 4, center: taipei});
      // The marker, positioned at Uluru標記，位於烏魯魯。下面的代碼在地圖上放置一個標記。
      var marker = new google.maps.Marker({position: taipei, map: map});
    }
      
     
//   剩下申請金鑰 