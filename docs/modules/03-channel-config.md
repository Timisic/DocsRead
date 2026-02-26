# 聊天平台配置

OpenClaw 支持多个聊天平台，你可以选择最常用的一个来使用。

---

## 支持的平台

| 平台 | 特点 | 适合人群 |
|-----|------|---------|
| **飞书** | 功能丰富，国内访问快 | 国内用户、企业用户 |
| **Discord** | 社区活跃，开发者友好 | 开发者、海外用户 |

---

## Discord 配置（推荐）

Discord 是开发者社区最常用的平台，OpenClaw 对 Discord 有完整的支持，可以在其中配置多 Agent。

> [小红书（包含多bots配置）](http://xhslink.com/o/7BSZPzHi5HG)

### 详细步骤

#### 第 1 步：创建 Discord 应用和机器人

1. 在 Discord 创建一个频道
2. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
3. 点击 **New Application**，命名为 "OpenClaw" 或其他你喜欢的名字
4. 点击侧边栏的 **Bot**
5. 设置机器人的 **Username**（你在 Discord 中叫它什么）

#### 第 2 步：启用 Privileged Intents

在 **Bot** 页面，向下滚动到 **Privileged Gateway Intents**，启用：

- ✅ **Message Content Intent**（必需）
- ✅ **Server Members Intent**（推荐，用于角色允许列表和名称匹配）
- ⚪ **Presence Intent**（可选，仅用于状态更新）

#### 第 3 步：复制机器人 Token

回到 **Bot** 页面顶部，点击 **Reset Token**。

> 注意：虽然名字是 "Reset"，但这是你第一次生成 Token，不会有任何东西被"重置"。

复制这个 Token 并保存好。这是你的 **Bot Token**，接下来会用到。

#### 第 4 步：生成邀请链接并添加机器人到服务器

1. 点击侧边栏的 **OAuth2**
2. 向下滚动到 **OAuth2 URL Generator**，启用：
   - `bot`
   - `applications.commands`
3. 在下方出现的 **Bot Permissions** 中，启用：
   - View Channels
   - Send Messages
   - Read Message History
   - Embed Links
   - Attach Files
   - Add Reactions（可选）
4. 复制生成的 URL，在浏览器中打开
5. 选择你的服务器，点击 **Continue** 连接，邀请 bot 进入频道

现在你应该能在 Discord 服务器中看到你的机器人了。

#### 第 5 步：设置 Bot Token

你的 Discord 机器人 Token 是一个密钥（像密码一样）。

**推荐方式：让 AI 帮你配置**

直接告诉 OpenClaw 你的 Bot Token，让它帮你配置：

```
"请帮我配置 Discord，Bot Token 是：..."
```

**手动配置方式**

你也可以直接编辑 `~/.openclaw/openclaw.json` 文件：

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

配置完成后，如果 OpenClaw 已经作为后台服务运行，使用 `openclaw gateway restart` 重启。

---

## 推荐设置：创建服务器工作区

一旦私信正常工作，你可以将 Discord 服务器设置为完整的工作区，每个频道都有自己的代理会话和上下文。这推荐用于只有你和机器人的私有服务器。

### 步骤 1：将你的服务器添加到 Guild 允许列表

这启用你的代理在服务器的任何频道中响应，不仅仅是私信。

**让 AI 帮你配置**

```
"将我的 Discord 服务器 ID `<server_id>` 添加到 guild 允许列表"
```

### 步骤 2：允许无需 @提及即可响应

默认情况下，代理只在被 @提及时才在服务器频道中响应。对于私有服务器，你可能希望它响应每条消息。

**让 AI 帮你配置**

```
"允许我的代理在这个服务器上响应，无需 @提及"
```

### 步骤 3：规划服务器频道中的记忆

默认情况下，长期记忆（MEMORY.md）只在私信会话中加载。服务器频道不会自动加载 MEMORY.md。

**让 AI 帮你配置**

```
"当我在 Discord 频道提问时，如果需要 MEMORY.md 中的长期上下文，使用 memory_search 或 memory_get。"
```

---

## Discord 频道示例

现在在 Discord 服务器上创建一些频道并开始聊天。你的代理可以看到频道名称，每个频道都有自己独立的会话 - 所以你可以设置 `#coding`、`#home`、`#research` 或任何符合你工作流的频道。

---

## 官方文档链接

如果需要更详细的配置说明，请查阅 OpenClaw 官方文档：

- **Discord**：[openclaw/docs/channels/discord.md](https://github.com/openclaw/openclaw/blob/main/docs/channels/discord.md)
- **飞书**：[openclaw/docs/channels/feishu.md](https://github.com/openclaw/openclaw/blob/main/docs/channels/feishu.md)

---

## 平台配置检查清单

配置完成后，请确认：

- [ ] 能在平台中发送消息
- [ ] OpenClaw 能收到并回复消息
- [ ] 代码块和格式能正确显示

---

## 下一步

聊天平台配置完成后，请继续阅读：
- [核心原则：查阅 Docs](./04-core-principles.md) - 理解如何正确配置
- [场景模块](./05-scenario-news.md) - 开始使用 OpenClaw
