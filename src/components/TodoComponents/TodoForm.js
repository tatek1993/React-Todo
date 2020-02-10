import React from 'react';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }
    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        })
        console.log(this.newItem);
        return this.setState({})
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    };

    render() {
       console.log('This form is rendering') 
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="newItem"
                value={this.state.name}
                onChange={this.handleChanges}
                />
                <button>Add</button>    
            </form>
        );
    }
}