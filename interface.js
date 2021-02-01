$(document).ready(() => {
  const players = ['kate', 'sally', 'maddie', 'sylvia', 'granny']

  const addPlayer = (player) => {
    $('#players').append(`<li><div class='slice'>${player}</div></li>`)
  }

  const addPlayers = () => {
    $('#players').empty()
    players.forEach((player) => {
      addPlayer(player)
    })
  }

  const setAngle = () => {
    const angle = (360 / players.length)
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
    players.push($('#new-player').val())
    addPlayers()
    setAngle()
  })

  addPlayers()
  setAngle()
})

// 1, 2 and >12 players don't work.
