import React from 'react';

import Item from './Todo';

const ToDoList = props => {
    console.log('This is props', props);
    // const sortedList = props.thingsToDo.sort((a, b) => a.completed - b.completed);
    return (
        <div className="todo-list">
            {props.thingsToDo.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className="clear-button" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
export default ToDoList;