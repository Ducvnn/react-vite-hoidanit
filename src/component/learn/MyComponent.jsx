
// suc manh cua dau {{}} == dau ben ngoai tuong trung cho dung js trong html. dau ben trong la opject

import './style.css';

const MyComponent = () => {
  // const hoidanit = `eric`; //string (hay dung)
  // const hoidanit = 25; //number (hay dung)
  // const hoidanit = true; //bolean (ko y nghia)
  // const hoidanit = undefined; //(ko y nghia)
  // const hoidanit = null; //(ko y nghia)
  const hoidanit = [1, 2, 3]
  // const hoidanit = {
  //   name: `hoidanit`,
  //   age: `25`
  // }

  return (
    <>
      <div> {JSON.stringify(hoidanit)} & hoi dan it update </div>
      <div>{console.log(`ERIC`)}</div> 
      <div className="child"
          style={
            { boderRadius: "10px" }
          }
      >child</div>
      
    </>
    
  );
}
export default MyComponent;