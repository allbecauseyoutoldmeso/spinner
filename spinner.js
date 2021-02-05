$(document).ready(() => {
  const players = []

  const angle = () => 360 / players.length

  const listStyle = (index) => {
    switch(players.length) {
      case 1:
        return 'border: none'
      case 2:
        return `transform: rotate(${index * 180}deg)`
      default:
        return `transform: rotate(${index * angle()}deg) skewY(${angle() - 90}deg)`
    }
  }

  const sliceStyle = () => {
    switch(players.length) {
      case 1:
        return ''
      case 2:
        return 'transform: rotate(90deg)'
      default:
        return `transform: skewY(${90 - angle()}deg) rotate(${angle()/2}deg)`
    }
  }

  const addPlayers = () => {
    $('#players').empty()

    players.forEach((player, index) => {
      $('#players').append(`
        <li style='${listStyle(index)}'>
          <div class='slice' style='${sliceStyle()}'>
            ${player}
          </div>
        </li>
      `)
    })
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
    $('#new-player').val('')
    addPlayers()
  })

  addPlayers()
})

// removing players
