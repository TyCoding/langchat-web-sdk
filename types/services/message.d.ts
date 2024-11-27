export type MessageType = 'success' | 'error' | 'warning' | 'info';
export declare function useMessage(): {
    info: (content: string, duration?: number) => void;
    success: (content: string, duration?: number) => void;
    warning: (content: string, duration?: number) => void;
    error: (content: string, duration?: number) => void;
};
