import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      turn: 'R',
      gameOver: false,
      winner: '',
      board: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ]
    };

    this.playTurn = this.playTurn.bind(this);
  }

  playTurn(event) {
    if (!this.state.gameOver) {
      var col = event.target.getAttribute('data-x');

      // check if column is full
      for (var i = this.state.board.length - 1; i >= 0; i--) {
        if (this.state.board[i][col] === '') { // column is open
          this.state.board[i][col] = this.state.turn; // sets the colored piece in the board array
          this.setState({ count: this.state.count + 1 });

          this.checkForWins(this.state.turn);

          this.setState({ turn: (this.state.turn === 'R' ? 'B' : 'R') });
          return;
        }
      }
      alert('This column is full!');
    }
    return;
  }

  checkForWins(player) {
    var board = this.state.board;

    // Check for ties
    if (this.state.count >= 42) {
      this.setState({ gameOver: true });
      alert('Tie!');
      return;
    }

    // Check for horizontal wins
    for (var row = 0; row < board.length; row++) {
      var count = 0;
      for (var col = 0; col < board[row].length; col++) {
        if (board[row][col] === player) {
          count++;
          if (count >= 4) {
            this.setState({
              winner: player,
              gameOver: true
            });
            setTimeout(() => (alert(`${player === 'R' ? 'Red' : 'Black'} wins!`)), 50);
            return;
          }
        } else {
          count = 0;
        }
      }
    }

    // Check for vertical wins
    for (var col = 0; col < 7; col++) {
      var count = 0;
      for (var row = 0; row < board.length; row++) {
        if (board[row][col] === player) {
          count++;
          if (count >= 4) {
            this.setState({
              winner: player,
              gameOver: true
            });
            setTimeout(() => (alert(`${player === 'R' ? 'Red' : 'Black'} wins!`)), 50);
            return;
          }
        } else {
          count = 0;
        }
      }
    }

  }

  render() {
    return (
      <table cellSpacing="0">
        <tbody>
          <Row board={this.state.board} playTurn={this.playTurn} y={0} />
          <Row board={this.state.board} playTurn={this.playTurn} y={1} />
          <Row board={this.state.board} playTurn={this.playTurn} y={2} />
          <Row board={this.state.board} playTurn={this.playTurn} y={3} />
          <Row board={this.state.board} playTurn={this.playTurn} y={4} />
          <Row board={this.state.board} playTurn={this.playTurn} y={5} />
        </tbody>
      </table>
    )
  }
};

export default Board;