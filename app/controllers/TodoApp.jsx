import React, { Component } from 'react'
import Search from 'Search'
import TodoList from 'TodoList'
import Todo from 'Todo'
import AddTodo from 'AddTodo'

export default class TodoApp extends Component {
  constructor(){
    super();

    this.state = {
     todos: [
        {
          id:1,
          text:'Walk the dog.'
        }, {
          id:2,
          text:'Clean the yard.'
        },{
          id:3,
          text:'Fix this app.'
        }
      ]     
    }
  }
  
  render(){
    let { todos } = this.state;
   
   return (
      <div>  
        <h1>Hello from the TodoComponent.</h1>
        <Search />
        <TodoList todos={todos}/>
        <AddTodo />
      </div>
    )
  }
}
