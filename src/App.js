import React, { Component } from 'react';
import Todo from './Todos';
import Addtodo from './Addtodo';


class App extends Component {
  
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'buy bread'}
    ]
  }

  deleteTodo = (id) => {
    //console.log(id);
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id 
    });
  
  this.setState({
    todos
  })
  
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
      
      
    })
    console.log(todos);
  }
  render(){
    
    return (
      <div className="App container">
        <h1 className="center text-blue">Todo's</h1>
        <Todo todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
        <Addtodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
