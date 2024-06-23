import {defineConfig} from 'vite';
import {resolve} from 'path';
import vitePluginCSSInjectedByJS from 'vite-plugin-css-injected-by-js';

const filename = 'langchat_web_sdk'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: filename,
            fileName: filename,
            formats: ['iife']
        },
        rollupOptions: {
            output: {
                inlineDynamicImports: true,  // 确保动态导入。
                assetFileNames: 'assets/[name].[ext]',
                entryFileNames: `${filename}.min.js`
            },
            // @ts-ignore
            manualChunks: undefined  // 防止代码拆分，确保只有一个打包文件。
        },
        minify: 'terser',  // 使用 Terser 进行代码压缩
        terserOptions: {
            compress: true,
            mangle: true,
            format: {
                comments: false  // 移除注释
            }
        }
    },
    plugins: [
        vitePluginCSSInjectedByJS(),  // 确保 CSS 被注入到 JS 文件中
    ]
});