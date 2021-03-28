let digits = document.getElementsByClassName('grid_item');

function clearDigits() {
    for (let digit of digits) {
        digit.textContent = ' ';
    }
}

document.getElementById('clear').addEventListener('click', () => clearDigits());

for (let d of digits) {  // add click listeners to all the digits
    d.addEventListener('click', () => {
        for (let dig of digits) {  // clear anything already highlighted
            if (dig.classList.contains('highlighted')) {
                dig.classList.remove('highlighted');
                break;
            }
        }
        d.classList.toggle('highlighted');  // highlight the element clicked
    });
}