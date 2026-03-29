document.addEventListener('DOMContentLoaded', () => {
    console.log('🎵 夏日入侵企画 · 粉丝情绪能量站 已启动');
    console.log('💛 欢迎来到属于我们的夏日能量站');
    
    // 初始化认证系统
    if (typeof initAuth === 'function') {
        initAuth();
    }
});