let dataEntry = document.querySelector('[data-entry]')
function display(value) { dataEntry.value += value };

document.querySelector('[equals]').addEventListener('click', () => {
    let entry = dataEntry.value;
    dataEntry.value = eval(entry);
});

let clearBtn = document.querySelector('[clear]');
let deleteBtn = document.querySelector('[delete]'); // Select the delete button
let screen = document.querySelector('#screen');

clearBtn.addEventListener('click', () => {
    screen.value = '';
});

// Add event listener for the delete button
deleteBtn.addEventListener('click', () => {
    dataEntry.value = dataEntry.value.slice(0, -1); // Remove the last character
});