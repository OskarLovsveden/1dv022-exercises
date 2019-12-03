import './team-selector.js'

const plteams = document.querySelector('#plteams')
const template = document.querySelector('#cardTemplate')

plteams.addEventListener('teamselected', async e => {
  const teamResult = await window.fetch(`${plteams.getAttribute('src')}/teams/${e.detail.id}`)
  const teamDetail = await teamResult.json()

  document.querySelector('#cardContainer').innerHTML = ''

  const card = template.content.cloneNode(true)
  card.querySelector('#cardTitle').textContent = teamDetail.name
  card.querySelector('#cardLinks a').setAttribute('href', teamDetail.url)
  card.querySelector('#cardContent').textContent = teamDetail.nickname
  document.querySelector('#cardContainer').appendChild(card)
})
