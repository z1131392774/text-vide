# CJK 支持: 处理中文等无空格文字

## Goal

让 `text-vide` 能正确处理中文、日文等不使用空格分隔单词的文字。原算法依赖空格分词，对 CJK 连续字符按一个"单词"处理，导致大段文字几乎全被加粗，失去仿生阅读效果。

## Requirements

- **CJK 文字按 script 检测**：识别 `Han` / `Hiragana` / `Katakana` / `Hangul` 连续区域
- **每个 CJK 区域独立分块**：随机取 8-12 字为一组
- **拉丁文字（英文等）**：保持原样按单词分割
- **标点符号**：不参与分块，不加粗
- **加粗策略**：每段前 40% 字符加粗（替代原 fixation 边界表），对所有字母段（CJK 和 Latin）统一生效
- **不改变 API 签名**：`textVide(text, options)` 接口不变

## Acceptance Criteria

- [ ] 中文段落不再被当做一个词整段加粗
- [ ] 每个 CJK 连续区域各自随机 8-12 分块
- [ ] 英文单词保持原项目的分词方式
- [ ] 标点符号不被加粗
- [ ] 加粗比例为前 40%
- [ ] 现有英文测试用例仍然通过
- [ ] 新增中文测试用例
- [ ] Lint/typecheck 通过

## Definition of Done

- 测试更新（单元测试覆盖新行为）
- Lint/typecheck 通过
- spec 更新（如需要）

## Technical Approach

修改 `packages/text-vide/src/index.ts` 中的核心算法：

1. 文本预处理阶段：识别 CJK 连续区域并分块（随机 8-12）
2. 加粗计算：统一用 40% 比例替代原有 fixation 查表
3. 英文词和标点处理保持现有逻辑

## Decision (ADR-lite)

**Context**: 原版 fixation 边界表对长段无空格文字几乎全亮。
**Decision**: 按 script 类型分块 + 百分比加粗。
**Consequences**: 英文短词加粗量略有变化（从查表改为 40%），需要更新测试期望值。

## Out of Scope

- 不引入分词库（jieba 等）
- 不改动现有 API 签名
- 不处理 Thai 等其他无空格文字（仅 CJK）

## Technical Notes

- 当前代码: `packages/text-vide/src/index.ts:8`
- 当前 regex: `/(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu`
- 项目支持 Unicode property escapes（`\p{sc=Han}` 等）
- Demo: `cjk-demo.html`
