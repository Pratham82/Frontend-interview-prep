import React from 'react'

export default class Comp4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount(): void {
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1 })
    console.log(this.state.count)
  }

  render() {
    console.log({ count: this.state.count })
    return (
      <div>
        <h1>Comp 4</h1>
        <h3>Count: {this.state.count}</h3>
      </div>
    )
  }
}
