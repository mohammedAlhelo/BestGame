// variables
let currentPlayer = document.querySelector('span')
let playerTurnDisplay = document.querySelector('b')
let player = 1
let winner = document.querySelector('main')
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
        }
      }
    } else return
  }
}

// if (redIntial < 26) {
//   // random number
//   button1.onclick = () => {
//     let x = Math.ceil(Math.random() * 6)
//     player = 2

//     currentPlayer.innerHTML = player
//     diceValue.innerHTML = x
//     if (redIntial + x < 26) {
//       // selecting the block and changing the color
//       redIntial = x + redIntial
//       redRemove = Math.abs(redIntial - x)

//       let addRed = document.getElementById(redIntial)
//       let removeRed = document.getElementById(redRemove)
//       addRed.classList.add('red')
//       removeRed.classList.add('white')
//       // winning condition
//       if (redIntial == 25) {
//         alert('player one won!!')
//       }

//       // switch player function
//     }
//   }}
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
// if (player == 2) {
//   console.log('else part')
//   console.log(player, 'player')

//   // if (greenIntial < 26) {
//   // if (player == 2) {
//   // random number
//   button2.onclick = () => {
//     console.log('button2.onclick')
//     let x = Math.ceil(Math.random() * 6)
//     let player = 1
//     currentPlayer.innerHTML = player
//     diceValue.innerHTML = x
//     if (greenIntial + x < 26) {
//       // selecting the block and changing the color
//       greenIntial = x + greenIntial
//       greenRemove = Math.abs(greenIntial - x)
//       let addGreen = document.getElementById(greenIntial)
//       let removeGreen = document.getElementById(redRemove)
//       addGreen.classList.add('green')
//       removeGreen.classList.add('white')
//       // winning condition
//       if (greenIntial == 25) {
//         alert('player one won!!')
//       }
//     }
//   }
// }
// // }
