class Space extends React.Component {
  render() {
    var style = 'space';
    var position = this.props.board[this.props.y][this.props.x];

    if (position === '') {
      style = 'space';
    } else if (position === 'R') {
      style = 'red';
    } else {
      style = 'black';
    }

    return (
      <div board={this.props.board} onClick={this.props.playTurn} className={style} data-x={this.props.x} data-y={this.props.y} />
    )
  }
}

export default Space;