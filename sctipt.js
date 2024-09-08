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

// game logic
for (let i = 0; i < block.length; i++) {
  if (player == 1) {
    if (redIntial < 26) {
      // random number
      button1.onclick = () => {
        let x = Math.ceil(Math.random() * 6)
        player = 2
        currentPlayer.innerHTML = player
        diceValue.innerHTML = x
        if (redIntial + x < 26) {
          // selecting the block and changing the color
          redIntial = x + redIntial
          redRemove = Math.abs(redIntial - x)
          let addRed = document.getElementById(redIntial)
          let removeRed = document.getElementById(redRemove)
          addRed.classList.add('red')
          removeRed.classList.add('white')
          // winning condition
          if (redIntial == 25) {
            alert('player one won!!')
          }
        }
      }
    }
  }
  // if (greenIntial < 26) {
  //   // random number
  //   button2.onclick = () => {
  //     let y = Math.ceil(Math.random() * 6)
  //     diceValue.innerHTML = y
  //     if (greenIntial + y < 26) {
  //       // selecting the block and changing the color
  //       greenIntial = y + greenIntial
  //       greenRemove = Math.absgreenIntial - y
  //       let addgreen = document.getElementById(greenIntial)
  //       let removeGreen = document.getElementById(greenRemove)
  //       addgreen.classList.add('green')
  //       removeGreen.classList.add('white')
  //       // winning condition
  //       if (greenIntial == 25) {
  //         alert('player two won!!')
  //       }
  //     }
  //     player = 1
  //     currentPlayer.innerHTML = player
  //   }
  // }
  else {
    if (greenIntial < 26) {
      // random number
      button2.onclick = () => {
        let x = Math.ceil(Math.random() * 6)
        player = 1
        currentPlayer.innerHTML = player
        diceValue.innerHTML = x
        if (greenIntial + x < 26) {
          // selecting the block and changing the color
          greenIntial = x + greenIntial
          greenRemove = Math.abs(greenIntial - x)
          let addGreen = document.getElementById(greenIntial)
          let removeGreen = document.getElementById(redRemove)
          addGreen.classList.add('green')
          removeGreen.classList.add('white')
          // winning condition
          if (greenIntial == 25) {
            alert('player one won!!')
          }
        }
      }
    }
  }
}
