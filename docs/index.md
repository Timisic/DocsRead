# OpenClaw 使用指南

> 让 AI 助手成为你生活与工作中的得力伙伴

---

## 目录

- [安装与部署](./modules/01-installation.md)
- [SOUL.md 配置](./modules/02-soul-config.md)
- [聊天平台配置](./modules/03-channel-config.md)
- [核心原则：查阅 Docs](./modules/04-core-principles.md)
- [场景一：自动化论文推送](./modules/05-scenario-news.md)
- [场景二：远程代码编写](./modules/06-scenario-coding.md)
- [配置管理与维护](./modules/08-config-management.md)
- [常见问题](./modules/09-faq.md)

---

## 什么是 OpenClaw

OpenClaw 是一个强大的 AI 助手框架，它允许你通过聊天平台（如飞书、Discord、WhatsApp 等）来操作你的电脑、管理任务、编写代码等。

**核心特点**：
- 多平台支持：可以在你常用的聊天软件上使用
- 高度可配置：支持自定义 Skills、Agents 等
- 自动化能力：可以设置定时任务、工作流等
- 远程操作：即使不在电脑前，也能控制你的电脑

---

## 快速开始

```bash
# 1. 安装
npm install -g openclaw@latest

# 2. 初始化并安装守护进程
openclaw onboard --install-daemon
```

> **注意**：需要 Node.js 环境。未安装请访问 [Node.js 官网](https://nodejs.org/)。

---

## 阅读顺序建议

1. **[安装与部署](./modules/01-installation.md)** - 完成系统安装
2. **[AI 平台配置](./modules/02-ai-config.md)** - 配置 AI 模型
3. **[聊天平台配置](./modules/03-channel-config.md)** - 连接你的聊天软件
4. **[核心原则：查阅 Docs](./modules/04-core-principles.md)** - 理解如何正确配置
5. **场景模块** - 选择适合你的使用场景
   - [自动化论文推送](./modules/05-scenario-news.md)
   - [远程代码编写](./modules/06-scenario-coding.md)

---

*遇到问题？查看 [常见问题](./modules/09-faq.md)*
