const container = document.querySelector('.container');

const text = document.createElement('p');
const heading = document.createElement('h3');
text.textContent = 'Hey Im Red';
heading.textContent = 'Im blue h3';
text.style.color = 'red';
heading.style.color = 'blue';


container.appendChild(text);
container.insertBefore(heading, text);

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid black; background-color: pink';

const h1 = document.createElement('h1')
const paragraph = document.createElement('p');
h1.textContent = 'I am in a div';
paragraph.textContent = 'ME TOO'

div.appendChild(h1);
div.appendChild(paragraph);

container.appendChild(div);
