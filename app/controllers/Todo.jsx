import React, { Component } from 'react'

export default class Todo extends Component {
  render(){
    let {key, id, text} = this.props;
    return (
      <div>
        <h3>{id}</h3>
        <h3>{text}</h3>
      </div>
    )
  }
}
