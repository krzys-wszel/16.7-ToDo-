import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import List from '../components/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'wstać'
      }, 
      {
        id: 2,
        text: 'żyć'
      }, 
      {
        id: 3,
        text: 'spać'
      }]
    };
  }
  addTodo(val){
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title='Do zrobienia' length={this.state.data.length} />
        <List list={this.state.data} rem={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default App;

