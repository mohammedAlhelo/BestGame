// variables
let currentPlayer = document.querySelector('span')
let player = 1
let block = document.querySelectorAll('div')
let button1 = document.querySelectorAll('button')[0]
let button2 = document.querySelectorAll('button')[1]
let diceValue = document.querySelector('p')
let redIntial = 0

// game logic
for (let i = 0; i < block.length; i++) {
  if (player == 1) {
    if (redIntial < block.length) {
      // random number
      button1.onclick = () => {
        for (let i = 0; i < 25; i++) {
          let x = Math.ceil(Math.random() * 6)
          diceValue.innerHTML =
            // selecting the block and changing the color

            redIntial = x + redIntial
          let k = document.getElementById(redIntial)
          k.classList.add('red')
          i = redIntial
          // winning condition
          if (redIntial == block.length) {
            alert('player one won!!')
          }
        }
      }
    } else {
    }
  }
}
