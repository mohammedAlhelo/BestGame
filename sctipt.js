// variables
let currentPlayer = document.querySelector('span')
let player = 1
let block = document.querySelectorAll('div')
let button1 = document.querySelectorAll('button')[0]
let button2 = document.querySelectorAll('button')[1]
let diceValue = document.querySelector('p')
let redIntial = 0
let redRemove = 0
let greenIntial = 0
let greenRemove = 0
let x = Math.ceil(Math.random() * 6)

// game logic
for (let i = 0; i < block.length; i++) {
  if (player == 1) {
    if (redIntial < block.length) {
      // random number
      button1.onclick = () => {
        diceValue.innerHTML = x
        if (redIntial + x < block.length) {
          // selecting the block and changing the color
          redIntial = x + redIntial
          redRemove = redIntial - x
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.add('white')
          // winning condition
          if (redIntial == block.length) {
            alert('player one won!!')
          }
        }
        player = 2
        currentPlayer.innerHTML = player
      }
    }
  }
}
