// 认证逻辑
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const userProfile = document.getElementById('userProfile');
const loginBtns = document.querySelectorAll('#loginBtn, #registerBtn');
const userName = document.getElementById('userName');
const userAvatar = document.getElementById('userAvatar');
const logoutBtn = document.getElementById('logoutBtn');

// 显示登录模态框
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// 显示注册模态框
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// 关闭登录模态框
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// 关闭注册模态框
closeRegisterModal.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

// 切换到注册
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

// 切换到登录
switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// 点击模态框外部关闭
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// 登录表单提交
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const user = auth.login(username, password);
        updateUI();
        loginModal.style.display = 'none';
        alert('登录成功！');
    } catch (error) {
        alert(error.message);
    }
});

// 注册表单提交
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }

    try {
        const user = auth.register(username, password);
        registerModal.style.display = 'none';
        alert('注册成功！请登录');
    } catch (error) {
        alert(error.message);
    }
});

// 退出登录
logoutBtn.addEventListener('click', () => {
    auth.logout();
    updateUI();
    alert('已退出登录');
});

// 更新UI
function updateUI() {
    if (auth.isAuthenticated()) {
        const user = auth.getCurrentUser();
        userProfile.style.display = 'flex';
        userName.textContent = user.username;
        userAvatar.textContent = user.username.charAt(0).toUpperCase();
        loginBtns.forEach(btn => {
            btn.style.display = 'none';
        });
    } else {
        userProfile.style.display = 'none';
        loginBtns.forEach(btn => {
            btn.style.display = 'block';
        });
    }
}

// 初始化
function initAuth() {
    updateUI();
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAuth, updateUI };
}