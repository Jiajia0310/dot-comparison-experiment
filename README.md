# 非符号数量比较实验

纯静态 GitHub Pages 项目，不使用 Cloudflare。原 Python 文件保持不变。

保留原逻辑：指导语展示5秒；20正式试次，无练习；比例随机选择0.63/0.75/0.88；基础点数10–16；比较点数向下取整；左右随机；左右箭头作答；每题5秒。画布逻辑尺寸800×600，黑点半径5，位置独立随机，允许重叠（与原程序相同），小屏等比缩放。

准确率保留原规则：只以有反应试次为分母；数量比例距1不超过0.10时有反应即计正确。超时is_correct=2，错误0，正确1。总反应时间含超时。

config.js 已配置 DataPipe Experiment ID BmxOiUlcxqpR。使用官方 datapipe-client 0.2.0；每次参与生成包含编号、时间和随机session ID的独立CSV文件。201显示完成；202显示云端排队；失败保留备份并允许重试。相同文件名重试遇FILE_EXISTS需研究人员核对，不假装成功。

DataPipe需连接Google Drive、开启Accept new data和CSV。CSV包含trial_type，兼容默认字段要求。若后台使用自定义必填字段，请与本项目CSV列对应。

没有服务端编号防重复和访问码功能。同一编号可能产生多个独立文件，符合本次仅使用GitHub和DataPipe的架构。

本地测试：node --test tests.cjs
部署：GitHub Pages / Deploy from a branch / main / root。所有资源采用相对路径。

仓库：https://github.com/Jiajia0310/dot-comparison-experiment 。待完成：浏览器完整20题测试、真实上传及Drive核验、Pages部署。
