import { Input } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";


const UserForm = () => {
  
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  console.log(`>>>>check form:`,fullName, email, phoneNumber, password)

  const handleClickBtn = () => {
    console.log(`>>>>check form:`, {fullName, email, password, phoneNumber})
  }
  
  return (
    <div className="user-form" style={{ margin: "20px 0"}}>
    <div style={{ display: "flex", gap: "18px", flexDirection: "column" }}>
      
      <div>
        <span>FullName</span>
        <Input
          value={fullName}
          onChange={(event) => {setFullname(event.target.value)}}
          />
      </div>

      <div>
        <span>Email</span>
        <Input 
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
        />
      </div>

      <div>
        <span>Password</span>
        <Input.Password
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
        />
      </div>

      <div>
        <span>Phone number</span>
        <Input
          value={phoneNumber}
          onChange={(event) => {setPhoneNumber(event.target.value)}}
        />
      </div>
      
      <div>
         <Button
         onClick={handleClickBtn}  //truyen tham so dung onclick={() =>handleclick()}
         type="primary"> Creat User </Button>
      </div>
    
    </div>
  </div>
    
  )
}

export default UserForm;