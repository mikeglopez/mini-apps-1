var count = 0;
var isX = true;
var gameOver = false;
var winner;
var game = ['', '', '',
  '', '', '',
  '', '', ''];
  var scores = {
    X: 0,
    O: 0
  }

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
        winner = game[i];
        scores[game[i]]++
        gameOver = true;
        return;
      }
    }
  }

  // Check columns for wins
  for (var i = 0; i < 9; i++) {
    if (game[i] !== '')
      if ((game[i] === game[i + 3]) && (game[i] === game[i + 6])) {
        setTimeout(function () { alert(`${game[i]} Wins!`) }, 10);
        winner = game[i];
        scores[game[i]]++
        gameOver = true;
        return;
      }
  }

  // Check diagonals for wins
  if (game[0] !== '') {
    if ((game[0] === game[4]) && (game[0] === game[8])) {
      setTimeout(function () { alert(`${game[0]} Wins!`) }, 10);
      winner = game[0];
      scores[game[0]]++
      gameOver = true;
      return;
    }
  }

  if (game[2] !== '') {
    if ((game[2] === game[4]) && (game[2] === game[6])) {
      setTimeout(function () { alert(`${game[2]} Wins!`) }, 10);
      winner = game[2];
      scores[game[2]]++
      gameOver = true;
      return;
    }
  }

  // Check for Tie
  if (count >= 9) {
    setTimeout(function() { alert('Tie!'), 10 });
    winner = 'tie';
    gameOver = true;
    return;
  }
}

var reset = function() {
  var spaces = document.getElementsByClassName('space');
  for (var i = 0; i < spaces.length; i++) {
    spaces[i].innerHTML = '';
  }

  if (winner !== 'tie') {
    isX = (winner === 'X' ? true : false);
  } else {
    isX = true;
  }
  gameOver = false;
  game = ['', '', '',
  '', '', '',
  '', '', ''];
  count = 0;
  document.getElementById('score').innerHTML = `SCORES:<br>X: ${scores['X']}<br>O: ${scores['O']}`;
  // isX = true;
  return;
}


// Event listener for individual spaces
var spaces = document.getElementsByClassName('space')

for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener('click', function(loc) { playTurn(loc) });
}


// Event listener for reset button
document.getElementById('reset').addEventListener('click', reset);