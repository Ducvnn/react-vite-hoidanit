import { Input } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";
import axios from "axios";


const UserForm = () => {
  
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  console.log(`>>>>check form:`,fullName, email, phoneNumber, password)

  const handleClickBtn = () => {
    
    const URL_BACKEND= "http://localhost:8080/api/v1/user";
   
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      phone: phoneNumber,
    }
    axios.post(URL_BACKEND, data)
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
         onClick={handleClickBtn}  
         type="primary"> Creat User </Button>
      </div>
    
    </div>
  </div>
    
  )
}

export default UserForm;