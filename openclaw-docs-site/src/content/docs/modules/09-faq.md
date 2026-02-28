---
title: 常见问题
---

# 常见问题

这里收集了使用 OpenClaw 时最常见的问题和处理建议。

---

## Q1: OpenClaw 响应很慢，怎么办？

### 快速故障树

1. 如果“所有请求都慢”  
   先查网络/API 服务状态，再看模型是否选了高延迟型号。
2. 如果“只有长会话慢”  
   开新会话并缩短上下文，精简过长 SOUL/AGENTS 内容。
3. 如果“某个场景特别慢”  
   先最小化步骤（只保留核心动作）再测一次，确认是否是流程太重。
4. 如果“偶发慢”  
   记录时间段和模型，观察是否与服务波动有关。

> 第三方经验链接（可能过期，仅供参考）：[OpenClaw 速度性能优化](http://xhslink.com/o/AXdlJcyV7ij)

---

## Q2: 我不知道该配置什么 Skill，怎么办？

### 可行路径

1. 在 ClawdHub 搜索现成 Skill
2. 在 GitHub 搜索 `openclaw-skill`
3. 让 AI 先读 `/docs/skills/` 再给推荐

### 对 AI 说的话

```text
请查阅 /docs/skills/，按“我的目标、部署成本、维护难度”推荐 3 个 Skill，并给出安装顺序。
```

---

## Q3: 配置改坏了怎么办？

### 快速故障树

1. 如果网关起不来  
   先执行 `openclaw doctor`，再看诊断输出。
2. 如果最近刚改过配置  
   按 [配置管理与维护](./08-config-management.md) 使用 `git revert` 回滚最近问题提交。
3. 如果回滚后仍异常  
   对比备份文件与当前配置差异，逐项恢复。

### 第一步：先诊断

```bash
openclaw doctor
```

### 第二步：按配置管理流程回滚

请直接参考 [配置管理与维护](./08-config-management.md) 的“安全回滚（git revert）”章节。  
建议不要使用 `git checkout HEAD~1` 这种容易误用的方式。

### 第三步：恢复后验证（很重要）

```bash
openclaw gateway status
```

然后在聊天平台发送一条测试消息，确认：

- 能收到回复
- 回复格式正常（换行、代码块、链接）
- 关键场景命令可执行（至少跑通一个最小任务）

---

## Q4: 如何让 OpenClaw 记住我的偏好？

偏好建议维护在 `~/.openclaw/workspace/USER.md`。

### 对 AI 说的话

```text
请更新 ~/.openclaw/workspace/USER.md，新增以下偏好：
- 回答先给结论再给解释
- 代码示例优先 TypeScript
- 高风险操作前先确认
```

---

## Q5: 如何获取官方帮助？

### 官方资源

1. GitHub 仓库：[openclaw/openclaw](https://github.com/openclaw/openclaw)
2. 官方文档（仓库 `docs/` 目录）
3. GitHub Issues（报告 Bug）

---

## 仍然不确定怎么改配置？

先回到 [核心原则：查阅 Docs](./04-core-principles.md)，按“先查 docs -> 给最小方案 -> 看 diff -> 再执行”的流程走，一般能避免大多数配置错误。

回到 [索引](../index.md) 继续阅读其他章节。
