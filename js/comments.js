function loadComments(moodIndex) {
    const commentsList = document.getElementById('commentsList');
    const mood = moodData[moodIndex];
    
    commentsList.innerHTML = '';

    if (mood.comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 20px;">还没有评论，快来抢沙发吧~</p>';
        return;
    }

    mood.comments.forEach(comment => {
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';
        commentItem.innerHTML = `
            <div class="comment-header">
                <span class="comment-username">${comment.username || '匿名用户'}</span>
                <span class="comment-time">${comment.time}</span>
            </div>
            <p class="comment-content">${comment.text}</p>
        `;
        commentsList.appendChild(commentItem);
    });
}

function handleCommentSubmit() {
    if (!currentMood) return;

    if (!auth.isAuthenticated()) {
        alert('请先登录后再发表评论');
        document.getElementById('loginModal').style.display = 'flex';
        return;
    }

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (!commentText) {
        alert('请输入评论内容');
        return;
    }

    const moodIndex = currentMood.index;
    const now = new Date();
    const timeString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newComment = {
        text: commentText,
        time: timeString,
        username: auth.getCurrentUser().username,
        userId: auth.getCurrentUser().id
    };

    moodData[moodIndex].comments.push(newComment);

    commentInput.value = '';
    loadComments(moodIndex);

    const commentCount = document.getElementById('commentCount');
    commentCount.textContent = moodData[moodIndex].comments.length;

    updateHistoryDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    const submitCommentBtn = document.getElementById('submitCommentBtn');
    const commentInput = document.getElementById('commentInput');

    submitCommentBtn.addEventListener('click', handleCommentSubmit);

    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleCommentSubmit();
        }
    });

    // 监听评论按钮点击，检查登录状态
    document.getElementById('commentBtn').addEventListener('click', () => {
        if (!auth.isAuthenticated()) {
            document.getElementById('loginModal').style.display = 'flex';
        }
    });
});