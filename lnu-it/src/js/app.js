const head = document.querySelector('head')
const link = document.createElement('link')

console.log(head)
console.log(link)

link.setAttribute('rel', 'stylesheet')
link.setAttribute('type', 'text/css')
link.setAttribute('href', '../css/style.css')

console.log(link.attributes)

head.appendChild(link)
