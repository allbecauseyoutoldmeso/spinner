$(document).ready(() => {
  const candidates = ['1', '2', '3', '4', '5', '6', '7', '8']

  const setCandidates = () => {
    candidates.forEach((candidate) => {
      $('#candidates').append(`<li><div class='slice'>${candidate}</div></li>`)
    })
  }

  const setSliceAngle = (num) => {
    const angle = (360 / candidates.length)
    document.querySelector(':root').style.setProperty('--angle', `${angle}deg`)
  }

  minRotation = 1080
  maxRotation = 1440

  const rotation = () =>
    Math.floor(Math.random() * (maxRotation - minRotation)) + minRotation

  const setRotation = () => {
    document.querySelector(':root').style.setProperty('--rotation', `${rotation()}deg`)
  }

  const toggleButtonText = () => {
    newText = $('#spin-button').html() == 'spin' ? 'reset' : 'spin'
    $('#spin-button').html(newText)
  }

  $('#spin-button').on('click', () => {
    setRotation()
    $('#needle-container').toggleClass('spinning')
    toggleButtonText()
  })

  setCandidates()
  setSliceAngle(12)
})
