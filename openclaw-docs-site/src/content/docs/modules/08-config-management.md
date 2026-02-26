---
title: 配置管理与维护
---

# 配置管理与维护

## OpenClaw 的"双刃剑"特性

### 好处

- 可以完全定制你需要的功能
- 能适应各种特殊场景
- 随着你的需求变化而调整

### 风险

- 不当的修改会导致系统越来越难用
- 一次错误的修改可能让整个系统崩溃 => `openclaw doctor`
---

## 最佳实践

### 1. 版本控制（最重要）

用 Git 管理你的配置，这是最基础也是最重要的习惯。

#### 初始化

```bash
cd ~/.openclaw
git init
git add .
git commit -m "Initial configuration"
```

#### 每次修改前提交

```bash
git commit -am "Updated news push configuration"
```

#### 查看历史

```bash
git log --oneline
```

#### 回退到之前的状态

```bash
git checkout HEAD~1
```

### 2. 逐步修改

不要一次性修改太多东西，每次只做一个小改动。

明确、具体、可追溯。

### 3. 查阅文档

始终让 AI 查阅官方文档，确保配置的正确性。

```bash
"请查阅 /docs/ 下关于 XX 的文档，然后按照文档帮我修改配置"
```

### 4. 备份关键配置

定期备份重要的配置文件。

```bash
cp ~/.openclaw/config.yaml ~/.openclaw/config.backup
```

### 5. 定期清理

定期检查并清理不用的配置。

```bash
"帮我检查一下配置，有哪些是现在不用的，可以清理掉"
```

---

## 下一步

了解配置管理后，你可以：
- 查看 [常见问题](./09-faq.md)
- 或者回到 [索引](../index.md) 继续其他章节
