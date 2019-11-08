// Exercise 01

function ex01 () {
  // createTextNode = skapar en string
  const myText = document.createTextNode('Hello World!')
  // querySelector = returnerar ett element
  const pTag = document.querySelector('#step01_hello')

  // appendChild = tilldelar ett element "något". skapar ett "child"
  pTag.appendChild(myText)
}

function ex02 () {
  // createElement = skapar ett element
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

  // insertBefore = trycker in något framför ett element
  parent.insertBefore(h2Tag, reference)

  // Test parentElement
  // querySelectorAll = väljer alla av samma sorts element
  // const h2tag = document.querySelectorAll('h2')[4]
  // console.log(h2tag.parentElement)
}

function ex04 () {
  document.querySelectorAll('#step04 h2')[0].style.color = 'red'
}

function ex05 () {
  const div = document.querySelector('#step05')
  const button = document.querySelector('.greybox')

  button.addEventListener('click', function (event) {
    const text = document.createTextNode('You clicked!')
    const pTag = document.createElement('p')
    pTag.appendChild(text)
    div.appendChild(pTag)
    event.preventDefault()
  })
}

export {
  ex01,
  ex02,
  ex03,
  ex04,
  ex05
}
