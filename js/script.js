document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const carousel = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselControls = document.querySelectorAll('.carousel-control');
    const ctaButton = document.querySelector('.cta-button');
    const music = document.getElementById('bg-music');
    let currentSlide = 0;

    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // CTA按钮滚动 + 播放音乐
    if (ctaButton) {
        ctaButton.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });

            if (music.paused) {
                music.play().catch(err => {
                    console.log('音乐播放失败，需要用户交互');
                });
            }
        });
    }

    // 轮播图功能
    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        carouselControls.forEach((control, i) => {
            control.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    carouselControls.forEach((control, index) => {
        control.addEventListener('click', () => showSlide(index));
    });

    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }, 3000);
});

// 分享功能
function shareWeChat() {
    alert('请使用微信扫描二维码分享');
}

function shareQQ() {
    window.open(`https://connect.qq.com/widget/shareqq/index.html?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(document.title)}`, '_blank');
}

function shareWeibo() {
    window.open(`http://service.weibo.com/share/share.php?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(document.title)}`, '_blank');
}
