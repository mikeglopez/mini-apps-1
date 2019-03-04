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
    this.checkForWins();

    var col = event.target.getAttribute('data-x');

    // check if column is full
    for (var i = this.state.board.length - 1; i >= 0; i--) {
      if (this.state.board[i][col] === '') { // column is open
        this.state.board[i][col] = this.state.turn; // sets the colored piece in the board array
        this.setState({count: this.state.count + 1});

        this.setState({turn: (this.state.turn === 'R' ? 'B' : 'R')});
        return;
      }
    }
    alert('This column is full!');
    return;
  }

  checkForWins() {
    console.log('Checking for wins...');
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