document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    // Add mouse move effect for enhanced 3D
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const xAxis = (centerX - e.clientX) / 25;
        const yAxis = (centerY - e.clientY) / 25;
        
        card.style.transform = `rotate3d(${yAxis/3}, ${xAxis/3}, 0, 10deg) translateY(-15px)`;
    });
    
    // Reset when mouse leaves
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotate3d(1, 1, 0, 10deg) translateY(-15px)';
    });
});