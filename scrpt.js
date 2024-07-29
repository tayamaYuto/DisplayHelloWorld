function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const text = 'Hello World';
const greetingElement = document.getElementById('greeting');

for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.style.color = getRandomColor();
    span.classList.add('colored-letter');
    greetingElement.appendChild(span);
}