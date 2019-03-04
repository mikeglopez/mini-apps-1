import Space from './Space.jsx';

class Row extends React.Component {
  render() {
    return (
      <tr>
        <td><Space playTurn={this.props.playTurn} x={0} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={1} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={2} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={3} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={4} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={5} y={this.props.y} /></td>
        <td><Space playTurn={this.props.playTurn} x={6} y={this.props.y} /></td>
      </tr>
    );
  }
}

export default Row;