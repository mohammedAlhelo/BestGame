// variables
let currentPlayer = document.querySelector('span')
let playerTurnDisplay = document.querySelector('b')
let winner = document.querySelector('main')
let block = document.querySelectorAll('div')
let button1 = document.querySelectorAll('button')[0]
let button2 = document.querySelectorAll('button')[1]
let diceValue = document.querySelector('p')
let redIntial = 1
let redRemove = 0
let greenIntial = 1
let greenRemove = 0
let addRed = document.getElementById(redIntial)
addRed.classList.add('red')
let addGreen = document.getElementById(greenIntial)
addGreen.classList.add('green')
let player = 1
let trailer = document.getElementById('trailer')

// game logic
for (let i = 0; i < block.length; i++) {
  button1.onclick = () => {
    if (player == 1) {
      let x = Math.ceil(Math.random() * 6)
      player = 2
      currentPlayer.innerHTML = player
      playerTurnDisplay.innerHTML = player
      diceValue.innerHTML = x
      if (redIntial + x < 31) {
        // selecting the block and changing the color
        redIntial = x + redIntial
        redRemove = Math.abs(redIntial - x)
        let addRed = document.getElementById(redIntial)
        let removeRed = document.getElementById(redRemove)
        addRed.classList.add('red')
        removeRed.classList.remove('red')
        if (redIntial == 3) {
          redRemove = 3
          redIntial = 22
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 5) {
          redRemove = 5
          redIntial = 8
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 11) {
          redRemove = 11
          redIntial = 26
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 20) {
          redRemove = 20
          redIntial = 29
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 11) {
          redRemove = 11
          redIntial = 26
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 21) {
          redRemove = 21
          redIntial = 9
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 17) {
          redRemove = 17
          redIntial = 4
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 19) {
          redRemove = 19
          redIntial = 7
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        if (redIntial == 27) {
          redRemove = 27
          redIntial = 1
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.remove('red')
        }
        // winning condition
        if (redIntial == 30) {
          winner.classList.add('white')
          let removeRed = document.getElementById(30)
          removeRed.classList.remove('red')
          alert('player one won!!')
          let removeGreen = document.getElementById(greenIntial)
          removeGreen.classList.remove('green')
        }
      }
    } else if (player == 2) {
      let x = Math.ceil(Math.random() * 6)
      player = 1
      currentPlayer.innerHTML = player
      diceValue.innerHTML = x
      playerTurnDisplay.innerHTML = player
      if (greenIntial + x < 31) {
        // selecting the block and changing the color
        greenIntial = x + greenIntial
        greenRemove = Math.abs(greenIntial - x)
        let addGreen = document.getElementById(greenIntial)
        let removeGreen = document.getElementById(greenRemove)
        addGreen.classList.add('green')
        removeGreen.classList.remove('green')
        if (greenIntial == 3) {
          greenRemove = 3
          greenIntial = 22
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 5) {
          greenRemove = 5
          greenIntial = 8
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 11) {
          greenRemove = 11
          greenIntial = 26
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 20) {
          greenRemove = 20
          greenIntial = 29
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 27) {
          greenRemove = 27
          greenIntial = 1
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 21) {
          greenRemove = 21
          greenIntial = 4
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 19) {
          greenRemove = 19
          greenIntial = 7
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        if (greenIntial == 17) {
          greenRemove = 17
          greenIntial = 4
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(greenRemove)
          addGreen.classList.add('green')
          removeGreen.classList.remove('green')
        }
        // winning condition
        if (greenIntial == 30) {
          winner.classList.add('white')
          let removeGreen = document.getElementById(30)
          removeGreen.classList.remove('green')
          alert('player two won!!')
          let removeRed = document.getElementById(redIntial)
          removeRed.classList.remove('red')
        }
      }
    } else return
  }
  // restart game
  button2.onclick = () => {
    let removeRed = document.getElementById(redIntial)
    let addRed = document.getElementById(1)
    addRed.classList.add('red')
    removeRed.classList.remove('red')
    let removeGreen = document.getElementById(greenIntial)
    let addGreen = document.getElementById(1)
    addGreen.classList.add('green')
    removeGreen.classList.remove('green')
    winner.classList.remove('white')
    greenRemove = 0
    redRemove = 0
    redIntial = 1
    greenIntial = 1
    player = 1
    currentPlayer.innerHTML = player
    playerTurnDisplay.innerHTML = player
  }
}
//Hover
window.onmousemove = (e) => {
  let x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2
  trailer.style.transform = `translate(${x}px,${y}px)`
}
