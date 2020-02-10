import React from 'react';
import ReactDom from 'react-dom';
import './components/TodoComponents/Todo.css';

import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';


const thingsToDo = [
  {
    name: 'Walk the dog',
    id: 123,
    completed: false
  },
  {
    name: 'Do Homework',
    id: 124,
    completed: false
  },
  {
    name: 'Get Groceries',
    id: 1235,
    completed: false
  },
  {
    name: 'Clean Room',
    id: 1246,
    completed: false
  }


];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
     todoList : thingsToDo, 
    }
  }
  toggleItem = (clickedId) => {
    const newToDoList = this.state.todoList.map((item) => {
      if (item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newToDoList
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addNewItem={this.addNewItem}/> 
        </div>
        <ToDoList thingsToDo={this.state.todoList} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
