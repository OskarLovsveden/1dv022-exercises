/**
 * A class representing the gameplay of the click-game.
 *
 * @export
 * @class Gameplay
 */
export default class Gameplay {
  /**
   * Creates an instance of Gameplay.
   * @memberof Gameplay
   */
  constructor () {
  }

  /**
   * Picks a random color from this.activeColor.
   * @memberof Gameplay
   */
  pickRandomColor () {
    const colorSelect = Math.floor(Math.random() * 3)
    console.log(this.activeColor[colorSelect])
  }

  /**
   * Sets the starting colors for the board.
   * @memberof Gameplay
   */
  setStartingColors () {
    const arrayOf9 = this.fisherYatesShuffle([0, 1, 2, 3, 4, 5, 6, 7, 8])
    // const activeColors = [
    //   {
    //     Name: 'Red',
    //     Count: 0
    //   },
    //   {
    //     Name: 'Blue',
    //     Count: 0
    //   },
    //   {
    //     Name: 'Yellow',
    //     Count: 0
    //   }
    // ]

    for (let i = 0; i < 9; i++) {
    }
  }

  fisherYatesShuffle (array) {
    var i = array.length
    var j = 0
    var temp

    while (i--) {
      j = Math.floor(Math.random() * (i + 1))

      // swap randomly chosen element with current element
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }
}
