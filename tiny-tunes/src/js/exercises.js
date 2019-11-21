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

function ex06 () {
  const fragment = document.createDocumentFragment()
  const ulReference = document.getElementById('list06')

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    fragment.appendChild(li)
  }
  ulReference.appendChild(fragment)
}

function ex07 () {
  const template = document.querySelector('#step07-template')
  const list07 = document.querySelector('#list07')
  let liTemplate

  for (let i = 0; i < 5; i++) {
    liTemplate = document.importNode(template.content, true)
    const a = liTemplate.querySelector('a')
    a.setAttribute('href', 'https://www.youtube.com')
    a.innerText = `This is link number ${i + 1}`
    list07.appendChild(liTemplate)
  }
}

function ex08 () {
  const button = document.querySelector('#todoListform button')
  button.addEventListener('click', event => {
    const value = button.previousElementSibling.value

    if (value.length > 0) {
      const li = document.createElement('li')
      li.innerText = value
      document.querySelector('#todoList ul').appendChild(li)
    }
  })
}

function ex09 () {
  const username = document.querySelectorAll('#textboxes09 input')[0]
  const confirm = document.querySelectorAll('#textboxes09 input')[1]
  const validation = document.querySelector('#step09 .validation')

  document.querySelector('#textboxes09').addEventListener('blur', event => {
    if (username.value.length > 0 && confirm.value.length > 0) {
      if (username.value === confirm.value) {
        validation.innerText = 'The username is OK!'
      } else {
        validation.innerText = 'The usernames does not match.'
      }
    } else {
      validation.innerText = ''
    }
  }, true)
}

export {
  ex01,
  ex02,
  ex03,
  ex04,
  ex05,
  ex06,
  ex07,
  ex08,
  ex09
}
