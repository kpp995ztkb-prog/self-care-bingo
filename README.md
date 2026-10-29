# Self-care Bingo · 自我关爱

把爱自己做成小游戏。适配手机和桌面的自我关爱九宫格，使用原生 HTML、CSS 和 JavaScript，无需安装依赖或构建。

## 本地运行

```sh
python3 -m http.server 5173 --directory dist
```

打开 http://localhost:5173/。手机连接与电脑相同的 Wi-Fi，访问电脑的局域网 IP 和端口 5173。

## 功能与流程

- 每次打开或刷新先显示首页。
- 点击开始后，无记录进入编辑；有记录恢复上次的卡片、完成进度和编辑／执行状态。
- 点击替换卡片、左右滑动选卡、长按换位、随机换一组。
- 确认后开始打卡，完成卡片盖星星，只有新完成的卡片播放动画。
- 新增三格连线时，两侧播放礼花。
- 保存进度和导出卡片图片；分享入口已移除。

## 项目结构

- `dist/`：网页版静态文件。
- `dist/intro.js`：首页、打开流程和手机一屏布局。
- `dist/app.js`：卡片交互、状态和图片导出。
- `dist/assets/`：插画和纹理。
- `minitool/`：适配小红书离线容器的静态版本。
- `downloads/self-care-bingo-minitool-20261027.zip`：最近校验的小红书上传包。
- `.openai/hosting.json`：现有 Sites 发布配置。

## 验证

```sh
node --check dist/app.js
node --check dist/intro.js
node --check minitool/app.js
node --check minitool/compat.js
node --check minitool/intro.js
```

手动检查手机布局、拖拽和滑动、连续点亮、连线礼花、刷新后首页、点击开始恢复记录及图片导出。减少动态效果设置可缩减动画。

小工具 ZIP 的 `index.html` 位于根目录，所有静态资源随包提供，图片保存使用平台相册接口。静态校验已完成，仍需在创服平台模拟器以及 Android、iOS 真机验证相同产物；普通浏览器不能作为容器兼容性或性能验收依据。

## 数据与素材

网页版记录保存在浏览器本地。小工具版优先使用平台 Storage，低版本才降级到浏览器存储。卸载或清理数据可能导致记录丢失。

插画素材来自用户提供的设计文件。仓库公开可见，但未另行授予素材或项目的开源许可。
