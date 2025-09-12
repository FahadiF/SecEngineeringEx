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

function closeWindow() {
    
    if (window.close) {
        window.close();
    } else {
        alert("Your browser prevented the window from closing automatically. Please close it manually.");
    }
}
