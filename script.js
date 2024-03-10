'use strict';

const imgContainers = document.querySelectorAll('.img-container > div');
const counters = new Array(imgContainers.length).fill(0);

imgContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        counters[index]++;
        updateCounterText();
    });
});

function updateCounterText() {
    imgContainers.forEach((container, index) => {
        const counterText = document.createElement('p');
        counterText.textContent = `Votes: ${counters[index]}`;
        if (container.childNodes.length > 1) {
            container.removeChild(container.childNodes[1]);
        }
        container.appendChild(counterText);
    });
}