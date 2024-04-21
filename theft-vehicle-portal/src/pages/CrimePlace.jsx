import React, { useState } from 'react';
import "./table.css";
import "./form.css";
import { Button, Space, Checkbox, Modal, Select, Form, Table, DatePicker } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import {
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';
import { Drawer } from 'antd';
import { Input } from 'antd';
const { TextArea } = Input;

const CrimePlace = () => {
    const [upnamList, setUpnamList] = useState([]);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    // const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    const handleSave = (values) => {
        setUpnamList([...upnamList, values]);
        setDrawerVisible(false);
        toast.success("जानकारी सफलतापूर्वक जोड़ी गई !");
    };

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

    const columns = [
        { title: 'क्र.सं', dataIndex: 'index', key: 'index' },
        { title: 'घटना से-तक (दिनांक / समय)', dataIndex: 'dateFrom', key: 'dateFrom' },
        { title: 'घटना से-तक (दिनांक / समय)', dataIndex: 'dateTo', key: 'dateTo' },
        { title: 'पुलिस स्टेशन से दिशा', dataIndex: 'direction', key: 'direction' },
        { title: 'घटना से-जिला', dataIndex: 'district', key: 'district' },
        { title: 'घटना से-पुलिस स्टेशन', dataIndex: 'policeStation', key: 'policeStation' },
        { title: 'घटना–स्थल', dataIndex: 'placeName', key: 'placeName' },
        { title: 'गली/सड़क का नाम', dataIndex: 'streetName', key: 'streetName' },
        { title: 'कॉलोनी / इलाक़ा /क्षेत्र', dataIndex: 'areaName', key: 'areaName' },
        { title: 'ग्राम / नगर / शहर', dataIndex: 'cityName', key: 'cityName' },
        { title: 'तहसील / ब्लॉक / मंडल', dataIndex: 'tehsilName', key: 'tehsilName' },
        { title: 'पिन कोड', dataIndex: 'pinCode', key: 'pinCode' },
        { title: 'क्या आपने पुलिस नियंत्रण कक्ष को सूचित किया था या नहीं', dataIndex: 'policeInformed', key: 'policeInformed' },
        { title: 'विवरण', dataIndex: 'description', key: 'description' },
        {
            title: 'एक्शन',
            key: 'action',
            render: (text, record, index) => (
                <Space size="middle">
                    <Button type="primary" icon={<EditOutlined />} onClick={showDrawer}></Button>
                    <Button type="danger" icon={<DeleteOutlined />} onClick={() => showModal(index)}></Button>
                </Space>
            ),
        },
    ];

    return (
        <div style={{ width: "100%" }}>
            <Button style={{ marginBottom: "20px" }} type="primary" onClick={showDrawer}>नया जोड़ें</Button>
            <Drawer
                width={800}
                title="घटना सूचना"
                onClose={onCloseDrawer}
                visible={drawerVisible}
            >
                <div className='main_container_forms_drawer'>
                    <div className='main_container_forms_crime'>
                        <Form onFinish={handleSave} style={{ padding: "10px" }} className='form_location' autoComplete="off" >
                            <div className='ghatna'>
                                <p >घटना सूचना</p>
                                <hr style={{ marginBottom: "10px" }} />
                                <div className='crime_info' >
                                    <Form.Item
                                        name="dateFrom"
                                        label="से दिनांक / समय*"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select date!',
                                            },
                                        ]}
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item
                                        name="dateTo"
                                        label="तक दिनांक / समय*"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select date!',
                                            },
                                        ]}
                                    >
                                        <DatePicker />
                                    </Form.Item>




                                </div>
                                <Form.Item
                                    name="policeInformed"
                                    label="क्या आपने पुलिस नियंत्रण कक्ष को सूचित किया था या नहीं"
                                    rules={[
                                        {
                                            // required: true,
                                        },
                                    ]}
                                >
                                    <Checkbox.Group>
                                        <Checkbox value="हां">हां</Checkbox>
                                        <Checkbox value="नहीं">नहीं</Checkbox>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label="विवरण"
                                >
                                    <TextArea rows={4} placeholder="वर्ण सीमा :3000" maxLength={3000} />
                                </Form.Item>

                            </div>
                            <div className='ghatna_place'>

                                <p >घटना–स्थल</p>
                                <hr />
                                <div className='crime_info2' >
                                    <Form.Item
                                        name="जगह का नाम"
                                        label="जगह का नाम"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="जगह का नाम" />

                                    </Form.Item>
                                    <Form.Item
                                        name="गली/सड़क का नाम"
                                        label="गली/सड़क का नाम"
                                        rules={[
                                            {
                                                // required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="गली/सड़क का नाम" />
                                    </Form.Item>
                                </div>
                                <div className='crime_info2' >
                                    <Form.Item
                                        name="कॉलोनी / इलाक़ा /क्षेत्र"
                                        label="कॉलोनी / इलाक़ा /क्षेत्र"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="कॉलोनी / इलाक़ा /क्षेत्र" />

                                    </Form.Item>
                                    <Form.Item
                                        name="ग्राम / नगर / शहर "
                                        label="ग्राम / नगर / शहर "
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="ग्राम / नगर / शहर " />
                                    </Form.Item>
                                </div>
                                <div className='crime_info2' >
                                    <Form.Item
                                        name="तहसील / ब्लॉक / मंडल"
                                        label="तहसील / ब्लॉक / मंडल"
                                        rules={[
                                            {
                                                // required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="तहसील / ब्लॉक / मंडल" />

                                    </Form.Item>
                                    <Form.Item
                                        name="पिन कोड"
                                        label="पिन कोड"
                                        rules={[
                                            {
                                                // required: true,
                                            },
                                        ]}
                                    >
                                        <Input placeholder="पिन कोड" />
                                    </Form.Item>
                                </div>



                            </div>

                            <div className='ghatna'>
                                <p>घटना–थाना</p>
                                <hr />
                                <div className='crime_info3'>
                                    <Form.Item
                                        label="राज्य"
                                        name="state"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select state!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="राजस्थान"
                                            allowClear
                                        >
                                            <option value="राजस्थान">राजस्थान</option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="जिला"
                                        name="district"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select District!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="----चयन----"
                                            allowClear
                                        >
                                            <option value="डीग">डीग</option>
                                            <option value="डीडवाना-कुचामन">डीडवाना-कुचामन</option>
                                            <option value="डूंगरपूर">डूंगरपूर</option>
                                            <option value="दूदू">दूदू</option>
                                            <option value="दौसा">दौसा</option>
                                            <option value="धौलपुर">धौलपुर</option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        label="पुलिस स्टेशन"
                                        name="policeStation"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select police station',
                                            },
                                        ]}
                                    >
                                        <Select
                                            placeholder="----चयन----"
                                            allowClear
                                        >
                                            <option value="भरतपुर">भरतपुर</option>
                                            <option value="भिवाड़ी">भिवाड़ी</option>
                                            <option value="भीलवाड़ा">भीलवाड़ा</option>
                                            <option value="शासकीय रेलवे पुलिस जोधपुर">शासकीय रेलवे पुलिस जोधपुर</option>
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className='mark_loaction'>
                                
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_I986zAYG21Ht5nYhbBKDYmj9ihoPTmVmXzDjXjO66A&s" alt="" />
                            </div>
                            <div className='control_btn_div'>
                                {<Form.Item>
                                    <Space>
                                        <Button type="primary" htmlType="submit">सहेजें</Button>
                                        <Button type="primary">रिक्त करें</Button>
                                        <Button onClick={onCloseDrawer} type="primary">बंद करें</Button>
                                    </Space>
                                </Form.Item>}
                            </div>
                        </Form>


                    </div>



                </div>
            </Drawer>
            <div className="detail_maindiv">
                <Table dataSource={upnamList.map((item, index) => ({ ...item, index: index + 1 }))} columns={columns} rowKey="index" />
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
