---
title: 配置管理与维护
---

# 配置管理与维护

本章聚焦“如何长期稳定维护配置”，避免越改越乱。

> 注意：本章示例按 `~/.openclaw/openclaw.json` 编写；如果你使用的版本结构不同，以官方 docs 为准。

---

## 本章产出

完成本章后，你应该已经：

- 用 Git 管理 `~/.openclaw` 配置目录
- 建立“修改 -> 验证 -> 回滚”的最小闭环
- 知道如何安全回退错误配置

---

## 先统一一个原则

配置变更前，先按 [核心原则：查阅 Docs](./04-core-principles.md) 执行。  
本章不重复讲“为什么查文档”，只讲如何管理变更。

---

## 1) 用 Git 管理配置目录（最重要）

### 终端命令：初始化

```bash
cd ~/.openclaw
git init
git add .
git commit -m "chore: initial openclaw config snapshot"
```

### 终端命令：每次改动后提交

```bash
cd ~/.openclaw
git add .
git commit -m "chore: update channel and skill settings"
```

### 终端命令：查看历史

```bash
cd ~/.openclaw
git log --oneline -n 20
```

成功信号（示例）：

```text
a1b2c3d chore: update channel and skill settings
9f8e7d6 chore: initial openclaw config snapshot
```

---

## 2) 安全回滚（优先使用 revert）

不要直接 `git checkout HEAD~1`。对多数用户，更安全的是用 `git revert` 生成反向提交。

### 终端命令：回滚指定提交

```bash
cd ~/.openclaw
git log --oneline -n 20
git revert <commit_hash>
```

成功信号（示例）：

```text
[main 1a2b3c4] Revert "chore: update channel and skill settings"
 1 file changed, 4 insertions(+), 6 deletions(-)
```

何时用 `revert`，何时开新分支修复：

- 变更已提交并希望安全撤销：优先 `git revert`
- 要做较大修复、涉及多轮验证：开新分支修复后再合并

---

## 3) 关键文件备份

本指南默认主配置文件为 `~/.openclaw/openclaw.json`。

### 终端命令：手动备份

```bash
cp ~/.openclaw/openclaw.json ~/.openclaw/openclaw.backup.json
cp -r ~/.openclaw/workspace ~/.openclaw/workspace.backup
```

成功信号（示例）：

```text
# 无输出即成功；可用 ls ~/.openclaw 验证备份文件存在
```

---

## 4) 每次修改建议采用同一流程

1. 先说明目标（只改一个功能点）
2. 让 AI 先给修改计划和 diff
3. 你确认后再写入
4. 立即验证功能
5. 通过后再提交 Git

### 对 AI 说的话

```text
请先查阅相关 docs，再给我最小修改方案和 diff。
我确认后再执行写入，写入后给验证步骤。
```

---

## 5) 定期清理

### 对 AI 说的话

```text
请审查 ~/.openclaw 当前配置，列出：
1) 已废弃或未使用的字段
2) 可简化的重复配置
3) 建议删除项（不要直接删除）
```

---

## 下一步

- [常见问题](./09-faq.md)
- [回到索引](../index.md)
