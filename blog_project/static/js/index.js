document.addEventListener('DOMContentLoaded', function () {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    
            mobileMenuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });
    
            closeMobileMenuButton.addEventListener('click', function () {
                mobileMenu.classList.add('hidden');
            });
        });
    