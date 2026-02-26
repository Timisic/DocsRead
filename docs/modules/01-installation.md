# 安装与部署

OpenClaw 的部署方式灵活，你可以根据自己的需求选择最合适的部署方案。

https://github.com/openclaw/openclaw

---

## 前置条件

在安装 OpenClaw 之前，请确保：

- [ ] 已安装 **Node 22 或更高版本**
- [ ] 有一个 GitHub 账号

### AI 模型的 API Key（可选）

在安装 OpenClaw 时，onboarding 流程会让你选择和配置 AI 模型。支持的模型提供商包括：

1. **OpenAI**（GPT 系列）
2. **Anthropic**（Claude 系列）
3. **阿里云百炼**（国内多种模型，便宜量大，lite版目前7.9元/月足够用）
   - 控制台：https://bailian.console.aliyun.com/cn-beijing/#/home

> **提示**：也可以在安装完成后再配置 AI 模型。

---

## 详细安装步骤

### 第 1 步：了解项目

OpenClaw 的 GitHub 地址：https://github.com/openclaw/openclaw

先浏览官方文档了解整体架构，也可以直接参考官方安装说明

### 第 2 步：安装 OpenClaw

使用 npm 全局安装：

```bash
npm install -g openclaw@latest
```

### 第 3 步：运行 onboarding 向导

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

### 第 4 步：验证安装

```bash
# 查看 OpenClaw 版本
openclaw --version

# 查看 Gateway 状态
openclaw gateway status
```

或者直接访问本地的 Web 界面：

- 打开浏览器访问：**http://127.0.0.1:18789/**

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
