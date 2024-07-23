document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'url("image1.jpg")',
        'url("image2.jpg")',
        'url("image3.jpg")',
        'url("image4.jpg")',
        'url("image5.jpg")'
    ];
    
    let currentIndex = 0;
    const backgroundContainer = document.getElementById('background-container');

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundContainer.style.backgroundImage = images[currentIndex];
    }

    setInterval(changeBackground, 2000); 
    changeBackground(); // Initial background image set
});
