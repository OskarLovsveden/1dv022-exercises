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
    this._tiles = this.getPictureArray()
    this._tileDiv = this.shadowRoot.querySelector('#tileDiv')

    this._tiles.forEach((tile, index) => {
      const img = imgTemplate.content.cloneNode(true)
      this._tileDiv.appendChild(img)

      const currentImg = this._tileDiv.getElementsByTagName('img')[index]

      currentImg.addEventListener('click', () => {
        console.log(tile)
        this.turnBrick(tile, index, currentImg)
      })

      if ((index + 1) % this.cols === 0) {
        this._tileDiv.appendChild(document.createElement('br'))
      }
    })
  }

  turnBrick (tile, index, img) {

  }

  getPictureArray () {
    const arr = []

    for (let i = 1; i <= (this.rows * this.cols) / 2; i++) {
      arr.push(i)
      arr.push(i)
    }

    this.fisherYatesShuffle(arr)
    return arr
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
