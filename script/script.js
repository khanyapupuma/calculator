let dataEntry = document.querySelector('[data-entry]')
function display(value) { dataEntry.value += value};

document.querySelector('[equals]').addEventListener('click', ()=>{
    let entry = dataEntry.value
    dataEntry.value = eval(entry)
});

let clearBtn = document.querySelector('[clear]')
let screen = document.querySelector('#screen')

clearBtn.addEventListener('click', () => {
    screen.value = ''
})