// Go to Homepage
function goToHome() {
    window.location.href = '/';
}

// Social Media Share Functionality
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = icon.getAttribute('data-platform');
        const url = window.location.href;
        let shareUrl;

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=Check out YT Master! ${encodeURIComponent(url)}`;
                break;
            case 'instagram':
                navigator.clipboard.writeText(url);
                alert('URL copied to clipboard! Paste it on Instagram.');
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Box Click Functionality
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        e.preventDefault();
        if (box.id === 'box1') {
            alert('Redirecting to Thumbnail Generator...');
            // window.location.href = '/thumbnail-generator'; // Add your feature link here
        } else {
            alert('This feature is coming soon!');
        }
    }, { passive: true });
});

// Footer Links Functionality with Article Modal
const articles = {
    disclaimer: `Disclaimer: This website, YT Master, is provided "as is" without any warranties. We are not responsible for any loss or damage arising from the use of this site. Users access this site at their own risk. For more information, contact us at lankyposture97@gmail.com.

Last Updated: February 22, 2025`,
    privacy: `Privacy Policy: At YT Master, we respect your privacy. We collect personal information only for enhancing user experience and do not share it with third parties without consent. Cookies are used to improve functionality. You can manage your preferences in your browser settings. Contact us at lankyposture97@gmail.com for data inquiries.

Last Updated: February 22, 2025`,
    terms: `Terms & Conditions: By using YT Master, you agree to comply with our rules. Unauthorized use, including scraping or spamming, is prohibited. We reserve the right to terminate access for violations. These terms are subject to change; check regularly for updates. Contact us at lankyposture97@gmail.com for clarifications.

Last Updated: February 22, 2025`,
    about: `About Us: YT Master is your ultimate YouTube companion, offering tools to grow your channel with thumbnails, analytics, and more. Our mission is to help creators succeed on YouTube. Founded in 2025, we are committed to innovation and user satisfaction. Learn more at lankyposture97@gmail.com.

Last Updated: February 22, 2025`
};

document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        showArticle(articles[page]);
    }, { passive: true });
});

// Email Link Functionality
document.querySelector('.email-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'mailto:lankyposture97@gmail.com';
}, { passive: true });

// Home Icon Redirect
document.querySelector('.home-icon').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
}, { passive: true });

// Logo Redirect to Homepage
document.querySelector('.logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = '/';
}, { passive: true });

// Toggle Day/Night Mode
function toggleMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle i');
    body.classList.toggle('night-mode');
    if (body.classList.contains('night-mode')) {
        modeToggle.classList.remove('fa-sun');
        modeToggle.classList.add('fa-moon');
    } else {
        modeToggle.classList.remove('fa-moon');
        modeToggle.classList.add('fa-sun');
    }
}

// Article Modal Functions
function showArticle(content) {
    const modal = document.getElementById('article-modal');
    const articleText = document.getElementById('article-text');
    articleText.textContent = content;
    modal.style.display = 'flex';
}

function hideArticle() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
}

// Close Article on Click Outside or Close Button
document.getElementById('article-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('article-modal') || e.target.className === 'close-article') {
        hideArticle();
    }
}, { passive: true });
