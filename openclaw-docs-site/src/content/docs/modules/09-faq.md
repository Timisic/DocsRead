---
title: 常见问题
---

# 常见问题

这里收集了使用 OpenClaw 时最常见的问题和处理建议。

---

## Q1: OpenClaw 响应很慢，怎么办？

### 常见原因

- 模型本身慢（例如高质量大模型）
- 网络延迟或 API 服务波动
- 上下文过长（会话历史、SOUL/AGENTS 过重）

### 建议处理顺序

1. 先确认网络与模型可用性
2. 缩短会话上下文，按主题开新会话
3. 精简过长的配置文件内容
4. 再做性能参数调优

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

### 第一步：先诊断

```bash
openclaw doctor
```

### 第二步：按配置管理流程回滚

请直接参考 [配置管理与维护](./08-config-management.md) 的“安全回滚（git revert）”章节。  
建议不要使用 `git checkout HEAD~1` 这种容易误用的方式。

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
