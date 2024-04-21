
import React, { useState } from 'react';
import "./form.css"
import "./table.css"
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Select, Form, Input, Table, Modal, Space } from 'antd';
import { ToastContainer, toast } from "react-toastify";

const VehicleInfoForm = () => {
    const [formData, setFormData] = useState({});
    const [upnamList, setUpnamList] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleFormSubmit = () => {
        const newUpnamList = [...upnamList, formData];
        setUpnamList(newUpnamList);
        setFormData({});

        toast.success("जानकारी सफलतापूर्वक जोड़ी गई !");
    };

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
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
        {
            title: 'क्र.सं',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'वाहन पंजीकरण संख्या',
            dataIndex: 'वाहन-पंजीकरण-संख्या',
            key: 'वाहन-पंजीकरण-संख्या',
        },
        {
            title: 'रंग',
            dataIndex: 'रंग',
            key: 'रंग',
        },
        {
            title: 'इंजन संख्या',
            dataIndex: 'इंजन-संख्या',
            key: 'इंजन-संख्या',
        },
        {
            title: 'विवरण',
            dataIndex: 'विवरण',
            key: 'विवरण',
        },
        {
            title: 'बीमा कंपनी',
            dataIndex: 'बीमा-कंपनी',
            key: 'बीमा-कंपनी',
        },
        {
            title: 'चेसिस नंबर',
            dataIndex: 'चेसिस-नंबर',
            key: 'चेसिस-नंबर',
        },
        {
            title: 'वाहन का प्रकार',
            dataIndex: 'वाहन-का-प्रकार',
            key: 'वाहन-का-प्रकार',
        },
        {
            title: 'निर्माता',
            dataIndex: 'निर्माता',
            key: 'निर्माता',
        },
        {
            title: 'निर्माण वर्ष',
            dataIndex: 'निर्माण-वर्ष',
            key: 'निर्माण-वर्ष',
        },
        {
            title: 'मॉडल',
            dataIndex: 'मॉडल',
            key: 'मॉडल',
        },
        {
            title: 'हटाएँ',
            key: 'operation',
            render: (text, record, index) => (
                <Button onClick={() => showModal(index)} type="danger" icon={<DeleteOutlined />} />
            ),
        },
    ];

    return (
        <>
            <div style={{ width: "100%" }}>
                <div className='main_container_forms_vehi'>
                    <Form className='vehi_form'
                        onFinish={handleFormSubmit}
                        name="combinedForm"
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="वाहन पंजीकरण संख्या "
                                name="वाहन-पंजीकरण-संख्या"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input vehicle registration number!',
                                    },
                                ]}
                            >
                                <Input onChange={e => handleInputChange('वाहन-पंजीकरण-संख्या', e.target.value)} />
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="रंग"
                                name="रंग"
                                rules={[
                                    {
                                        message: 'Please input color!',
                                    },
                                ]}
                            >
                                <Input onChange={e => handleInputChange('रंग', e.target.value)} />
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="इंजन संख्या"
                                name="इंजन-संख्या"
                                rules={[
                                    {
                                        message: 'Please input engine number!',
                                    },
                                ]}
                            >
                                <Input onChange={e => handleInputChange('इंजन-संख्या', e.target.value)} />
                            </Form.Item>

                            <Form.Item className='item'
                                style={{ marginBottom: "5px" }}
                                label="विवरण"
                                name="विवरण"
                            >
                                <Input onChange={e => handleInputChange('विवरण', e.target.value)} />
                            </Form.Item>
                        </div>
                        <div className='vehiinput'>
                            <Form.Item className='item'
                                style={{ marginBottom: "8px" }}
                                label="बीमा कंपनी"
                                name="बीमा-कंपनी"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select insurance company!',
                                    },
                                ]}
                            >
                                <Select onChange={value => handleInputChange('बीमा-कंपनी', value)} placeholder="Select insurance company">
                                    <Select.Option value="hero">Hero</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item className='item'
                                style={{ marginBottom: "5px" }}
                                label="चेसिस नंबर"
                                name="चेसिस-नंबर"
                            >
                                <Input onChange={e => handleInputChange('चेसिस-नंबर', e.target.value)} />
                            </Form.Item>
                        </div>
                        <div className='vehiinput'>


                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="वाहन का प्रकार"
                                name="वाहन-का-प्रकार"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select vehicle type!',
                                    },
                                ]}
                            >
                                <Select onChange={value => handleInputChange('वाहन-का-प्रकार', value)} placeholder="Select vehicle type">
                                    <Select.Option value="bike">Bike</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item className='item'
                                style={{ marginBottom: "5px" }}
                                label="निर्माता"
                                name="निर्माता"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select manufacturer!',
                                    },
                                ]}
                            >
                                <Select onChange={value => handleInputChange('निर्माता', value)} placeholder="Select manufacturer">
                                    <Select.Option value="bajaj">Bajaj</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className='vehiinput'>
                            <Form.Item className='item'
                                style={{ marginBottom: "5px" }}
                                label="निर्माण वर्ष"
                                name="निर्माण-वर्ष"
                            >
                                <Select className='sele' onChange={value => handleInputChange('निर्माण-वर्ष', value)} placeholder="Select manufacturing year">
                                    <Select.Option value="2010">2010</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item className='item'
                                style={{ marginBottom: "5px" }}
                                label="मॉडल"
                                name="मॉडल"
                            >
                                <Select onChange={value => handleInputChange('मॉडल', value)} placeholder="Select model">
                                    <Select.Option value="super">Super</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div className='add'>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                जोड़ें
                            </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>

                <Table style={{marginTop:"20px"}} columns={columns} dataSource={upnamList.map((item, index) => ({ ...item, index }))} />

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
        </>
    );
}

export default VehicleInfoForm;

