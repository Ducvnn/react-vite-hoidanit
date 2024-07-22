import { Drawer } from "antd";

const ViewUserDetail = (props) => {
  const {
    dataDetail,
    setDataDetail,
    isDetailOpen,
    setIsDetailOpen,
  } = props;

  return (
    
      <Drawer title="Chi tiết User" 
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