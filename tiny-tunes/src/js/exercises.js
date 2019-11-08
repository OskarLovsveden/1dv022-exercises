// Exercise 01

function ex01 () {
  const myText = document.createTextNode('Hello World!')
  const pTag = document.querySelector('#step01_hello')

  pTag.appendChild(myText)
}

function ex02 () {
  const h2Tag = document.createElement('h2')
  const subHead = document.createTextNode('This is a sub headline')
  const h2subHead = document.querySelector('#step02')

  h2Tag.appendChild(subHead)
  h2subHead.appendChild(h2Tag)
}

function ex03 () {
  const h2Tag = document.createElement('h2')
  const subHead = document.createTextNode('This is a sub headline')
  const reference = document.querySelector('#step03 p')
  const parent = document.querySelector('#step03')

  h2Tag.appendChild(subHead)
  parent.insertBefore(h2Tag, reference)
}

export {
  ex01,
  ex02,
  ex03
}
