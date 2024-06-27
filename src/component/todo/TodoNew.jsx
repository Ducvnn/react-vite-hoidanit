import { useState } from "react";

const TodoNew = (props) => {
  const { addNewTodo } = props;
  

  //useState hook (getter/setter)

  // const valueInput = "eric";

  const [valueInput, setValueInput] = useState("eric")
  
  const handleClick = () => {
    console.log(`>>> check valueInput:`, valueInput)
  }

  const handleOnChange = (name) => {
    setValueInput(name)
  }
  // addNewTodo(`eric`)
  return (
    <div className='todo-new'>
        <input type="text" 
        onChange={(event) => handleOnChange(event.target.value)}
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