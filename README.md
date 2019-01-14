# testG2
測試創建共同git空間協同合作

## 待確認疑問
- 專案資料夾 > 50MB 十分龐大。是否全丟上去？
 -- 暫時解: 建立 .gitignore 檔案，內容輸入 node_modules 。用來忽略nodejs的模組包
- 專案資料夾打包提取必要檔案的方法?
 -- 遇到再問薄荷0.0 
- html 連結 style.css，且 _xxx.scss 被import到 style.scss時，則開發時儲存 _xxx.scss 無法看見html同步改變，必須連同 style.scss一起儲存才會看到html同步改變