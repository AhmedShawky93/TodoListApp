import React, { Component } from 'react';
import TodoItems from './TodoItem/TodoItems';
import AddItems from './AddItem/AddItems';
import './App.css';

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Ahmed', age: 28 },
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(ww => {
      return ww.id !== id;
    })
    this.setState({ items })

    // Another way ==>
    //let items = this.state.items;
    // let i = items.findIndex(ww => ww.id === id)
    // items.splice(i,1);
    // this.setState({items:items})
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });

  }
  render() {
    return (
      <div className='App Container'>
        <h1 className="text-center">Todo List App</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItems addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
