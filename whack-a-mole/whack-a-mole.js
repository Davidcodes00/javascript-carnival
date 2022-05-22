// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cells = document.getElementsByTagName('td')

let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'

//variables for different random numbers
let min = 0
let max = 24
let number = randomNumber()
let random = cells[number]

let audio = new Audio('./whack-audio.wav')

function whackedMole() {}

mole.onclick = whackedMole
