var gameOver = false;
var isX = true;

var playTurn = function(event) {
  if (event.target.innerHTML !== '') {
    return;
  }
  event.target.innerHTML = isX ? 'X' : 'O';
  isX = !isX;
}



document.getElementById('r1c1').addEventListener('click', playTurn );
document.getElementById('r1c2').addEventListener('click', playTurn );
document.getElementById('r1c3').addEventListener('click', playTurn );
document.getElementById('r2c1').addEventListener('click', playTurn );
document.getElementById('r2c2').addEventListener('click', playTurn );
document.getElementById('r2c3').addEventListener('click', playTurn );
document.getElementById('r3c1').addEventListener('click', playTurn );
document.getElementById('r3c2').addEventListener('click', playTurn );
document.getElementById('r3c3').addEventListener('click', playTurn );