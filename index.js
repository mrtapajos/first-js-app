let countEl = document.getElementById('counter')
console.log(countEl)

let count = 0;
let hist = document.getElementById('historic')

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    hist.textContent += ` ${count} - `;
    count = 0;
    countEl.innerText = count;
}
