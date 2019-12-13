/**
 *  A Class representing a game of Memory
 *
 * @export
 * @class Memory
 * @extends {window.HTMLElement}
 */
export class MemoryGame extends window.HTMLElement {
  constructor (rows = 4, cols = 4) {
    super()

    this.attachShadow({
      mode: 'open'
    })
    const div = document.createElement('div')

    for (let i = 0; i < rows * cols; i++) {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      div.appendChild(img)

      if ((i + 1) % cols === 0) {
        div.appendChild(document.createElement('br'))
      }
    }

    this.shadowRoot.appendChild(div)

    this.rows = rows
    this.cols = cols
  }
}

window.customElements.define('memory-game', MemoryGame)
