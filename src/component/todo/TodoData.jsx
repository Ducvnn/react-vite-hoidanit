
//{key:value}
//props la mot bien object {}
// vd {
//   name: "eric",
//   age: 25,
//   data: {}
// }

const TodoData = (props) => {
  
// const name = props.name;
// const age = props.age;
// const data = props.data;

  const {name, age, data} = props; // cu phap destructuring object
  console.log(`>>>check props`, props)
  
  return (
    <div className='todo-data'>
      
      <dive> My name is {props.name} </dive>
      <div> Learning React </div>
      <div> Watching Youtoube </div>
      
      <div>
        {JSON.stringify(props.todoList)}
      </div>

      </div>
  )
}

export default TodoData;