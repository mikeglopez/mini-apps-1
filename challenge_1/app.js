var gameOver = false;
var count = 0;
var isX = true;
var game = ['', '', '',
  '', '', '',
  '', '', ''];

var playTurn = function (event) {
  var id = event.target.id;
  if (game[id] !== '') {
    return;
  }
  event.target.innerHTML = isX ? 'X' : 'O';
  game[id] = event.target.innerHTML;
  isX = !isX;
  count++;
  checkForWins();
}

var checkForWins = function () {

  // Check rows for wins
  for (var i = 0; i < 9; i += 3) {
    if (game[i] !== '') {
      if ((game[i] === game[i + 1]) && (game[i] === game[i + 2])) {
        gameOver;
        setTimeout(function () { alert(`${game[i]} Wins!`) }, 10);
        return;
      }
    }
  }

  // Check columns for wins
  for (var i = 0; i < 9; i++) {
    if (game[i] !== '')
      if ((game[i] === game[i + 3]) && (game[i] === game[i + 6])) {
        gameOver;
        setTimeout(function () { alert(`${game[i]} Wins!`) }, 10);
        return;
      }
  }

  // Check for Tie
  if (count >= 9) {
    gameOver;
    alert('Tie!');
    return;
  }
}


// Event listeners for individual spaces
document.getElementById('0').addEventListener('click', playTurn);
document.getElementById('1').addEventListener('click', playTurn);
document.getElementById('2').addEventListener('click', playTurn);
document.getElementById('3').addEventListener('click', playTurn);
document.getElementById('4').addEventListener('click', playTurn);
document.getElementById('5').addEventListener('click', playTurn);
document.getElementById('6').addEventListener('click', playTurn);
document.getElementById('7').addEventListener('click', playTurn);
document.getElementById('8').addEventListener('click', playTurn);