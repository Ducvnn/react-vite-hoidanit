import './todo.css' ;
import TodoNew from './TodoNew' ;
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp =  () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "learning react" },
    // { id: 2, name: "watching Youtube" }
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])

  }

  const randomIntFromInterval =(min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    console.log(`>>> newTodo:`, newTodo)
    setTodoList(newTodo)
  }

  return (
    
    <div className="todo-container">
    <div className="todo-title"> TODO LIST </div>
    
    <TodoNew
      addNewTodo={addNewTodo}
    />
  
    {todoList.length > 0 ?
      <TodoData 
      todoList={todoList}
      deleteTodo={deleteTodo}
      />
    :
      <div className='todo-image'>
      <img src={reactLogo} className='logo' />
      </div>
    }
  </div>
  
  )
}

export default TodoApp;