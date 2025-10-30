# YICUN 盈虧速算 Pro（PWA）部署教學

包含：
- YICUN_ROI_Quick_App_Pro.html（Pro 版：每日記錄＋月累計）
- manifest.json（PWA 設定）
- service-worker.js（離線快取）
- yicun_icon_192.png、yicun_icon_512.png（App 圖示）

## 使用方式 A：GitHub Pages（推薦）
1. 建立公開 Repo（例如 yicun-roi）。
2. 上傳本資料夾全部檔案到 Repo 根目錄。
3. Settings → Pages → Branch：main（或 master），Folder：/root → Save。
4. 用手機開 `https://<你的帳號>.github.io/<repo>/YICUN_ROI_Quick_App_Pro.html`
5. iPhone：Safari → 分享 → 加入主畫面；Android：Chrome → ⋮ → 加到主畫面。

## 使用方式 B：本機單檔
直接用瀏覽器開 `YICUN_ROI_Quick_App_Pro.html`，也可加入主畫面（但無離線快取）。

## 注意
- PWA 離線快取僅在 https 或 localhost 生效。
- 所有數據（營業額、廣告費、每日記錄）只存本機瀏覽器的 localStorage，不會上傳。
