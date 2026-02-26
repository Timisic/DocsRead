# 常见问题

这里收集了使用 OpenClaw 过程中可能遇到的问题和解决方法。

---

## Q1: OpenClaw 响应很慢，怎么办？

### 原因

OpenClaw 是一个庞大的系统，调用 AI 模型需要一定时间。响应慢可能是因为：
- 使用了较慢的 AI 模型（如 GPT-4 或 Claude Opus）
- 网络连接问题
- 上下文臃肿（因为session过长或是SOUL.md文件过长）

### 解决方法

详细解决方案请参考：[OpenClaw 速度性能优化](http://xhslink.com/o/AXdlJcyV7ij)

---

## Q2: 我不知道应该配置什么 Skill，怎么办？

### 从社区获取

1. **ClawdHub** - 官方 Skill 市场
   - 提供经过验证的现成 Skills
   - 覆盖常见使用场景

2. **GitHub 仓库**
   - 搜索 `openclaw-skill` 关键词
   - 许多开发者开源了自己编写的 Skills

### 查阅本地文档

```bash
"请查阅 /docs/skills/ 下所有的 Skills，告诉我每个 Skill 的用途"
```

---

## Q3: 配置出错导致系统崩溃了，怎么办？

### 方法一：使用 openclaw doctor

OpenClaw 内置诊断工具，可以自动检测并修复常见问题：

```bash
openclaw doctor
```

### 方法二：Git 回滚

如果你遵循了配置管理的最佳实践（使用 Git），可以轻松回滚：

```bash
cd ~/.openclaw
# 查看提交历史
git log --oneline
# 回退到上一个版本
git checkout HEAD~1
```

### 方法三：手动恢复备份

```bash
# 如果你有手动备份
cp ~/.openclaw/config.backup ~/.openclaw/config.yaml
```

---

## Q4: 如何让 OpenClaw 记住我的偏好？

OpenClaw 通过 `SOUL/USER.md` 文件来记忆用户偏好。

### 更新个人偏好文件

```bash
"请更新我的 SOUL/USER.md 文件，添加以下偏好：
- 我喜欢简洁的回答
- 编程时优先使用 TypeScript
- 遇到问题时先给解决方案再给解释"
```

### 定期维护

随着使用时间增长，定期让 AI 整理和更新这个文件，确保它始终反映你当前的偏好。

---

## Q5: 如何获取帮助？

### 官方资源

1. **GitHub 仓库**：https://github.com/openclaw/openclaw
   - 查看文档和示例
   - 提交 Issue 报告问题

2. **社区论坛**（如果有）：
   - 讨论使用经验
   - 获取社区支持

回到 [索引](../index.md) 继续其他章节。
