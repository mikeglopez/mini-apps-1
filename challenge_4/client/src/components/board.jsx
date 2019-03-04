import Row from './Row.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      redTurn: true,
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
    // click handling to find column...
    var clickedSpace = event.target;
    console.log('clickedSpace is:', clickedSpace);
  }

  render() {
    return (
      <table cellSpacing="0">
        <tbody>
          <Row playTurn={this.playTurn} y={0} />
          <Row playTurn={this.playTurn} y={1} />
          <Row playTurn={this.playTurn} y={2} />
          <Row playTurn={this.playTurn} y={3} />
          <Row playTurn={this.playTurn} y={4} />
          <Row playTurn={this.playTurn} y={5} />
        </tbody>
      </table>
    )
  }
};

export default Board;