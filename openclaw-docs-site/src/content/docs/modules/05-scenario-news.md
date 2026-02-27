---
title: 场景一：自动化论文推送
description: 通过 OpenClaw 和 Skill 自动获取研究领域最新论文，每日定时推送到 Discord 或飞书
---

# 场景一：自动化论文推送

通过现成的 Skill，自动获取你研究领域的最新论文，每日推送到 Discord 或飞书。不需要手动刷 arxiv，AI 帮你完成每日信息整理。

---

## 场景概述

| 项目 | 说明 |
|------|------|
| **核心能力** | 定时爬取 arxiv、过滤关键词、格式化推送 |
| **推送平台** | Discord、飞书、Slack（取决于你的 Skill 配置） |
| **所需时间** | 约 10-15 分钟完成配置 |

---

## 第 1 步：寻找合适的 Skill

在 [ClawdHub](https://clawdhub.com) 搜索关键词，或在 GitHub 搜索 `openclaw-skill arxiv`：

```
"请帮我在 ClawdHub 搜索关于 arXiv 论文推送的 Skill，推荐几个适合我的"
```

常见的 Skill 类型：
- **arxiv-daily**：每日自动推送指定分类的最新论文
- **paper-summary**：自动阅读并生成论文摘要
- **paper-recommend**：基于你的研究方向智能推荐

---

## 第 2 步：安装 Skill

```
"请帮我安装 arxiv-daily 这个 Skill"
```

安装完成后，Skill 会出现在你的 `~/.openclaw/skills/` 目录下。

---

## 第 3 步：配置推送参数

通过对话完成 Skill 配置：

```
"请帮我配置论文推送 Skill：
- 论文分类：cs.AI, cs.LG
- 筛选关键词：LLM, transformer, diffusion model, agent
- 排除关键词：survey（不看综述）
- 推送时间：北京时间每天早上 8:30
- 推送到我的 Discord 的 #paper-daily 频道
- 每次最多推送 5 篇，按引用量排序"
```

配置会写入 Skill 的 `config.yaml`，你可以随时修改。

---

## 第 4 步：测试推送

立刻手动执行一次，检查效果：

```
"帮我立刻测试一下论文推送，现在手动执行一次"
```

你应该会在 Discord 收到格式类似下面的消息：

```
📄 今日 AI 论文推送 (2024-02-27)

1. **Scaling Laws for Neural Language Models**
   ArXiv: 2001.08361 | ⭐ 引用: 3,200+
   📝 摘要：本文研究了语言模型...
   🔗 https://arxiv.org/abs/2001.08361

2. **Attention Is All You Need**
   ...
```

---

## 第 5 步：设置定时任务

```
"请帮我把这个论文推送设置为每天定时自动执行，不需要我手动触发"
```

OpenClaw 守护进程会接管定时任务，即使你关闭终端也能正常运行。

---

## 进阶：个性化摘要

如果你希望 AI 读论文并生成中文摘要：

```
"在推送时，帮我把每篇论文的 abstract 翻译成中文，并用 3 句话总结核心贡献"
```

---

## 下一步

- [场景二：远程代码编写](./06-scenario-coding.md)
- [配置管理与维护](./08-config-management.md)