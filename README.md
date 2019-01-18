# testG2
測試創建共同git空間協同合作

## 待確認疑問
- 專案資料夾 > 50MB 十分龐大。是否全丟上去？
 -- 暫時解: 建立 .gitignore 檔案，內容輸入 node_modules 。用來忽略nodejs的模組包
- 專案資料夾打包提取必要檔案的方法?
 -- 遇到再問薄荷0.0 
- html 連結 style.css，且 _xxx.scss 被import到 style.scss時，則開發時儲存 _xxx.scss 無法看見html同步改變，必須連同 style.scss一起儲存才會看到html同步改變

## 如何一起作業
1. clone 專案到自己電腦 (clone會內建有.git，所以不用再 git init 一次)
2. 在此專案內 npm i 安裝node.js套件
3. 在工作資料夾新增自己的檔案
 - 在 page 資料夾建立你的.html
 - 在 sass 資料夾建立你的.scss (個人的.scss不加底線，各用各的。共用css請link style.css)
 - 在 js 資料夾建立你的 .js
 - 在 images 資料夾新增你的圖片素材
4. 你將經過一段 coding ，史詩般的戰鬥
5. 選擇或建立你的分支 (branch)，並推回你的 branch。 (推錯會變更他人檔案!!!!)
6. 回到 步驟4. 繼續下一場戰鬥，直到時機到來 
7. 等待合併的時機到來，我們的心血終將成為一體

## 環境說明
可以使用任何套件，但有新增套件請再推回來一起更新
此專案不含 node_moudle ，請clone或下載回去之後自行 npm i 安裝模組實體
### 當前的 node.js 套件與 js 套件與版本
    - "browser-sync": "^2.26.3",
    - "gasp": "0.0.2",
    - "gsap": "^2.0.2",
    - "gulp": "^3.9.1",
    - "gulp-jquery": "^1.1.2",
    - "gulp-sass": "^4.0.2",
    - "scrollmagic": "^2.0.6"

