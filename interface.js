$(document).ready(() => {
  const candidates = ['kate', 'sally', 'maddie', 'sylvia', 'granny']

  const setCandidates = () => {
    candidates.forEach((candidate) => {
      $('#candidates').append(`<li><div class='slice'>${candidate}</div></li>`)
    })
  }

  const setSliceSkew = () => {
    const skew = (360 / candidates.length) - 90
    document.querySelector(':root').style.setProperty('--skew', `${skew}deg`)
  }

  const setSliceAngle = () => {
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
  setSliceAngle()
  setSliceSkew()
})


// nb could just set candidate count as css variable and use calc() to get slice angle and skew!
