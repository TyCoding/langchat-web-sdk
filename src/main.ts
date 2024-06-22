import './style.css';
import template from './chat.html?raw';

// 自动渲染 HTML 到页面
function autoRender() {
    const containerId = 'sdk-container';
    let container = document.getElementById(containerId);

    if (!container) {
        // 如果没有元素，有可能需要创建新的容器
        container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
    }

    container.innerHTML = template;

    var chat = document.getElementById('chat');
    if (chat != null) {
        chat.scrollTop = chat.scrollHeight - chat.clientHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const chatBtn = document.getElementById('chatBtn');
    const chatContainer = document.getElementById('chat-box');

    if (chatBtn && chatContainer) {
        chatBtn.addEventListener('click', () => {
            if (chatContainer.classList.contains('visible')) {
                chatContainer.classList.remove('visible');
                setTimeout(() => {
                    chatContainer.classList.add('hidden');
                }, 300); // 等待动画完成后再隐藏
            } else {
                chatContainer.classList.remove('hidden');
                setTimeout(() => {
                    chatContainer.classList.add('visible');
                }, 10); // 确保动画开始
            }
        });
    }
});

// 在 DOMContentLoaded 事件之后执行渲染
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoRender);
} else {
    autoRender();
}