const template = document.createElement('template')
template.innerHTML = `
<div>
    <label for="teamselector" class="active">Write here:</label><br>
    <input type="text" id="teamselector" list="teams">
    <datalist id="teams">
    </datalist>
</div>
`

/**
 * Teamselector component
 *
 * @export
 * @class Teamselector
 * @extends {window.HTMLElement}
 */
export class Teamselector extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({
      mode: 'open'
    })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this._input = this.shadowRoot.querySelector('#teamselector')
    this._url = 'http://localhost:3000/api'
    this._minLength = 2
    this.teams = []
  }

  static get observedAttributes () {
    return ['src', 'minLength']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'src') {
      this._url = newValue
    } else if (name === 'minLength') {
      this._minLength = parseInt(newValue)
    }
  }

  connectedCallback () {
    this._input.addEventListener('input', async e => {
      if (this._input.value.length < this._minLength) {
        return
      }
      this.teams = await this.search(this._input.value)
      this._updateRendering()
      this.dispatchEvent(new window.CustomEvent('searchchanged', {
        detail: this.teams
      }))

      const hit = this.teams.filter(team => team.name === this._input.value).shift()
      if (hit) {
        this.dispatchEvent(new window.CustomEvent('teamselected', {
          detail: hit
        }))
        this._input.blur()
        this._input.focus()
      }
    })
  }

  async search (str) {
    let searchResult = await window.fetch(`${this._url}/teams?q=${str}`)
    searchResult = await searchResult.json()
    return searchResult.teams
  }

  _updateRendering () {
    const datalist = this.shadowRoot.querySelector('#teams')
    datalist.innerHTML = ''

    for (const team of this.teams) {
      const option = document.createElement('option')
      option.setAttribute('value', team.name)
      datalist.appendChild(option)
    }
  }
}

window.customElements.define('team-selector', Teamselector)
