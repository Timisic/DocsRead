---
title: 术语速查表
description: OpenClaw 入门阶段最常见术语的一句话解释
---

# 术语速查表

这份速查表用于降低首次阅读门槛。遇到陌生词时可回看本页。

---

## 核心概念

| 术语 | 一句话解释 | 常见位置 |
|-----|------------|---------|
| `onboarding` | 首次初始化向导，用于完成基础配置与服务安装 | [安装与部署](./01-installation.md) |
| `gateway` | OpenClaw 后台网关进程，负责收发消息与调度任务 | [安装与部署](./01-installation.md) |
| `workspace` | 助手长期行为与记忆文件所在目录 | [SOUL.md 配置](./02-soul-config.md) |
| `SOUL.md` | 定义助手人格、语气与边界的核心文件 | [SOUL.md 配置](./02-soul-config.md) |
| `USER.md` | 定义你的偏好、称呼和沟通习惯的文件 | [SOUL.md 配置](./02-soul-config.md) |
| `AGENTS.md` | 定义助手操作规则和执行优先级 | [SOUL.md 配置](./02-soul-config.md) |
| `TOOLS.md` | 定义工具使用约定与限制 | [SOUL.md 配置](./02-soul-config.md) |
| `Skill` | 可复用能力模块（如论文推送、摘要、自动化任务） | [场景一：自动化论文推送](./05-scenario-news.md) |
| `guild` | Discord 中的“服务器”概念 | [聊天平台配置](./03-channel-config.md) |
| `intent` | Discord Bot 可访问事件类型的权限开关 | [聊天平台配置](./03-channel-config.md) |
| `diff` | 代码或配置变更对比结果，用于先审后改 | [场景二：远程代码编写](./06-scenario-coding.md) |
| `revert` | 用反向提交撤销某次变更，适合新手安全回滚 | [配置管理与维护](./08-config-management.md) |

---

## 路径速记

- 主配置目录：`~/.openclaw`
- 主配置文件：`~/.openclaw/openclaw.json`（如版本不同，以官方 docs 为准）
- Workspace：`~/.openclaw/workspace`

---

## 下一步

- [安装与部署](./01-installation.md)
- [SOUL.md 配置](./02-soul-config.md)
