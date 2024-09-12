// Toggle class 'active'
const navbarNav = document.querySelector('.navbar-nav');
// Ketika menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk hilang navnya
const menu = document.querySelector('#menu');

document.addEventListener('click' ,function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
});

// script.js

document.addEventListener('DOMContentLoaded', () => {    
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    
    // Cek mode gelap dari localStorage jika ada
    if (localStorage.getItem('light-mode') == 'enabled') {
        body.classList.add('light-mode');
        document.getElementById('iconTheme').setAttribute('data-feather', 'sun');
    }
    
    if (localStorage.getItem('light-mode') == 'disabled') {
        document.getElementById('iconTheme').setAttribute('data-feather', 'moon');
    }
    
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        
        // Simpan preferensi mode gelap di localStorage
        if (isLightMode) {
            localStorage.setItem('light-mode', 'enabled');
            document.getElementById('iconTheme').setAttribute('data-feather', 'sun');
        } else {
            localStorage.setItem('light-mode', 'disabled');
            document.getElementById('iconTheme').setAttribute('data-feather', 'moon');
        }
        
        feather.replace(); // Update ikon feather
    });
    feather.replace(); // Update ikon feather
});

