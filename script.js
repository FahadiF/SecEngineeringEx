/* -----------------------
   Theme toggle (🔆 / 🌙) 
   -----------------------*/

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Update the button’s emoji
    const btn = document.querySelector('.theme-toggle');
    btn.textContent = document.body.classList.contains('dark-mode') ? '🔆' : '🌙';
}

// Close Window
function closeWindow() {
    if (window.close) {
        window.close();
    } else {
        alert("Your browser prevented the window from closing automatically. Please close it manually.");
    }
}

// Image Modal
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const downloadLink = document.getElementById('downloadLink');
    const closeBtn = document.querySelector('.modal-close');
    const img = document.querySelector('.clickable-image');

    // Open modal on image click
    img.addEventListener('click', function () {
        modal.style.display = 'flex';
        modalImg.src = this.src;
        downloadLink.href = this.src;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close if clicking outside the image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});