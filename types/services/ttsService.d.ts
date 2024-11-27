export declare class TTSService {
    private speechSynthesis;
    private utterance;
    private voice;
    constructor();
    private initVoice;
    speak(text: string, options?: {
        rate?: number;
        pitch?: number;
        volume?: number;
        onEnd?: () => void;
    }): void;
    pause(): void;
    resume(): void;
    stop(): void;
    getVoices(): SpeechSynthesisVoice[];
    isSpeaking(): boolean;
    isPaused(): boolean;
}
export declare const ttsService: TTSService;
