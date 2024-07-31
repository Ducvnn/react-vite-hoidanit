import { Drawer, Button, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarApi } from "../../services/api.service";


const ViewUserDetail = (props) => {
  const {
    dataDetail,
    setDataDetail,
    isDetailOpen,
    setIsDetailOpen,
    loadUser
  } = props;

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
  }

      // I've kept this example simple by using the first image instead of multiple
      const file = event.target.files[0];
      if(file){
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file));
      }
  }

  const handleUpdateUserAvatar = async() => {
    //step 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if(resUpload.data){
      //success
      const newAvatar = resUpload.data.fileUploaded;
      //step 2: update Use
      const resUpdateAvatar = await updateUserAvatarApi(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
      
        if(resUpdateAvatar.data){
          setIsDetailOpen(false);
          setSelectedFile(null);
          setPreview(null);
          await loadUser();
        
          notification.success({
            message: "Update User Avatar",
            description: "Cập nhật avatar thành công"
          })
        }
        else {
          notification.error({
            message: "error update Avatar",
            description: JSON.stringify(resUpdateAvatar.message)
        })
        }

      console.log(`>>>>check newAvatar=`, newAvatar)
    }
    else{
      //failed
      notification.error({
        message: "error upload file",
        description: JSON.stringify(resUpload.message)
      })
      
    }
    console.log(`>>>check resUpload=`, resUpload)
    

  }
  
  return (
    
      <Drawer
        width={"35vw"}
        title="Chi tiết User" 
        onClose={() => {
          setDataDetail(null);
          setIsDetailOpen(false);
        }}
        open={isDetailOpen}
      >
        { dataDetail ?
          <>
            <p>Id: {dataDetail._id} </p>
            <br/>
            <p>Fullname: {dataDetail.fullName} </p>
            <br/>
            <p>Email: {dataDetail.email} </p>
            <br/>
            <p>Phone Number: {dataDetail.phone} </p>
            <br/>
            <p>Avatar: </p>
            <br/>
            <div style={{
              marginTop: "10PX",
              height: "110px",
              width: "110px",
              
            }}>
              <img style={{height: "100%", width: "100%", objectFit: "contain"}}
                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
            </div>

            <div>
              <label htmlFor="btnUpload" style={{
                display: "block",
                width: "fit-content",
                marginTop: "15px",
                padding: "5px 10px",
                background: "orange",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              
              >Upload Avatar</label>
                <input type="file" hidden id='btnUpload'
                // onChange={handleOnChangeFile}
                onChange={(event) => handleOnChangeFile(event)}
              />
            </div>
          {preview &&           
            <> 
              <div style={{
                marginTop: "10PX",
                marginBottom: "15px",
                height: "110px",
                width: "110px",
              
              }}>
                <img style={{height: "100%", width: "100%", objectFit: "contain"}}
                  src={preview}/>
              </div>
              <Button type="primary"
              onClick={() => handleUpdateUserAvatar()}
              >Save</Button>
            </>
          }
          </>
        
            :
            <>
            <p>Không có dữ liệu</p>
            </>
        }
        


      </Drawer>
    

  );
}

export default ViewUserDetail