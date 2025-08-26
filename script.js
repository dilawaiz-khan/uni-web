let counter = 1; // Initial slide index
const totalSlides = 4; // Total number of slides
const slidesContainer = document.querySelector('.slides');

// Automatically move to the next slide every 5 seconds
let autoSlideInterval = setInterval(() => {
    moveSlide(1);
}, 5000);

// Function to handle slide transitions
function moveSlide(step) {
    counter += step;

    // Reset counter when reaching the end or beginning
    if (counter > totalSlides) {
        counter = 1;
    } else if (counter < 1) {
        counter = totalSlides;
    }

    // Check the corresponding radio button
    document.getElementById('radio' + counter).checked = true;

    // Update the margin-left of the slides for animation
    const newMargin = -(counter - 1) * 20; // Each slide is 20% width
    slidesContainer.style.marginLeft = `${newMargin}%`;
}

// Function to handle manual navigation using radio buttons
document.querySelectorAll('input[name="radio-btn"]').forEach((radio, index) => {
    radio.addEventListener('change', () => {
        counter = index + 1; // Update counter to the selected slide
        moveSlide(0); // Move to the corresponding slide
    });
});

// Add event listeners for arrow buttons
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto sliding when manually controlled
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Stop auto sliding when manually controlled
    moveSlide(1);
});
