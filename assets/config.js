/**
 * 春江花月夜 · 统一 API 配置文件
 * 修改此文件即可更新所有页面的 API 密钥，无需逐一修改各页面
 */
const APP_CONFIG = {

    // ── DeepSeek 对话 API（chat.html 使用）──────────────────────
    deepseek: {
        apiKey: '', // 发布版不内置密钥；请通过安全的服务端代理调用
        apiUrl: 'https://api.deepseek.com/v1/chat/completions',
        model:  'deepseek-chat'                          // 可选: deepseek-chat, deepseek-coder
    },

    // ── 阿里云 DashScope API（mindmap.html 使用）──────────────────
    aliyun: {
        apiKey: '',    // 发布版不内置密钥；请通过安全的服务端代理调用
        model: 'qwen-image-plus'                // 文生图模型，如 'wanx-v1' 或 'wanx-background-generation-v2'
    }


};
