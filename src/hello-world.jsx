import React from "react"

export default class Main extends React.Component {
  render () {
    return (
      <h1 className="greeting">
        Hello, {this.props.name}!
      </h1>
    )
  }
}