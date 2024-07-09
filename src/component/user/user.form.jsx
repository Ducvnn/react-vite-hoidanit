import { Input, notification } from "antd";
import { Button, Flex } from 'antd';
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
  
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  
  const handleClickBtn = async () => {
   
    const res = await createUserAPI(fullName, email, password, phone);
    
    
    if(res.data) {
      notification.success({
        message: "create user",
        description: "Tạo user thành công",
      })
    }
    else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message)
      })
    }
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
        <span>Phone</span>
        <Input
          value={phone}
          onChange={(event) => {setPhone(event.target.value)}}
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