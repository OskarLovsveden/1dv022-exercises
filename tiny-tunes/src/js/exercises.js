// Exercise 01

function ex01 () {
  const myText = document.createTextNode('Hello World!')
  const pTag = document.querySelector('#step01_hello')

  pTag.appendChild(myText)
}

function ex02 () {
  const h2Tag = document.createElement('H2')
  const subHead = document.createTextNode('This is a sub headline')
  const h2subHead = document.querySelector('#step02')

  h2Tag.appendChild(subHead)
  h2subHead.appendChild(h2Tag)
}

export { ex01, ex02 }
