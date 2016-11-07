import React, { Component } from 'react'

export default class Todo extends Component {
  render(){
    let {key, id, text} = this.props;
    return (
      <div>
       <h4>{id} - {text}</h4> 
      </div>
    )
  }
}
