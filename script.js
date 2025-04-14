// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get references to all elements we'll be manipulating
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const styleBox = document.getElementById('style-box');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const elementContainer = document.getElementById('element-container');
    const toggleElementBtn = document.getElementById('toggle-element-btn');

    // Array of different text options for the dynamic text
    const textOptions = [
        "The text has been changed!",
        "JavaScript is fun!",
        "DOM manipulation is powerful!",
        "Click again for more changes!"
    ];
    let currentTextIndex = 0;

    // Change text content when button is clicked
    changeTextBtn.addEventListener('click', () => {
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        dynamicText.textContent = textOptions[currentTextIndex];
    });

    // Change style when button is clicked
    changeStyleBtn.addEventListener('click', () => {
        // Generate random color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        styleBox.style.backgroundColor = randomColor;
        styleBox.style.color = 'white';
    });

    // Toggle element when button is clicked
    let isElementAdded = false;
    toggleElementBtn.addEventListener('click', () => {
        if (!isElementAdded) {
            // Create and add new element
            const newElement = document.createElement('p');
            newElement.textContent = 'This is a new element that was added dynamically!';
            newElement.style.color = 'blue';
            elementContainer.appendChild(newElement);
            toggleElementBtn.textContent = 'Remove Element';
        } else {
            // Remove the last added element
            const lastElement = elementContainer.lastElementChild;
            if (lastElement.tagName === 'P') {
                elementContainer.removeChild(lastElement);
            }
            toggleElementBtn.textContent = 'Add Element';
        }
        isElementAdded = !isElementAdded;
    });
}); 