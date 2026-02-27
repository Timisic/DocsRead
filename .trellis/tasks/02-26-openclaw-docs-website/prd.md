# OpenClaw 文档静态网站

## 目标

使用 Astro 框架构建一个静态文档网站，用于展示 OpenClaw 使用指南的内容。

## 需求

### 设计风格
- 参考 tasknotes.dev 的设计风格
- 简洁、现代、不过度装饰
- **不要黑暗模式**（Light mode only）
- 清晰的层次结构

### 功能要求
1. **侧边栏导航**
   - 显示文档章节结构
   - 当前页面高亮
   - 可折叠/展开

2. **代码块复制功能**
   - 每个代码块有复制按钮
   - 点击后复制内容到剪贴板
   - 复制后有视觉反馈

3. **搜索功能**
   - 全文搜索所有文档内容
   - 实时搜索结果
   - 搜索框固定在导航栏

4. **移动端支持**
   - 响应式设计
   - 移动端侧边栏可收起
   - 触摸友好的交互

### 内容来源
- 文档来源：`docs/` 目录
- 语言：中文
- 结构：index.md + modules/*.md

### 技术栈
- 框架：Astro
- 样式：Tailwind CSS 或原生 CSS
- 搜索：pagefind 或 astrojs/starlight 集成
- 部署：支持 Vercel/GitHub Pages

## 验收标准
- [ ] Astro 项目初始化成功
- [ ] 侧边栏导航正常工作，显示所有章节
- [ ] 代码块有复制按钮，功能正常
- [ ] 搜索功能可用，能找到文档内容
- [ ] 移动端显示正常，侧边栏可收起
- [ ] 没有黑暗模式，始终使用浅色主题
- [ ] 本地构建成功 (`npm run build`)

## 技术说明
- 首页使用 docs/index.md
- 章节页面使用 docs/modules/*.md
- 建议使用 Astro 的 Content Collections 功能处理 markdown
- 建议考虑使用 Starlight 主题或自定义布局

## 目录结构建议
```
/
├── src/
│   ├── pages/
│   ├── components/
│   └── layouts/
├── public/
└── docs/
    ├── index.md
    └── modules/
```