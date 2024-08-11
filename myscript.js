// Lightbox functionality
document.querySelectorAll('.movie-img').forEach(function(img) {
    img.addEventListener('click', function() {
        const lightboxImage = document.getElementById('lightboxImage');
        lightboxImage.src = this.src;
        lightboxImage.alt = this.alt;
        const caption = document.getElementById('caption');
        caption.innerText = this.alt;
    });
});

// Event listener for navigation elements
document.querySelectorAll('.nav-link').forEach(function(navItem) {
    navItem.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`You clicked on the ${this.textContent} link`);
    });
});
