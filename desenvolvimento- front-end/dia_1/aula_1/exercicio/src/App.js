import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value} >{value}</li>
  );
}

const tarefas = ['Acordar', 'Escovar os dentes', 'Café da manhã', 'Estudar'];

class App extends React.Component {
  render() {
    return (
      <ol>{ tarefas.map(tarefa => Task(tarefa)) }</ol>
    )
  }
}

export default App;
