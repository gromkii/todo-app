import React, { Component } from 'react'
import Search from 'Search'
import TodoList from 'TodoList'

export default class TodoApp extends Component {
  render(){
    return (
      <div>  
        <h1>Hello from the TodoComponent.</h1>
        <Search />
        <TodoList />
      </div>
    )
  }
}
