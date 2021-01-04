import React, { Component } from 'react'

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="col-1 btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="col-1 btn btn-secondary btn-sm m-2"
          disabled={this.isButtonDisabled()}
        >
          -
        </button>
        <button
          className="col-1 btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          x
        </button>
      </div>
    )
  }

  getBadgeClasses() {
    let classes = 'col-1 badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  isButtonDisabled() {
    return this.props.counter.value === 0
  }

  formatValue() {
    const { value } = this.props.counter
    return value === 0 ? 'Zero' : value
  }
}

export default Counter
