import React, { useState } from 'react';
// import { Button } from '@chakra-ui/react'; // Assuming you're using Chakra UI Button
import "./table.css";
import "./form.css";
import { Button, Space, Checkbox, Alert, Modal, Select, Form, Table, DatePicker } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { Drawer } from 'antd';
import { FormControl } from '@chakra-ui/react';
// import TextArea from 'antd/es/input/TextArea';
import { Input } from 'antd';
const { TextArea } = Input;
const CrimePlace
    = () => {
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
            <div style={{ width: "100%" }}>
                <Drawer width={700} title="Edit Deatails" onClose={onClose} open={open}>
                    <div className='main_container_forms_drawer'>
                        <div className='main_container_forms_crime'>
                            <Form style={{ padding: "10px" }} className='form_location' autoComplete="off" >
                                <div className='ghatna'>
                                    <p >घटना सूचना</p>
                                    <hr />
                                    <div className='crime_info' >
                                        <Form.Item
                                            name="
से दिनांक / समय*"
                                            label="
से दिनांक / समय*"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <DatePicker />

                                        </Form.Item>
                                        <Form.Item
                                            name="तक दिनांक / समय*"
                                            label="तक दिनांक / समय*"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <DatePicker/>
                                        </Form.Item>




                                    </div>
                                    <Form.Item
                                        name="क्या आपने पुलिस नियंत्रण कक्ष को सूचित किया था या नहीं"
                                        label="क्या आपने पुलिस नियंत्रण कक्ष को सूचित किया था या नहीं"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Checkbox>हां</Checkbox>
                                        <Checkbox style={{ marginLeft: "10px" }}>नहीं</Checkbox>
                                    </Form.Item>
                                    <TextArea rows={4} placeholder="वर्ण सीमा :3000
" maxLength={3000} />
                                    <Form.Item>
                                        <Space>
                                            {/* <SubmitButton>Submit</SubmitButton> */}
                                            <Button htmlType="reset">Reset</Button>
                                            <Button htmlType="reset">Reset</Button>
                                        </Space>
                                    </Form.Item>
                                </div>


                            </Form>


                        </div>



                    </div>
                </Drawer>
                <div className="detail_maindiv">
                    <table>
                        <thead style={{ fontWeight: "bold" }}>
                            <tr>
                                <th>क्र.सं</th>
                                <th>घटना से-तक (दिनांक / समय)</th>
                                <th>	पुलिस स्टेशन से दिशा</th>
                                <th>	पुलिस स्टेशन से दूरी (किमी में )</th>
                                <th>क्षेत्र</th>
                                <th>	शहर</th>
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
                                    <td style={{ textAlign: "center" }}>
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
                    <div className="newadd" >

                        <button onClick={showDrawer} >नया जोड़ें</button>
                    </div>
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

export default CrimePlace
    ;
