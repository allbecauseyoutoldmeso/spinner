$(document).ready(() => {
  minRotation = 1080
  maxRotation = 1440

  const rotation = () =>
    Math.floor(Math.random() * (maxRotation - minRotation)) + minRotation

  const setRotation = () => {
    document.querySelector(':root').style.setProperty('--rotation', `${rotation()}deg`)
  }

  $('#pick-candidate-button').on('click', () => {
    setRotation()
    $('#needle-container').toggleClass('spinning')
  })
})
