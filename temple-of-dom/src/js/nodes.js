const nodes = {
  elements: 0,
  attributes: 0,
  comments: 0,
  textnodes: 0
}

/**
 * Loops through all nodes of HTMLCollection.
 *
 */
function loopNodes (passedHTMLcollection) {
  for (let i = 0; i < passedHTMLcollection.length; i++) {
    if (passedHTMLcollection[i].childNodes) {
      loopNodes(passedHTMLcollection[i].childNodes)
    }

    findNodeType(passedHTMLcollection[i])
  }
}

/**
 * Finds what type the given Node is and adds on to a representing value.
 *
 * @param {Node} currentNode
 */
function findNodeType (currentNode) {
  if (currentNode.nodeType === 1) {
    if (currentNode.tagName) {
      nodes.elements += 1
    }

    if (currentNode.attributes && currentNode.attributes.length > 0) {
      nodes.attributes += currentNode.attributes.length
    }
  }

  if (currentNode.nodeType === 3) {
    nodes.textnodes += 1
  }

  if (currentNode.nodeType === 8) {
    nodes.comments += 1
  }
}

/**
 * Creates a representation of the result in the form of a div tag.
 * Based of a template.
 *
 */
function createRepresentation () {
  const template = document.querySelector('#resultTemplate')

  Object.getOwnPropertyNames(nodes).forEach(key => {
    const clone = template.content.cloneNode(true)
    clone.querySelector('h3').innerHTML = `Number of ${key}`
    clone.querySelector('p').innerHTML = `${nodes[key]}`

    document.querySelector('body').appendChild(clone)
  })
}

// Exports
export {
  loopNodes,
  createRepresentation
}
