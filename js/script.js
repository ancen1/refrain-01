// 获取所有预览图片
const previews = document.querySelectorAll(".preview");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// 点击小图 → 打开大图
previews.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// 关闭预览
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// 点击黑色背景也能关闭
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
