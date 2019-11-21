// your code here

let elementNodes = 0
let attributeNodes = 0
let commentNodes = 0
let textNodes = 0

document.childNodes.forEach(node => {
  console.log(node)
  console.log('NIVÅ1')
  // RECURSION MAYBE YES?
//   node.childNodes.forEach(node => {
//     console.log(node)
//     console.log('NIVÅ2')
//     node.childNodes.forEach(node => {
//       console.log(node)
//       console.log('NIVÅ3')
//     })
//   })
})

function findNodeType (currentNode) {
  if (currentNode.nodeType === 1) {
    elementNodes += 1
  } else if (currentNode.nodeType === 3) {
    textNodes += 1
  } else if (currentNode.nodeType === 8) {
    commentNodes += 1
  } else if (currentNode.nodeType === 2) {
    attributeNodes += 1
  }
}

function createRepresentation () {
  const template = document.querySelector('#resultTemplate')
  const clone = template.content.cloneNode(true)
  // Tilldela text
  document.querySelector('body').appendChild(clone)
}

// if node has children, go into that node...
// else check Nodetype
