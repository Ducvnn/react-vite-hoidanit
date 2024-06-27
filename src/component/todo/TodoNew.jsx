
const TodoNew = (props) => {
  console.log(`>>> check props`, props)
  const { addNewTodo } = props;

  // addNewTodo ()
  
  const handleClick = () => {
    alert(`click me`)
  }

  // const handleOnChange = (event) => {
  //   console.log(`>>>>handleOnChange`, event.target.value)
  // }

  // return (
  //   <div className='todo-new'>
  //       <input type="text" 
  //       onChange={handleOnChange}
  //       />
  //       <button
  //         style={{ cursor: "pointer" }}
  //         // onclick={() => handleClick()}
  //         onClick={handleClick}
  //       >Add</button>
  //     </div>
  // ) vd 1

  const handleOnChange = (name) => {
    console.log(`>>>>handleOnChange`, name)
  }

  return (
    <div className='todo-new'>
        <input type="text" 
        onChange={ (event) => handleOnChange(event.target.value)}
        />
        <button
          style={{ cursor: "pointer" }}
          // onclick={() => handleClick()}
          onClick={handleClick}
        >Add</button>
      </div>
  )

}

export default TodoNew;