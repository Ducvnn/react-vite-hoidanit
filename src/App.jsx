import './component/todo/todo.css' ;
import TodoNew from './component/todo/TodoNew' ;
import TodoData from './component/todo/TodoData';
import reactLogo from './assets/react.svg';


const App = () => {
  const hoidanit = "eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  
  return (
    <div className="todo-container">
      <div className="todo-title"> TODO LIST </div>
      <TodoNew />
      <TodoData 
        name={hoidanit}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  
  )
}

export default App
