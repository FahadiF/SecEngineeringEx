
/* ------------
   Global THEME 
   ------------*/

(() => {
    const THEME_KEY = 'site-theme';          // localStorage key
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');

    // -------------------------------------------------
    // 1️⃣  LOAD SAVED THEME ON PAGE LOAD
    // -------------------------------------------------
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        if (toggleBtn) toggleBtn.textContent = '🌙';
    } else {
        // Default to dark mode
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        if (toggleBtn) toggleBtn.textContent = '🔆';
    }

    // -------------------------------------------------
    // 2️⃣  GLOBAL THEME TOGGLE FUNCTION
    // -------------------------------------------------
    window.toggleTheme = function () {
        const isDark = body.classList.contains('dark-mode');

        if (isDark) {
            // Switch to light mode
            body.classList.replace('dark-mode', 'light-mode');
            if (toggleBtn) toggleBtn.textContent = '🌙';
            localStorage.setItem(THEME_KEY, 'light');
        } else {
            // Switch to dark mode
            body.classList.replace('light-mode', 'dark-mode');
            if (toggleBtn) toggleBtn.textContent = '🔆';
            localStorage.setItem(THEME_KEY, 'dark');
        }
    };

    // -------------------------------------------------
    // 3️⃣  CLOSE WINDOW FUNCTION
    // -------------------------------------------------
    window.closeWindow = function () {
        if (window.close) {
            window.close();
        } else {
            alert("Your browser prevented the window from closing automatically. Please close it manually.");
        }
    };

    // Set current year in footer
    // Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});


    // -------------------------------------------------
    // 4️⃣  DOM CONTENT LOADED - ALL OTHER FEATURES
    // -------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {

        // IMAGE MODAL FUNCTIONALITY
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const downloadLink = document.getElementById('downloadLink');
        const closeBtn = document.querySelector('.modal-close');
        const images = document.querySelectorAll('.clickable-image');

        if (modal && modalImg && downloadLink && closeBtn && images.length > 0) {
            // Open modal on any image click
            images.forEach(img => {
                img.addEventListener('click', function () {
                    modal.style.display = 'flex';
                    modalImg.src = this.src;
                    downloadLink.href = this.src;
                    downloadLink.download = this.src.split('/').pop();
                    document.body.style.overflow = 'hidden';
                });
            });

            // Close modal functions
            function closeModal() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function (e) {
                if (e.target === modal) closeModal();
            });
        }

         /* ---- Scroll‑to‑Bottom Button ---- */
        const scrollBottomBtn = document.getElementById('scrollToBottomBtn');
        if (scrollBottomBtn) {
            window.addEventListener('scroll', () => {
                scrollBottomBtn.style.display = (window.scrollY > 300) ? 'flex' : 'none';
            });
            scrollBottomBtn.addEventListener('click', () => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            });
        }

        /* ---- Scroll‑to‑Top Button ---- */
        const scrollTopBtn = document.getElementById('scrollToTopBtn');
        if (scrollTopBtn) {
            // Show when near the bottom (within 200px of page end)
            const showWhenNearBottom = () => {
                const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 200);
                scrollTopBtn.style.display = nearBottom ? 'flex' : 'none';
            };
            window.addEventListener('scroll', showWhenNearBottom);
            // Initial check (in case page loads already near bottom)
            showWhenNearBottom();

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

    }); // end DOMContentLoaded
})(); // end IIFE


// Hide name/email on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.fixed-header');
    if (window.scrollY > 50) {
        header.classList.add('hide-on-scroll');
    } else {
        header.classList.remove('hide-on-scroll');
    }
});
