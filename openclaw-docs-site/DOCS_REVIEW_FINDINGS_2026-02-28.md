# OpenClaw 文档审阅清单（2026-02-28）

## 审阅范围

- `src/content/docs/index.md`
- `src/content/docs/modules/01-installation.md`
- `src/content/docs/modules/02-soul-config.md`
- `src/content/docs/modules/03-channel-config.md`
- `src/content/docs/modules/04-core-principles.md`
- `src/content/docs/modules/05-scenario-news.md`
- `src/content/docs/modules/06-scenario-coding.md`
- `src/content/docs/modules/08-config-management.md`
- `src/content/docs/modules/09-faq.md`

## 总体结论

- 文档结构完整、阅读路径清楚，但存在若干“前后不一致”和“命令不够稳妥”的问题。
- “查阅 Docs / 双刃剑 / 回滚”这几块内容在多篇重复较多，建议集中到 1-2 篇作为规范来源，其他页面引用链接即可。
- 部分示例文案容易让新手误操作（尤其是 Token 处理、Git 回退、直接推送生产）。

## 一、高优先级问题（建议先改）

### 1) 配置文件格式前后不一致（`openclaw.json` vs `config.yaml`）

- 位置：
- `src/content/docs/modules/03-channel-config.md:81`
- `src/content/docs/modules/08-config-management.md:73`
- `src/content/docs/modules/09-faq.md:72`
- 问题：一处让用户改 `~/.openclaw/openclaw.json`，另一处备份/恢复 `config.yaml`，读者会不知道实际主配置文件到底是哪一个。
- 建议：统一成同一个真实文件名，并在文首注明“以下示例基于 OpenClaw vX.Y（配置文件：XXX）”。

### 2) 用户偏好文件路径写法错误/不一致

- 位置：
- `src/content/docs/modules/02-soul-config.md:30`
- `src/content/docs/modules/09-faq.md:79`
- `src/content/docs/modules/09-faq.md:84`
- 问题：`02` 里是 `USER.md`，`09` 里写成 `SOUL/USER.md`，路径定义不一致。
- 建议：统一写法为实际路径（例如 `~/.openclaw/workspace/USER.md`），并给一个最小示例。

### 3) 章节名称前后不一致（新闻推送/论文推送）

- 位置：
- `src/content/docs/modules/04-core-principles.md:114`
- `src/content/docs/modules/05-scenario-news.md:6`
- 问题：`04` 写“自动化新闻推送”，`05` 标题是“自动化论文推送”。
- 建议：统一命名，避免用户误解为两个不同场景。

### 5) Git 回退命令对新手风险较高

- 位置：
- `src/content/docs/modules/08-config-management.md:51`
- `src/content/docs/modules/09-faq.md:65`
- 问题：`git checkout HEAD~1` 会进入 detached HEAD，新手常误解“回退成功但后续提交丢分支”。
- 建议：改成更清晰的恢复流程（例如 `git revert <commit>`），或明确注明 detached HEAD 含义与恢复方法。

### 6) Token 处理缺少安全提醒

- 位置：`src/content/docs/modules/03-channel-config.md:73`
- 问题：示例直接“告诉 OpenClaw 你的 Bot Token”，但没有明确强调“仅限私聊/本机，不要在群聊发 Token”。
- 建议：补一条红色注意项：写入soul.md 文件 Token 只在本机或私密对话输入，输入后立即轮换/重置策略。

## 二、表述不清楚或模糊

### 7) “前置条件”缺少可验证标准

- 位置：`src/content/docs/modules/01-installation.md:17`
- 问题：写“Node 22 或更高版本”，但没有给验证命令。
- 建议：补 `node -v` 与合格示例（如 `v22.x`）。

### 8) “需要 GitHub 账号”必要性不清

- 位置：`src/content/docs/modules/01-installation.md:18`
- 问题：没有解释“为什么必须有 GitHub 账号”（仅看文档还是认证依赖？）。
- 建议：改为“可选”。

### 9) API Key“可选”的边界不清

- 位置：`src/content/docs/modules/01-installation.md:20`
- 问题：没有说明“哪些情况下可不填、哪些情况下必须填”。
- 建议：增加 2 行说明：本地模型/仅体验可暂不填；要实际调用云模型则必填。

### 10) “完整支持”表述太泛

- 位置：`src/content/docs/modules/03-channel-config.md:13`
- 问题：“对OpenClaw支持完整”缺少定义（完整指哪些能力）。
- 建议：改为可验证描述（例如“支持私聊、频道会话、commands、附件”等）。

### 11) Discord 步骤前后对象不一致（频道/服务器）

- 位置：`src/content/docs/modules/03-channel-config.md:27`
- 问题：第 1 步先让“创建频道”，后面主要是在“服务器”维度配置 bot。
- 建议：先写“创建或选择服务器”，再写频道。

### 12) `<server_id>` 获取方法缺失

- 位置：`src/content/docs/modules/03-channel-config.md:109`
- 问题：给了占位符但没教用户去哪拿 server id。
- 建议：补“开启开发者模式 -> 右键服务器 -> Copy Server ID”。

### 13) “MEMORY 仅私信加载”缺少条件说明

- 位置：
- `src/content/docs/modules/02-soul-config.md:98`
- `src/content/docs/modules/03-channel-config.md:124`
- 问题：描述偏绝对，没有说是否可通过配置覆盖。
- 建议：补一句“默认行为，具体以当前版本配置项为准”。

### 14) 场景一示例“按引用量排序”容易误导

- 位置：`src/content/docs/modules/05-scenario-news.md:58`
- 问题：最新 arXiv 论文通常缺少稳定引用量，排序字段可能不可用。
- 建议：优先写“按发布时间”或“按关键词相关度”。

### 15) 场景二案例缺少“先预览再执行”保护动作

- 位置：`src/content/docs/modules/06-scenario-coding.md:99`
- 问题：示例直接“修复并推送到 GitHub”，缺少确认环节。
- 建议：改为“先给 diff 和测试结果，确认后再 push”。

### 16) FAQ 的“社区论坛（如果有）”信息无效

- 位置：`src/content/docs/modules/09-faq.md:104`
- 问题：占位式表述无法执行。
- 建议：要么给真实链接，要么删掉这条。

## 三、重复内容较多（可合并）

### 17) “先查阅 Docs 再操作”重复

- 重复位置：
- `src/content/docs/modules/04-core-principles.md`（整篇核心）
- `src/content/docs/modules/06-scenario-coding.md:39`
- `src/content/docs/modules/08-config-management.md:62`
- `src/content/docs/modules/09-faq.md:41`
- 建议：把规范集中在 `04`，其他页面保留一句并链接回 `04`。

### 18) “双刃剑（自由度高也有风险）”重复

- 重复位置：
- `src/content/docs/modules/04-core-principles.md:13`
- `src/content/docs/modules/08-config-management.md:7`
- 建议：`08` 直接引用 `04` 的核心原则，减少重复段落。

### 19) “Git 回滚与备份”重复

- 重复位置：
- `src/content/docs/modules/08-config-management.md:23-74`
- `src/content/docs/modules/09-faq.md:56-73`
- 建议：`09` 中只保留“遇错 -> 去看 08 第 X 节”的短链，避免两处维护同一命令。

### 20) 安装指令重复但层级不同

- 重复位置：
- `src/content/docs/index.md:37-43`
- `src/content/docs/modules/01-installation.md:45-53`
- 建议：`index` 保留一句“见安装章节”，避免首页承载过多命令细节。

## 四、可以写得更清晰的方向（结构建议）

### 21) 每篇增加“本章产出”

- 例：在章节开头用 2-3 条说明“读完你将得到什么”（如“完成 Discord bot 可收发消息”）。

### 22) 每个操作章节统一四段式

- 建议固定模板：前置条件 -> 操作步骤 -> 验证结果 -> 回滚/排错。
- 当前不少章节有“步骤”，但“验证成功长什么样”写得不一致。

### 23) 命令块建议区分“可直接执行”和“给 AI 的自然语言”

- 当前 `bash` 和自然语言提示混用较多（例如 `08-config-management.md:64`）。
- 建议加小标题：`终端命令` / `对 AI 说的话`。

### 24) 对外部非官方链接做标注

- 位置：`03-channel-config.md:21`、`09-faq.md:22`
- 建议标注“第三方经验链接，可能过期；以官方文档为准”。

### 25) 日期示例建议改成动态占位

- 位置：`05-scenario-news.md:76`
- 建议把 `2024-02-27` 改为 `YYYY-MM-DD`。

## 五、建议优先修改顺序

1. 统一配置文件名与路径（问题 1、2、3、4）。
2. 修正高风险操作文案（问题 5、6、15）。
3. 清理重复内容并建立“单一规范来源”（问题 17、18、19）。
4. 做结构化增强（问题 21、22、23）。

