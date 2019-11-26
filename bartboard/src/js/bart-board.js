const template = document.createElement('template')
template.innerHTML = `
<p id="text"></p>

`

export class BartBoard extends window.HTMLElement {
  constructor () {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {
    this.classList.add('blackboard')
    this.innerText = 'I love JS'
  }
}

window.customElements.define('bart-board', BartBoard)
