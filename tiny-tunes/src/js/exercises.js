// Exercise 01

function ex01 () {
  const myText = document.createTextNode('Hello World!')

  const pTag = document.querySelector('#step01_hello')

  pTag.appendChild(myText)
}

export { ex01 }