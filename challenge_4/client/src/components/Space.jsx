class Space extends React.Component {
  render() {
    return (
      <div onClick={this.props.playTurn} className="space" data-x={this.props.x} data-y={this.props.y} />
    )
  }
}

export default Space;