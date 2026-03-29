function generatePoster() {
    if (!currentMood) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const width = 750;
    const height = 1000;
    canvas.width = width;
    canvas.height = height;

    const gradients = [
        ['#87CEEB', '#FFE066'],
        ['#FFB6C1', '#FFF8F0'],
        ['#FFE066', '#87CEEB'],
        ['#FFF8F0', '#FFB6C1']
    ];
    const gradientIndex = Math.floor(Math.random() * gradients.length);
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, gradients[gradientIndex][0]);
    gradient.addColorStop(1, gradients[gradientIndex][1]);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 30 + 10;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.roundRect(50, 150, width - 100, height - 300, 30);
    ctx.fill();

    ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#333333';
    ctx.textAlign = 'center';
    ctx.fillText('夏日入侵企画', width / 2, 220);

    ctx.font = '28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#666666';
    ctx.fillText('粉丝情绪能量站', width / 2, 265);

    ctx.font = 'bold 42px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#333333';
    
    const text = currentMood.text;
    const maxWidth = width - 150;
    const lineHeight = 60;
    const words = text.split('');
    let line = '';
    let y = 380;
    
    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i];
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line, width / 2, y);
            line = words[i];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, width / 2, y);

    ctx.font = 'italic 28px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#999999';
    ctx.fillText(`— ${currentMood.source}`, width / 2, y + 80);

    const hashtags = ['#夏日入侵企画', '#粉丝情绪能量站', '#每日能量'];
    ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    ctx.fillStyle = '#87CEEB';
    ctx.fillText(hashtags.join(' '), width / 2, height - 120);

    const stickers = ['☀️', '🌊', '⭐', '🎵', '💛', '🌸'];
    const stickerPositions = [
        { x: 80, y: 100 },
        { x: width - 80, y: 100 },
        { x: 80, y: height - 80 },
        { x: width - 80, y: height - 80 }
    ];

    stickerPositions.forEach((pos, index) => {
        ctx.font = '60px sans-serif';
        ctx.fillText(stickers[index % stickers.length], pos.x, pos.y);
    });

    const dataURL = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.download = `夏日入侵企画-情绪能量-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
}

CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    return this;
};

document.addEventListener('DOMContentLoaded', () => {
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', () => {
        generatePoster();
    });
});