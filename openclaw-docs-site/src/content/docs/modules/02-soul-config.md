---
title: SOUL.md 配置
---

# SOUL.md 配置

SOUL.md 是 OpenClaw 中定义 AI 助手“人格”的核心文件，它决定了助手的行为风格、语气和边界。

---

## 本章产出

完成本章后，你应该已经：

- 明确 `workspace` 与配置目录的区别
- 知道每个核心文件的作用和加载时机
- 能安全地维护 `SOUL.md` 与 `USER.md`

---

## 什么是 Workspace？

OpenClaw 的 **workspace（工作空间）** 是助手的“家”和“记忆”。

**默认位置**：`~/.openclaw/workspace`

**重要区别**：
- **workspace** (`~/.openclaw/workspace`) - 存放助手的“记忆”和“人格”文件
- **配置目录** (`~/.openclaw/`) - 存放配置、凭证、会话记录等

---

## Workspace 文件结构

### 核心文件

| 文件 | 作用 | 是否必需 |
|-----|------|---------|
| `SOUL.md` | 定义助手 persona（人格）、语气、边界 | ✅ 必需 |
| `USER.md` | 定义你是谁、如何称呼、沟通偏好 | ✅ 必需 |
| `IDENTITY.md` | 定义助手名称、风格、emoji | ✅ 必需 |
| `AGENTS.md` | 定义操作规则、优先级、执行方式 | ✅ 必需 |
| `TOOLS.md` | 工具用途与调用约定 | ✅ 必需 |
| `HEARTBEAT.md` | 周期性任务检查清单 | ⚪ 可选 |
| `MEMORY.md` | 长期记忆摘要（默认仅私有会话加载） | ⚪ 可选 |
| `memory/YYYY-MM-DD.md` | 每日记忆日志 | ⚪ 可选 |

---

## 各文件说明

### SOUL.md - 助手人格

定义助手的“灵魂”：
- **Persona**：助手的角色定位
- **Tone**：说话的语气和风格
- **Boundaries**：行为边界和限制
- **Priorities**：优先级和价值观
- **安全规则**：防止泄露 TOKEN 等敏感信息

### USER.md - 用户信息

定义你是谁，助手应该如何称呼和对待你：
- 名字、职业、时区
- 交流方式和偏好

### IDENTITY.md - 助手身份

定义助手的名字、风格和 emoji：
- 助手的名字
- 风格描述
- 使用的 emoji

### AGENTS.md - 操作指令

定义助手的操作指令、规则和优先级：
- 如何使用 memory
- 行为规则
- 优先级设置

### TOOLS.md - 工具说明

本地工具和使用的约定说明：
- 工具的用途
- 使用约定
- 不控制工具可用性，只是指导

### HEARTBEAT.md - 心跳任务

OpenClaw 默认每 30 分钟运行一次“心跳”，执行其中的任务：
- 定期检查清单
- 自动任务执行

可以在配置中禁用心跳：

```json
{
  "agent": {
    "heartbeat": {
      "every": "0m"
    }
  }
}
```

---

## 配置建议

### 慢慢配置

这些配置文件不是一成不变的，可以慢慢调整：
- 刚开始使用默认配置即可
- 根据使用习惯逐步优化
- 安全规则建议尽早设置

### 安全注意事项

**不要在 Workspace 中存储**：
- ❌ API Key、Token、密码
- ❌ 聊天记录原文（可保留脱敏后的总结）
- ❌ 敏感的附件

---

## Workspace 文件的加载时机

### 每次会话都加载

以下文件会在**每次会话开始时**自动注入：
- SOUL.md
- USER.md
- IDENTITY.md
- AGENTS.md
- TOOLS.md

### 子会话加载

子会话只加载：
- AGENTS.md
- TOOLS.md

---

## 常用更新指令（对 AI 说的话）

```text
请更新 ~/.openclaw/workspace/USER.md，增加以下偏好：
- 我喜欢先给结论再解释
- 代码示例优先 TypeScript
- 修改配置前先列出计划和风险
```

```text
请审阅 ~/.openclaw/workspace/SOUL.md，保留语气风格不变，仅增强安全边界：
- 不在群聊输出 Token
- 涉及删除/覆盖操作前先确认
```

---

## 备份和恢复

**重要**：为了防止 OpenClaw 自己修改配置出错，建议定期备份 workspace。

详细的备份操作请参考：[配置管理与维护](./08-config-management.md)

---

## 下一步

Workspace 配置完成后，请继续阅读：
- [聊天平台配置](./03-channel-config.md) - 连接你的聊天软件
- [核心原则：查阅 Docs](./04-core-principles.md) - 理解如何正确配置
