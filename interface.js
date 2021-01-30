$(document).ready(() => {
  candidates = ['Kate', 'Masha', 'Rakesh']

  const pickCandidate = () =>
    candidates[Math.floor(Math.random() * candidates.length)]

  const setRotation = () => {
    document.querySelector(':root').style.setProperty('--rotation', '100deg')
  }

  $('#pick-candidate-button').on('click', () => {
    setRotation()
    $('#needle-container').toggleClass('spinning')
  })
})
