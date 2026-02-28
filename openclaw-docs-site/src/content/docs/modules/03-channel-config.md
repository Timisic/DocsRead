---
title: 聊天平台配置
---

# 聊天平台配置

---

## 本章产出

完成本章后，你应该已经：

- 连接至少一个聊天平台（推荐 Discord）
- 能让 OpenClaw 在私聊中稳定收发消息
- 了解服务器模式下的扩展配置（guild allowlist / mention 策略）

---

## 常用平台

| 平台 | 特点 |
|-----|------|
| **飞书** | 国内访问友好，企业协作场景常见 |
| **Discord** | 支持私聊、服务器频道会话、commands、附件等常用能力 |

---

## 配置前说明

- 本章示例默认基于 `~/.openclaw/openclaw.json`。
- 如果你的版本使用其他配置格式，请以官方文档为准。
- 配置前建议先阅读 [核心原则：查阅 Docs](./04-core-principles.md)。

---

## Discord 配置（推荐）

> 第三方经验链接（仅供参考）：[小红书（包含多 bots 配置）](http://xhslink.com/o/7BSZPzHi5HG)

### 前置条件

- 已有 Discord 账号
- 已创建或加入一个你可管理的 Discord 频道（channel）

### 第 1 步：创建 Discord 应用和 Bot

1. 打开 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击 **New Application**，创建应用（例如命名为 `OpenClaw`）
3. 进入左侧 **Bot** 页面
4. 设置机器人的用户名（Username）

### 第 2 步：启用 Privileged Intents

在 **Bot** 页面 -> **Privileged Gateway Intents** 中启用：

- ✅ **Message Content Intent**（必需）
- ✅ **Server Members Intent**（推荐）
- ⚪ **Presence Intent**（可选）

### 第 3 步：生成并保存 Bot Token

在 **Bot** 页面点击 **Reset Token**（首次创建也通过这个入口拿 token）。

### 第 4 步：邀请 Bot 进入你的服务器

1. 进入左侧 **OAuth2** -> **URL Generator**
2. 选中 scopes：
   - `bot`
   - `applications.commands`
3. 选中 Bot 权限：
   - View Channels
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
4. 复制生成 URL 并在浏览器打开
5. 选择目标频道（前面必须先创建频道）并完成授权

### 第 5 步：写入 OpenClaw 配置

#### 对 AI 说的话

```text
请根据官方 docs/channels/discord 文档，帮我把 Discord Bot Token 写入 ~/.openclaw/openclaw.json，并在修改后给我 diff。
```

#### 手动配置示例（`~/.openclaw/openclaw.json`）

```json5
{
  channels: {
    discord: {
      enabled: true,
      token: "YOUR_BOT_TOKEN",
    },
  },
}
```

配置完成后重启网关：

```bash
openclaw gateway restart
```

---

## 服务器模式（可选）

如果你希望 Bot 在私有服务器的频道里工作，可以继续配置：

### 步骤 1：获取 `<server_id>`

1. Discord 设置 -> Advanced -> 开启 **Developer Mode**
2. 右键目标服务器
3. 点击 **Copy Server ID**

### 步骤 2：将服务器加入 guild allowlist

```text
请把服务器 ID <server_id> 加入 Discord guild allowlist，并告诉我修改了哪些字段。
```

### 步骤 3：按需关闭 @ 提及限制

```text
请仅在这个私有服务器中关闭“必须 @ 才回复”的限制，不影响其他服务器。
```

---

## 验证清单

- [ ] 私聊 Bot 可以收到回复
- [ ] 频道里（若已配置）Bot 行为符合预期（@ 或免 @）
- [ ] 代码块/换行/附件显示正常
- [ ] 重启网关后配置仍生效

---

## 官方文档

- Discord：[openclaw/docs/channels/discord.md](https://github.com/openclaw/openclaw/blob/main/docs/zh-CN/channels/discord.md)
- 飞书：[openclaw/docs/channels/feishu.md](https://github.com/openclaw/openclaw/blob/main/docs/zh-CN/channels/feishu.md)

---

## 下一步

- [核心原则：查阅 Docs](./04-core-principles.md)
- [场景一：自动化论文推送](./05-scenario-news.md)
