// #1 

const title = document.getElementById('title');
title.textContent = 'Welcome to JavaScript';


// #2

const firstPElem = document.querySelector('p');
firstPElem.textContent = 'DOM is easy';


// #3

const items = document.querySelectorAll('.item');

items.forEach((item) => {
    // item.textContent = 'new HTML';
    console.log(item.textContent);
})


// #4 

const pTag = document.getElementById('message');

const btn = document.getElementById('changeColorBtn');

btn.addEventListener('click', () => {
    pTag.style.color = 'red';
});


// #5 

const box = document.getElementById('box');

const changeBackgroundBtn = document.getElementById('changeBackgroundBtn');

changeBackgroundBtn.addEventListener('click', () => {
    box.style.backgroundColor = 'lightblue';
});


// #6 

const card = document.getElementById('card');

const activateBtn = document.getElementById('activateBtn');

activateBtn.addEventListener('click', () => {
    card.classList.add('active');
});


// #7

const content = document.getElementById('content');

const showBtn = document.getElementById('showBtn');

showBtn.addEventListener('click', () => {
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
        showBtn.textContent = 'Hide Content';
    } else {
        content.classList.add('hidden')
        showBtn.textContent = 'Show Content';
    }
});


// #8

const themeBox = document.getElementById('themeBox');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

toggleThemeBtn.addEventListener('click', () => {
    themeBox.classList.toggle('dark');
});


// #9

const liItem = document.createElement('li');
liItem.textContent = 'React';

const technologies = document.getElementById('technologies');

technologies.appendChild(liItem);


// #10

const notification = document.getElementById('notification');
const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', () => {
    notification.remove();
});


// #11 

const photo = document.getElementById('photo');
const changeImageBtn = document.getElementById('changeImageBtn');

changeImageBtn.addEventListener('click', () => {
    photo.setAttribute('src', 'new-image.jpg');
});


// #12

const websiteLink = document.getElementById('websiteLink');

console.log(websiteLink.getAttribute('href'));


// #13 

const usernameInput = document.getElementById('usernameInput');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    console.log(usernameInput.value);
})


// #14 

const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const result = document.getElementById('result');

greetBtn.addEventListener('click', () => {
    result.textContent = nameInput.value;
});


// #15

const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');

increaseBtn.addEventListener('click', () => {
    counter.textContent = Number(counter.textContent) + 1;
});


// #16

const description = document.getElementById('description');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
    description.classList.toggle('hidden');
});


// #17

const productInput = document.getElementById('productInput');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

addProductBtn.addEventListener('click', () => {
    const liItem = document.createElement('li');

    liItem.textContent = productInput.value;

    productList.appendChild(liItem);

    productInput.value = '';
});

// #18

const taskList = document.getElementById('taskList');
const deleteBtn = document.querySelectorAll('.deleteBtn');

deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        taskList.removeChild(btn.parentElement);
    });
});

// #19

const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const emailResult = document.getElementById('emailResult');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    emailResult.textContent = emailInput.value;
});

// #20

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', () => {
    if (todoInput.value.trim() === '') {
        alert('Please enter a todo item');
        return;
    }

    const liItem = document.createElement('li');
    const spanItem = document.createElement('span');


    liItem.textContent = todoInput.value;
    liItem.classList.add('todo-item');
    liItem.addEventListener('click', () => {
        console.log('Todo item clicked:', liItem.textContent);
        liItem.classList.toggle('completed');
    });

    spanItem.textContent = ' Delete';
    spanItem.classList.add('delete-btn');
    liItem.appendChild(spanItem);

    spanItem.addEventListener('click', (event) => {
        event.stopPropagation();
        todoList.removeChild(liItem);
    });

    todoList.appendChild(liItem);
    todoInput.value = '';
});