import React,{useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form';
import Todolist from './components/Todolist';
function App() {
  const [inputText, setInputText]= useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filterefTodos,setFilteredTodos]=useState([]);
  return (
    <div className="App">
      <header>
        <h1>TODO TASK</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <Todolist setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
