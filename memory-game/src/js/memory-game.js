const mainTemplate = document.createElement('template')
mainTemplate.innerHTML = `
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
<a href="#"><img src="image/0.png" alt="A memory tile" /></a>
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

    this.shadowRoot.appendChild(mainTemplate.content.cloneNode(true))

    this.rows = rows
    this.cols = cols
    this._tiles = this._getPictureArray()
    this._tileDiv = this.shadowRoot.querySelector('#tileDiv')

    this._tiles.forEach((tile, index) => {
      const img = imgTemplate.content.cloneNode(true)
      this._tileDiv.appendChild(img)

      const listOfImg = this._tileDiv.getElementsByTagName('img')
      const currentImg = listOfImg[index]

      currentImg.addEventListener('click', event => {
        console.log(event.target)
        this._turnTile(tile, index, event.target)
      })

      currentImg.parentNode.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
          return // Do nothing if event already handled
        }

        switch (event.code) {
          case 'KeyS':
          case 'ArrowDown':
            // HANDLE DOWN
            this._arrowDown(index)
            break
          case 'KeyW':
          case 'ArrowUp':
            // HANDLE UP
            this._arrowUp(index)
            break
          case 'KeyA':
          case 'ArrowLeft':
            // HANDLE LEFT
            this._arrowLeft(index)
            break
          case 'KeyD':
          case 'ArrowRight':
            // HANDLE RIGHT
            this._arrowRight(index)
            break
          case 'Enter' :
            // HANDLE ENTER
            this._turnTile(tile, index, event.target)
            break
        }
        // Consume the event so it doesn't get handled twice
        event.preventDefault()
      }, true)

      if ((index + 1) % this.cols === 0) {
        this._tileDiv.appendChild(document.createElement('br'))
      }
    })

    this._tileLimit = this._tileDiv.getElementsByTagName('a').length - 1
  }

  connectedCallback () {
    this._tileDiv.getElementsByTagName('a')[0].focus()
  }

  _arrowDown (index) {
    const nextTile = index + this.cols

    if (nextTile <= this._tileLimit) {
      this._tileDiv.getElementsByTagName('a')[nextTile].focus()
    }
  }

  _arrowUp (index) {
    const nextTile = index - this.cols
    if (nextTile >= 0) {
      this._tileDiv.getElementsByTagName('a')[nextTile].focus()
    }
  }

  _arrowLeft (index) {
    const nextTile = index - 1
    if (nextTile >= 0) {
      this._tileDiv.getElementsByTagName('a')[nextTile].focus()
    }
  }

  _arrowRight (index) {
    const nextTile = index + 1
    if (nextTile <= this._tileLimit) {
      this._tileDiv.getElementsByTagName('a')[nextTile].focus()
    }
  }

  _turnTile (tile, index, img) {
    if (img.nodeName === 'IMG') {
      img.src = 'image/' + tile + '.png'
    } else {
      img.firstElementChild.src = 'image/' + tile + '.png'
    }
  }

  _getPictureArray () {
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
