$(document).ready(() => {
  const players = ['kate', 'sally', 'maddie', 'sylvia', 'granny']

  const addPlayer = (player) => {
    $('#players').append(`<li><div class='slice'>${player}</div></li>`)
  }

  const setPlayers = () => {
    players.forEach((player) => {
      addPlayer(player)
    })
  }

  const setAngle = () => {
    const angle = (360 / $('#players').children().length)
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

  $('#add-player-form').submit((event) => {
    event.preventDefault()
    addPlayer($('#new-player').val())
    setAngle()
  })

  setPlayers()
  setAngle()
})

// why don't 1 or 2 players work?
