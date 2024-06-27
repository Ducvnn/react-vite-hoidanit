import './component/todo/todo.css' ;
import TodoNew from './component/todo/TodoNew' ;
import TodoData from './component/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';


const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "learning react" },
    { id: 2, name: "watching Youtube" }
  ])

  const hoidanit = "eric asenal";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  
  
  return (
    <div className="todo-container">
      <div className="todo-title"> TODO LIST </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData 
        name={hoidanit}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  
  )
}

export default App
