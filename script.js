// الانتقال السلس بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// تغيير اللغة
function changeLanguage() {
    const lang = document.getElementById('language-selector').value;
    if (lang === 'en') {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'ar';
    }
}

// شريط التمرير للصور
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".image-slider img");
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// إشعارات
function showNotification(message) {
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
