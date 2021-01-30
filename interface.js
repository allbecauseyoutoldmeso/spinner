$(document).ready(() => {
  candidates = ['Kate', 'Masha', 'Rakesh']

  const pickCandidate = () =>
    candidates[Math.floor(Math.random() * candidates.length)]


  $('#pick-candidate-button').on('click', () => {
    $('#needle-container').toggleClass('spinning')
    $('#candidate').text(pickCandidate())
  })
})
