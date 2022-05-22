// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('td')

//variables for different random numbers
let randomIndex = Math.floor(Math.random() * cells.length)
let randomCell = cells[randomIndex]

let mole = document.createElement('img')

mole.src = './mole.PNG'
mole.id = 'mole'

randomCell.appendChild(mole)

let audio = new Audio('./whack-audio.wav')
audio.play()

mole.onclick = whackedMole

function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole)
}
