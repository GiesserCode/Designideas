function home() {
    open("../index.html", "_self")
}

const overlay = document.querySelector('.overlay');

// Add scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to a specific position or trigger point
    const triggerPoint = 300; // Adjust this value as needed

    if (window.scrollY > triggerPoint) {
        // Add the active class to show the overlay
        overlay.classList.add('active');
    } else {
        // Remove the active class to hide the overlay
        overlay.classList.remove('active');
    }
});