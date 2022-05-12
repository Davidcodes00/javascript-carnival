// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let unicorn = document.getElementsByClassName('inflate-an-image')
//Create a function using the onclick method to call it for everytime you click a unicorn.//

//declare the image ID for html - must change html file
var unicorn0 = document.getElementById('unicorn1')
var unicorn1 = document.getElementById('unicorn2')
var unicorn2 = document.getElementById('unicorn3')

//establish clickcounter ()
var clickCount0 = 0
var clickCount1 = 0
var clickCount2 = 0

//use increments
for (i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = inflate
}
// enabling code to function
function inflate(e) {
  var image = e.target

  if (image.id == 'unicorn0') {
    if (clickCount0 < 3) {
      clickCount0++
      image.src = './images/unicorn-' + clickCount0 + '.png'
    } else if (clickCount0 == 3) {
      alert('Unicorn Number 1 say thank you')
    }
  }

  if (image.id == 'unicorn1') {
    if (clickCount1 < 3) {
      clickCount1++
      image.src = './images/unicorn-' + clickCount1 + '.png'
    } else if (clickCount1 == 3) {
      alert('Unicorn Number 2 say thank you')
    }
  }
  if (image.id == 'unicorn2') {
    if (clickCount2 < 3) {
      clickCount2++
      image.src = './images/unicorn-' + clickCount2 + '.png'
    } else if (clickCount2 == 3) {
      alert('Unicorn Number 3 say thank you')
    }
  }
}
