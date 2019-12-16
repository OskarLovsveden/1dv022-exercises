const divTemplate = document.createElement('template')
divTemplate.innerHTML = `
<style>
  #tileDiv img {
    width: 15%;
  }
</style>
<div id="tileDiv">
</div>
`

const imgTemplate = document.createElement('template')
imgTemplate.innerHTML = `
<img src="image/0.png" alt="A memory brick" />
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

    this.shadowRoot.appendChild(divTemplate.content.cloneNode(true))

    this.rows = rows
    this.cols = cols
    this._tileDiv = this.shadowRoot.querySelector('#tileDiv')

    for (let i = 0; i < this.rows * this.cols; i++) {
      const img = imgTemplate.content.cloneNode(true)
      this._tileDiv.appendChild(img)

      if ((i + 1) % this.cols === 0) {
        this._tileDiv.appendChild(document.createElement('br'))
      }
    }

    this.shadowRoot.appendChild(this._tileDiv)
  }

  connectedCallback () {
    this.getPictureArray()
  }

  getPictureArray () {
    const arr = []

    for (let i = 1; i <= (this.rows * this.cols) / 2; i++) {
      arr.push(i)
      arr.push(i)
    }

    this.fisherYatesShuffle(arr)
  }

  fisherYatesShuffle (array) {
    let m = array.length

    while (m) {
      const i = Math.floor(Math.random() * m--)

      const t = array[m]
      array[m] = array[i]
      array[i] = t
    }

    return array
  }
}

window.customElements.define('memory-game', MemoryGame)
