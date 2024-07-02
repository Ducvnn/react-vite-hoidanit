import { useState } from "react";

const TodoNew = (props) => {
  //useState hook (getter/setter)
  // const valueInput = "eric";
  
  const { addNewTodo } = props;
  const [valueInput, setValueInput] = useState("eric")
  
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  }

  const handleOnChange = (name) => {
    setValueInput(name)
  }
  // addNewTodo(`eric`)
  return (
    <div className='todo-new'>
        <input type="text" 
          onChange={(event) => handleOnChange(event.target.value)}
          value= {valueInput}
        />
        
        <button
          style={{ cursor: "pointer" }}
          // onclick={() => handleClick()}
          onClick={handleClick}
        >Add</button>
        
        <div>
          My text input is = {valueInput}
        </div>
        
      </div>
  )

}

export default TodoNew;