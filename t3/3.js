'use strict';
const names = ['John', 'Paul', 'Jones'];
const target=document.getElementById('target');
names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    target.appendChild(li);
}
);