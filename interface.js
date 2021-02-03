$(document).ready(() => {
  const players = ['kate', 'sally', 'maddie', 'sylvia', 'granny']

  const angle = () => 360 / players.length

  const listTransform = (index) => {
    return `rotate(${(index) * angle()}deg) skewY(${angle() - 90}deg)`
  }

  const sliceTransform = () => {
    return `skewY(${90 - angle()}deg) rotate(${angle()/2}deg)`
  }

  const addPlayers = () => {
    $('#players').empty()

    players.forEach((player, index) => {
      $('#players').append(`
        <li style='transform: ${listTransform(index)}'>
          <div class='slice' style='transform: ${sliceTransform()}'>
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

// 1 and 2  players don't work.
// removing players
