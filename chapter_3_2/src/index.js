console.log("test")

const title1 = document.getElementById('title');
console.log(title1)

const title2 = document.querySelector('#title');
console.log(title2)

const containers = document.getElementsByClassName('container');
Array.from(containers).forEach(elm => console.log(elm))

const container = document.querySelector('.container')
console.log(container)

const containers2 = document.querySelectorAll('.container')
Array.from(containers2).forEach(elm => console.log(elm))

const divEl = document.createElement('div')
console.log(divEl)

const testEl = document.createElement('sui')
console.log(testEl)

const pEl = document.createElement('p')
divEl.appendChild(pEl)
const h2El = document.createElement('h2')
divEl.prepend(h2El)
console.log(divEl)

const buttonEl = document.createElement('button');
buttonEl.textContent = 'あじめる'
container.appendChild(buttonEl)
buttonEl.addEventListener('click', () => alert('あじまるあじまる！'))

const bodyEl = document.querySelector('body')
bodyEl.removeChild(title1)
