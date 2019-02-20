var count = 0;
var isX = true;
var gameOver = false;
var game = ['', '', '',
  '', '', '',
  '', '', ''];

var playTurn = function (event) {
  var id = event.target.id;
  if (game[id] !== '' || gameOver) {
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
        setTimeout(function () { alert(`${game[i]} Wins!`) }, 10);
        gameOver = true;
        // setTimeout(function() { reset() }, 100);
        return;
      }
    }
  }

  // Check columns for wins
  for (var i = 0; i < 9; i++) {
    if (game[i] !== '')
      if ((game[i] === game[i + 3]) && (game[i] === game[i + 6])) {
        setTimeout(function () { alert(`${game[i]} Wins!`) }, 10);
        gameOver = true;
        // setTimeout(function() { reset() }, 100);
        return;
      }
  }

  // Check diagonals for wins
  if (game[0] !== '') {
    if ((game[0] === game[4]) && (game[0] === game[8])) {
      setTimeout(function () { alert(`${game[0]} Wins!`) }, 10);
      gameOver = true;
      // setTimeout(function() { reset() }, 100);
    }
  }

  if (game[2] !== '') {
    if ((game[2] === game[4]) && (game[2] === game[6])) {
      setTimeout(function () { alert(`${game[2]} Wins!`) }, 10);
      gameOver = true;
      // setTimeout(function() { reset() }, 100);
    }
  }

  // Check for Tie
  if (count >= 9) {
    alert('Tie!');
    gameOver = true;
    // setTimeout(function() { reset() }, 100);
    return;
  }
}

var reset = function() {
  var spaces = document.getElementsByClassName('space');
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].innerHTML = '';
  }
  game = ['', '', '',
  '', '', '',
  '', '', ''];
  count = 0;
  isX = true;
  return;
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