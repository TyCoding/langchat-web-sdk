import './style/index.css';
interface ChatConfig {
    apiUrl?: string;
    token?: string;
    title?: string;
    layout?: 'widget' | 'fullpage';
    position?: 'bottom-right' | 'bottom-left';
    theme?: {
        primary?: string;
        secondary?: string;
    };
}
declare class LangChatBot {
    private app;
    private config;
    constructor(config?: ChatConfig);
    destroy(): void;
    private init;
}
export default LangChatBot;
declare global {
    interface Window {
        LangChatBot: typeof LangChatBot;
    }
}
