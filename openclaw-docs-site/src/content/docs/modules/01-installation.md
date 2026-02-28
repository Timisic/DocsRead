---
title: 安装与部署
---

# 安装与部署

OpenClaw 的部署方式灵活，本章给你一套最稳妥的本机安装流程。

---

## 本章产出

完成本章后，你应该已经：

- 安装好 OpenClaw 并完成 onboarding
- 能通过命令确认 Gateway 正常运行
- 确认了配置目录与 workspace 目录位置

---

## 前置条件

在安装 OpenClaw 之前，请确保：

- [ ] 已安装 **Node 22 或更高版本**
- [ ] 可访问 npm
- [ ] （可选）有 GitHub 账号，用于提 Issue、看示例和同步社区资源

### 终端命令（环境检查）

```bash
node -v
npm -v
```

合格示例：`node -v` 输出 `v22.x` 或更高。

### AI 模型的 API Key（可选）

在安装 OpenClaw 时，onboarding 流程会让你选择和配置 AI 模型。支持的模型提供商包括：

1. **OpenAI**（GPT 系列）
2. **Anthropic**（Claude 系列）
3. **阿里云百炼**（国内多种模型，便宜量大，lite版目前7.9元/月足够用）
   - 控制台：https://bailian.console.aliyun.com/cn-beijing/#/home

- 仅体验安装流程时，可以先跳过 API Key。
- 要真正调用云端模型执行任务时，必须提供对应 API Key。

---

## 官方项目地址

- GitHub 仓库：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 详细安装步骤

### 第 1 步：安装 OpenClaw CLI

使用 npm 全局安装：

```bash
npm install -g openclaw@latest
```

### 第 2 步：运行 onboarding 向导

```bash
openclaw onboard --install-daemon
```

这个命令会：
- 创建配置文件目录（通常在 `~/.openclaw`）
- 安装系统守护进程（让 OpenClaw 在后台运行）
- 引导你完成初始配置：
  - 配置身份验证（auth）
  - 配置 Gateway 设置
  - 可选的聊天平台配置

### 第 3 步：验证安装

```bash
# 查看 OpenClaw 版本
openclaw --version

# 查看 Gateway 状态
openclaw gateway status
```

或者直接访问本地的 Web 界面：

- 打开浏览器访问：**http://127.0.0.1:18789/**

---

## 常见失败点（快速排查）

- `openclaw: command not found`：确认 npm 全局安装目录在 PATH 中。
- Gateway 未启动：先执行 `openclaw gateway status`，必要时 `openclaw gateway restart`。
- onboarding 中断：重新运行 `openclaw onboard --install-daemon`。

---

## 安装后的检查清单

安装完成后，请确认：

- [ ] `openclaw --version` 能正常显示版本号
- [ ] 配置目录已创建（通常在 `~/.openclaw`）
- [ ] Gateway 正在运行
  - 命令：`openclaw gateway status`
  - 或者访问 http://127.0.0.1:18789/
- [ ] Workspace 目录已创建（通常在 `~/.openclaw/workspace`）

---

## 更新 OpenClaw

```bash
# 更新到最新版本
openclaw --update
```

---

## 下一步

安装完成后，请继续阅读：
- [SOUL.md 配置](./02-soul-config.md) - 配置 AI 助手的行为
- [聊天平台配置](./03-channel-config.md) - 连接你的聊天软件
