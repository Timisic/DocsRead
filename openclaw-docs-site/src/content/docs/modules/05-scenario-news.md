---
title: 场景一：自动化论文推送
description: 通过 OpenClaw + Skill 自动抓取研究方向论文，每日定时推送到 Discord 或飞书
---

# 场景一：自动化论文推送

你可以把“找论文、筛关键词、整理摘要、定时推送”变成一个自动化流程，减少每天手工刷论文的时间。根据个人需要可自行配置Skill，包括配置不同论文源、关键词、筛选等等，同时获取到的论文可以上传自动“精读”。本文档只是一个简单示例，为的是跑通最小流程，该Skill质量未必高。

> ❗️相关Skill可以上 [ClawHub](https://clawhub.ai/) 上寻找
![ClawHub中Popular Skills](https://timisic.oss-cn-hangzhou.aliyuncs.com/pic/image-20260302135408947.png)

---

## 本章产出

完成本章后，你应该已经：

- 安装并启用一个论文推送 Skill
- 配好筛选规则、推送频道和定时任务
- 能手动触发并验证推送质量

---

## 前置条件

- 已完成 [安装与部署](./01-installation.md)
- 已完成至少一个聊天平台配置（建议 Discord）
- 已阅读 [核心原则：查阅 Docs](./04-core-principles.md)

---

## 示例Skill(未完善)

### 第 1 步：选择并安装 Skill

下载并解压 [HF-Daily-Papers](https://github.com/henry-y/openclaw-paper-tools/tree/main/skills/hf-daily-papers)

#### 对 OpenClaw 说的话

```text
请安装 [路径] 的Skill（名称：hf-daily-papers），安装后告诉我安装路径和配置文件位置。
请查阅 Skill 下的相关文档，根据我的 [xx需求]，帮我进行关键词的修改，包含md文件以及脚本
修改后请给我 diff。
```

---

### 第 2 步：手动试跑并验收

#### 对 AI 说的话

```text
请立刻手动执行一次论文推送任务，不要改配置。执行完成后：
1) 给我本次命中的论文数
2) 展示前 5 条推送预览
3) 告诉我是否有报错
```

成功示例：1、这个skill路径应为~/.openclaw/skills/hf-daily-papers。2、获取到的md or pdf文件应存放在指定位置（比如 hf-daily-papers 文件夹下）

---

### 第 3 步：开启定时任务

#### 对 AI 说的话

```text
请把这个论文推送skill设置为每天 08:30 自动执行（Asia/Shanghai）（Cron任务），并告诉我任务名称、下次运行时间和停用方法。
```

Discord自动推送成功示例：
<img src="https://timisic.oss-cn-hangzhou.aliyuncs.com/pic/932a91dadee3beaeb1e2a4645dc1221e.jpg" alt="Discord Channel自动推送截图" style="zoom:30%;" />

---

## 验证清单

- [ ] 手动执行可以成功推送
- [ ] 推送内容包含标题、链接、摘要
- [ ] 关键词过滤效果符合预期（误报可接受范围内）
- [ ] 定时任务创建成功，且可查看下次运行时间

---

### 失败案例：任务执行了，但频道没收到消息

排查顺序建议：

1. 确认任务确实运行：查看最近一次任务日志是否成功。
2. 确认频道名/频道 ID 是否配置正确（测试频道与正式频道是否搞混）。
3. 确认 Bot 在目标频道有发言权限（Send Messages / View Channel）。
4. 手动触发一次并让 AI 输出“目标频道、消息条数、错误日志摘要”。

可直接对 AI 说：

```text
论文推送任务已执行但频道没收到消息。
请按“任务日志 -> 频道配置 -> 权限 -> 手动重试”顺序排查，
并给我每一步的结论和下一步建议。
```

---

## 下一步

- [场景二：远程代码编写](./06-scenario-coding.md)
- [配置管理与维护](./08-config-management.md)
