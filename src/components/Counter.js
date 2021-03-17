import { Component } from 'react';
class Counter extends Component {
  state = { countVal: 0 }
  inc = () => {
    this.setState({ countVal: this.state.countVal + 1 })
  }
  dec = () => {
    this.setState({ countVal: this.state.countVal - 1 })
  }
  render() {
    const { countVal } = this.state
    const { color } = this.props
    return (
      <div style={{ backgroundColor: color }}>
        <p>{color}: {countVal}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}
export default Counter;