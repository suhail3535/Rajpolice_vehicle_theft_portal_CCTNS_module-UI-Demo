import React, { useState } from 'react';
// import { Button } from '@chakra-ui/react'; // Assuming you're using Chakra UI Button
import "./table.css";
import "./form.css";
import {
  DeleteOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Space, Button, Modal, Drawer } from 'antd';
const Complain = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [upnamList, setUpnamList] = useState([
    {
      name: "SUHAIL KHAN",
      add: "Krishna Nagar Jaipur Rajasthan",
    }
  ]);

  // const handleDelete = (index) => {
  //   const updatedList = [...upnamList];
  //   updatedList.splice(index, 1);
  //   setUpnamList(updatedList);
  // };
  const showModal = (index) => {
    setDeleteIndex(index);
    setConfirmDelete(true);
  };


  const handleDelete = () => {
    const updatedUpnamList = [...upnamList];
    updatedUpnamList.splice(deleteIndex, 1);
    setUpnamList(updatedUpnamList);
    setConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setDeleteIndex(null);
    setConfirmDelete(false);
  };


  return (
    <div style={{ width: "100%", border: "1px solid green" }}>
      <Drawer width={500} title="Edit Deatails" onClose={onClose} open={open}>
        <div className='main_container_forms_drawer'>



        </div>
      </Drawer>
      <div className="detail_maindiv">
        <table>
          <thead style={{fontWeight:"bold"}}>
            <tr>
              <th>क्र.सं</th>
              <th style={{ width: "800px" }}>नाम</th>
              <th>पता</th>
              <th>संशोधित करें/ देखें</th>
              <th>हटाएँ</th>
            </tr>
          </thead>
          <tbody>
            {upnamList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{item.name}</td>
                <td>{item.add}</td>
                <td style={{textAlign:"center"}}>
                  <Space size="middle">
                    <Button onClick={() => showDrawer()} type="primary" icon={<EditOutlined />} />
                  </Space>
                </td>
                <td style={{ textAlign: "center" }}>
                  <Space size="middle">
                    <Button onClick={() => showModal(index)} type="danger" icon={<DeleteOutlined />} />
                  </Space>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          title="Confirmation"
          visible={confirmDelete}
          onOk={handleDelete}
          onCancel={handleCancelDelete}
          okText="हाँ"
          cancelText="नहीं"
        >
          <p>क्या आप सुनिश्चित हैं कि आप हटाना चाहते हैं?</p>
        </Modal>

      </div>
    </div>
  );
}

export default Complain;
