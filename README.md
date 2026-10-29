# 爱自己 Bingo Card

**把爱自己做成小游戏。**

挑选九件关爱自己的小事，完成一件就盖上一颗星星，三格连线收获小礼花。

[![在线体验 · 爱自己 Bingo](https://raw.githubusercontent.com/kpp995ztkb-prog/self-care-bingo/main/docs/images/try-now.svg)](https://kpp995ztkb-prog.github.io/self-care-bingo/)

## 效果预览

<p>
  <a href="https://kpp995ztkb-prog.github.io/self-care-bingo/"><img src="https://raw.githubusercontent.com/kpp995ztkb-prog/self-care-bingo/main/docs/images/home-preview.png" width="300" alt="爱自己 Bingo 首页预览，点击在线体验"></a>
  <a href="https://kpp995ztkb-prog.github.io/self-care-bingo/"><img src="https://raw.githubusercontent.com/kpp995ztkb-prog/self-care-bingo/main/docs/images/board-preview.png" width="300" alt="自我关爱九宫格与星星盖章效果，点击在线体验"></a>
</p>

*首页与九宫格的真实手机布局截图。点击上方按钮或预览图即可开始游戏。*

手机、平板和电脑都可以直接打开，无需安装或运行本地服务。

[![Publish to GitHub Pages](https://github.com/kpp995ztkb-prog/self-care-bingo/actions/workflows/pages.yml/badge.svg)](https://github.com/kpp995ztkb-prog/self-care-bingo/actions/workflows/pages.yml)

## 怎么玩

1. 点击首页「开始制作卡片」。
2. 点击卡片替换事项，左右滑动挑选；长按拖动换位，也可以随机换一组或自己写一件小事。
3. 点击「确认」，开始你的自我关爱 Bingo。
4. 完成一件小事，点击对应卡片盖上星星；三格横、竖或斜线连成一线，会出现两侧小礼花。
5. 可以下载整张卡片图片，保留此刻的进度。

每次打开或刷新都先显示首页。再次点击开始时，会恢复这台设备、这个浏览器上次保存的卡片、进度和编辑／执行状态；没有记录则进入编辑页。不同设备之间不自动同步，清理浏览器数据可能导致记录丢失。

## 小红书小工具版

[下载小红书上传 ZIP](downloads/self-care-bingo-minitool-20261027.zip)

`minitool/` 是独立适配的离线容器版本，图片通过平台相册接口保存，优先使用平台 Storage。ZIP 内的 `index.html` 位于根目录。静态检查已完成，上传创服平台后仍需完成平台模拟器及 Android、iOS 真机验证；普通浏览器运行不能代替容器验收。

## 发布与维护

这是纯静态应用：`dist/` 中的 HTML、CSS、JavaScript 和本地素材就是可发布产物，不需要后端、数据库、API 密钥或前端构建步骤。

- **线上托管**：GitHub Pages，发布目录为 `dist/`。
- **自动部署**：推送 `main` 的 `dist/` 更新后，`.github/workflows/pages.yml` 自动检查 JavaScript、打包静态文件并发布。
- **手动部署**：进入仓库 Actions → Deploy public app to GitHub Pages → Run workflow。
- **部署状态**：查看上方状态徽章或仓库 Actions；成功后的公开地址始终是上方「在线体验」。

资源采用相对路径，支持 GitHub Pages 的 `/self-care-bingo/` 子路径。原有 `.openai/hosting.json` 仅用于另一套 Sites 托管，不影响 GitHub Pages 发布。

## 目录

| 路径 | 用途 |
| --- | --- |
| `dist/index.html` | 应用入口及首页 |
| `dist/intro.js` | 首次／回访流程及手机一屏布局 |
| `dist/app.js` | 卡片编辑、拖拽、打卡、连线与图片导出 |
| `dist/style.css` | 响应式样式和动画 |
| `dist/assets/` | 插画、纹理及标题素材 |
| `.github/workflows/pages.yml` | GitHub Pages 自动部署 |
| `minitool/` | 小红书容器适配版源码 |
| `downloads/` | 小红书上传包 |

## 本地开发（仅开发者需要）

```sh
git clone https://github.com/kpp995ztkb-prog/self-care-bingo.git
cd self-care-bingo
python3 -m http.server 5173 --directory dist
```

然后访问 http://localhost:5173/。这是开发调试方式，普通用户请直接使用上方在线地址。

修改后可运行：

```sh
node --check dist/app.js
node --check dist/intro.js
node --check minitool/app.js
node --check minitool/compat.js
node --check minitool/intro.js
```

手动检查手机布局、滑动选卡、拖拽换位、刷新后首页、保存记录恢复、单卡盖章、三格连线和图片导出。浏览器的「减少动态效果」设置会缩减动画。

## 素材与使用权限

插画素材来自用户提供的设计文件。仓库公开可见，但未另行授予素材或项目的开源许可。
