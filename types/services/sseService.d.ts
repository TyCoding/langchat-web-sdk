interface SSEOptions {
    apiUrl: string;
    token?: string;
    onMessage?: (content: string) => void;
    onError?: (error: Error) => void;
    signal?: AbortSignal;
}
export declare const createSSERequest: (message: string, options: SSEOptions) => Promise<string>;
export {};
