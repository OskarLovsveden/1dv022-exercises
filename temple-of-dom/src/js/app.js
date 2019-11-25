const startingpoint = window.document.childNodes

const nodes = {
  elements: 0,
  attributes: 0,
  comments: 0,
  textnodes: 0
}

function countNodes (passedHTMLcollection) {
  for (let i = 0; i < passedHTMLcollection.length; i++) {
    if (passedHTMLcollection[i].childNodes) {
      countNodes(passedHTMLcollection[i].childNodes)
    }

    findNodeType(passedHTMLcollection[i])
  }
}

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
