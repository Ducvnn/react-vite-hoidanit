import './component/todo/todo.css' ;
import TodoNew from './component/todo/TodoNew' ;
import TodoData from './component/todo/TodoData';
import reactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './component/learn/layout/header';
import Footer from './component/learn/layout/footer';
import { Outlet } from 'react-router-dom';



const App = () => {

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
    <>
      <Header />
      <Outlet />
      
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
      
      <Footer />
    </>
  )
}

export default App