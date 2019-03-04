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
  }
  render() {
    return (
      <table cellSpacing="0">
        <tbody>
          <tr>
            <td><div className="space" data-x="0" data-y="0" /></td>
            <td><div className="space" data-x="1" data-y="0" /></td>
            <td><div className="space" data-x="2" data-y="0" /></td>
            <td><div className="space" data-x="3" data-y="0" /></td>
            <td><div className="space" data-x="4" data-y="0" /></td>
            <td><div className="space" data-x="5" data-y="0" /></td>
            <td><div className="space" data-x="6" data-y="0" /></td>
          </tr>
          <tr>
            <td><div className="space" data-x="0" data-y="1" /></td>
            <td><div className="space" data-x="1" data-y="1" /></td>
            <td><div className="space" data-x="2" data-y="1" /></td>
            <td><div className="space" data-x="3" data-y="1" /></td>
            <td><div className="space" data-x="4" data-y="1" /></td>
            <td><div className="space" data-x="5" data-y="1" /></td>
            <td><div className="space" data-x="6" data-y="1" /></td>
          </tr>
          <tr>
            <td><div className="space" data-x="0" data-y="2" /></td>
            <td><div className="space" data-x="1" data-y="2" /></td>
            <td><div className="space" data-x="2" data-y="2" /></td>
            <td><div className="space" data-x="3" data-y="2" /></td>
            <td><div className="space" data-x="4" data-y="2" /></td>
            <td><div className="space" data-x="5" data-y="2" /></td>
            <td><div className="space" data-x="6" data-y="2" /></td>
          </tr>
          <tr>
            <td><div className="space" data-x="0" data-y="3" /></td>
            <td><div className="space" data-x="1" data-y="3" /></td>
            <td><div className="space" data-x="2" data-y="3" /></td>
            <td><div className="space" data-x="3" data-y="3" /></td>
            <td><div className="space" data-x="4" data-y="3" /></td>
            <td><div className="space" data-x="5" data-y="3" /></td>
            <td><div className="space" data-x="6" data-y="3" /></td>
          </tr>
          <tr>
            <td><div className="space" data-x="0" data-y="4" /></td>
            <td><div className="space" data-x="1" data-y="4" /></td>
            <td><div className="space" data-x="2" data-y="4" /></td>
            <td><div className="space" data-x="3" data-y="4" /></td>
            <td><div className="space" data-x="4" data-y="4" /></td>
            <td><div className="space" data-x="5" data-y="4" /></td>
            <td><div className="space" data-x="6" data-y="4" /></td>
          </tr>
          <tr>
            <td><div className="space" data-x="0" data-y="5" /></td>
            <td><div className="space" data-x="1" data-y="5" /></td>
            <td><div className="space" data-x="2" data-y="5" /></td>
            <td><div className="space" data-x="3" data-y="5" /></td>
            <td><div className="space" data-x="4" data-y="5" /></td>
            <td><div className="space" data-x="5" data-y="5" /></td>
            <td><div className="space" data-x="6" data-y="5" /></td>
          </tr>
        </tbody>
      </table>
    )
  }
};

export default Board;