// 用户认证系统
const auth = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,

    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    },

    saveCurrentUser() {
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    },

    register(username, password) {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
            throw new Error('用户名已存在');
        }

        const newUser = {
            id: Date.now(),
            username,
            password,
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        this.saveUsers();
        return newUser;
    },

    login(username, password) {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (!user) {
            throw new Error('用户名或密码错误');
        }

        this.currentUser = user;
        this.saveCurrentUser();
        return user;
    },

    logout() {
        this.currentUser = null;
        this.saveCurrentUser();
    },

    isAuthenticated() {
        return this.currentUser !== null;
    },

    getCurrentUser() {
        return this.currentUser;
    }
};

// 初始化用户数据（如果需要）
if (auth.users.length === 0) {
    // 添加一些示例用户（仅用于测试）
    auth.users = [
        { id: 1, username: 'admin', password: '123456', createdAt: new Date().toISOString() },
        { id: 2, username: 'fan1', password: '123456', createdAt: new Date().toISOString() }
    ];
    auth.saveUsers();
}

// 导出认证对象
if (typeof module !== 'undefined' && module.exports) {
    module.exports = auth;
}