const template = document.createElement('template')
template.innerHTML = `
<style>
  #tileDiv img {
    width: 15%;
  }
</style>
<div id="tileDiv">
</div>
`

/**
 *  A Class representing a game of Memory
 *
 * @export
 * @class Memory
 * @extends {window.HTMLElement}
 */
export class MemoryGame extends window.HTMLElement {
  /**
   *Creates an instance of MemoryGame.
   * @param {number} [rows=4]
   * @param {number} [cols=4]
   * @memberof MemoryGame
   */
  constructor (rows = 4, cols = 4) {
    super()

    this.attachShadow({
      mode: 'open'
    })

    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._tileDiv = this.shadowRoot.querySelector('#tileDiv')

    for (let i = 0; i < rows * cols; i++) {
      const img = document.createElement('img')
      img.setAttribute('src', 'image/0.png')
      this._tileDiv.appendChild(img)

      if ((i + 1) % cols === 0) {
        this._tileDiv.appendChild(document.createElement('br'))
      }
    }

    this.shadowRoot.appendChild(this._tileDiv)

    this.rows = rows
    this.cols = cols
  }
}

window.customElements.define('memory-game', MemoryGame)
