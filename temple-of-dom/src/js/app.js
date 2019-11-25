import {
  loopNodes,
  createRepresentation
} from './nodes.js'

const start = window.document.childNodes

loopNodes(start)
createRepresentation()

// const startingpoint = window.document.childNodes

// const nodes = {
//   elements: 0,
//   attributes: 0,
//   comments: 0,
//   textnodes: 0
// }

// function countNodes (passedHTMLcollection) {
//   for (let i = 0; i < passedHTMLcollection.length; i++) {
//     if (passedHTMLcollection[i].childNodes) {
//       countNodes(passedHTMLcollection[i].childNodes)
//     }

//     findNodeType(passedHTMLcollection[i])
//   }
// }

// function findNodeType (currentNode) {
//   if (currentNode.nodeType === 1) {
//     if (currentNode.tagName) {
//       nodes.elements += 1
//     }

//     if (currentNode.attributes && currentNode.attributes.length > 0) {
//       nodes.attributes += currentNode.attributes.length
//     }
//   }

//   if (currentNode.nodeType === 3) {
//     nodes.textnodes += 1
//   }

//   if (currentNode.nodeType === 8) {
//     nodes.comments += 1
//   }
// }

// function createRepresentation () {
//   const template = document.querySelector('#resultTemplate')

//   Object.getOwnPropertyNames(nodes).forEach(key => {
//     const clone = template.content.cloneNode(true)
//     clone.querySelector('h3').innerHTML = `Number of ${key}`
//     clone.querySelector('p').innerHTML = `${nodes[key]}`

//     document.querySelector('body').appendChild(clone)
//   })
// }

// countNodes(startingpoint)
// createRepresentation()
