---
title: OpenClaw 使用指南
description: 让 AI 助手成为你生活与工作中的得力伙伴
---

# OpenClaw 使用指南

---

## 你将获得什么

读完本指南后，你可以完成以下目标：

- 在本机完成 OpenClaw 安装与验证
- 配置 Workspace（SOUL/USER/AGENTS 等核心文件）
- 连接 Discord 或飞书并开始日常使用
- 跑通“自动化论文推送”和“远程代码编写”两个典型场景

---

## 阅读前约定

- 本指南中的配置示例默认使用 `~/.openclaw/openclaw.json`。
- 不同版本 OpenClaw 可能有配置差异；如果冲突，请以官方文档为准。
- 配置类操作建议先阅读 [核心原则：查阅 Docs](./modules/04-core-principles.md)。

---

## 目录

- [术语速查表](./modules/00-terms.md)
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

- 如果你是第一次使用，请直接从 [安装与部署](./modules/01-installation.md) 开始。
- 安装章节里包含完整命令、验证步骤与常见排错。

---

## 10-15 分钟快速演练（第一次建议）

如果你想先跑通一条最短链路，可以按下面 6 步执行：

1. 按 [安装与部署](./modules/01-installation.md) 完成 CLI 安装与 onboarding。
2. 执行 `openclaw gateway status`，确认 Gateway 正常。
3. 按 [聊天平台配置](./modules/03-channel-config.md) 连接 Discord（或飞书）。
4. 在聊天平台给 Bot 发送一条“你好”，确认有回复。
5. 在聊天里发送“请读取 docs 并告诉我我现在可以做什么”。
6. 任选一个场景开始实操：
   - [场景一：自动化论文推送](./modules/05-scenario-news.md)
   - [场景二：远程代码编写](./modules/06-scenario-coding.md)

---

## 阅读顺序建议

1. **[安装与部署](./modules/01-installation.md)** - 完成系统安装
2. **[SOUL.md 配置](./modules/02-soul-config.md)** - 配置 AI 模型和行为
3. **[聊天平台配置](./modules/03-channel-config.md)** - 连接你的聊天软件
4. **[核心原则：查阅 Docs](./modules/04-core-principles.md)** - 理解如何正确配置
5. **场景模块** - 选择适合你的使用场景
   - [自动化论文推送](./modules/05-scenario-news.md)
   - [远程代码编写](./modules/06-scenario-coding.md)

---

*遇到问题？查看 [常见问题](./modules/09-faq.md)*
