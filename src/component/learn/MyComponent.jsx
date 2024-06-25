// arrow function === bien name = () => {}
// component === html + css + js ( Dat ten component quy tac viet hoa chu cai dau )

// JSX: chi dung 1 parent
// fragment === <> </> ( khong render nhieu html )



import './style.css';

const MyComponent = () => {
  return (
    <>
      <div> eric & hoi dan it update </div>
      <div className="child"
          style={
            { boderRadius: "10px" }
          }
      >child</div>
      
    </>
    
  );
}
export default MyComponent;