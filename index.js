
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
addButton.addEventListener('click', () => {
    const newTodo = document.createElement('li');
    newTodo.textContent = 'New Task 📝'; 
    newTodo.className = 'todo-item';
    newTodo.addEventListener('click', () => {
        newTodo.remove();
    });
    todoList.appendChild(newTodo);
});
const listItems = document.querySelectorAll('ul li');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        item.remove(); 
    });
});
// script.js
let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendValue(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculate() {
    try {
        let result = eval(display.textContent);
        display.textContent = result;
    } catch {
        display.textContent = 'Error';
    }
}
const button = document.getElementById('add-image-btn');
const imageContainer = document.querySelector('.image-container');

// "CLICK ME" tugmasi bosilganda rasmni ko'paytirish
button.addEventListener('click', () => {
  const newImage = document.createElement('img');
  newImage.src = 'your-image.jpg'; // Tasvir manzilini shu yerda o'zgartiring
  newImage.alt = 'Dynamic';
  newImage.style.borderRadius = '10px';
  imageContainer.appendChild(newImage);
});
