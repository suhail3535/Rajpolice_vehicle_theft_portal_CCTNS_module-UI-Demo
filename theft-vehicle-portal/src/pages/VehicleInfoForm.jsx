import React, { useState } from 'react';
import "./form.css"
import "./table.css"
import {
    DeleteOutlined
} from '@ant-design/icons';
import { useToast, Box } from '@chakra-ui/react'
import { Button, Space, Checkbox, Alert, Modal, Select, Form, Input, Table } from 'antd';

const VehicleInfoForm = () => {
    const toast = useToast();
    const [formData1, setFormData1] = useState({});
    const [formData2, setFormData2] = useState({});
    const [upnamList, setUpnamList] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleFormSubmit = () => {
        const combinedFormData = { ...formData1, ...formData2 };
        const newUpnamList = [...upnamList, combinedFormData];
        setUpnamList(newUpnamList);
        setFormData1({});
        setFormData2({});
        toast({
            title: 'जानकारी सफलतापूर्वक जोड़ी गई!',
            description: "",
            status: 'success',
            duration: 3000,
            position: "top-center",
            isClosable: true,
        });
    };

    const handleInputChange1 = (name, value) => {
        setFormData1({
            ...formData1,
            [name]: value,
        });
    };

    const handleInputChange2 = (name, value) => {
        setFormData2({
            ...formData2,
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
                <Space size="middle">
                    <Button onClick={() => showModal(index)} type="danger" icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];



    return (
        <>

            <div style={{ width: "100%" }}>
                <div className='main_container_forms'>
                    <Form

                        onFinish={handleFormSubmit}
                        name="basic"
                        // layout="inline"
                        labelCol={{
                            flex: "0 0 200px", // Set a fixed width for label column
                        }}
                        wrapperCol={{
                            flex: "1", // Allow wrapper column to take up remaining space
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >



                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="वाहन पंजीकरण संख्या "
                            name="वाहन-पंजीकरण-संख्या"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange1('वाहन-पंजीकरण-संख्या', e.target.value)} />

                        </Form.Item>
                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="रंग"
                            name="रंग"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange1('रंग', e.target.value)} />

                        </Form.Item>
                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="इंजन संख्या"
                            name="इंजन-संख्या"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange1('इंजन-संख्या', e.target.value)} />

                        </Form.Item>
                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="विवरण"
                            name="विवरण"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange1('विवरण', e.target.value)} />

                        </Form.Item>
                        <Form.Item

                            style={{ marginBottom: "8px", }}
                            label="बीमा कंपनी"
                            name="बीमा-कंपनी"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select

                                placeholder="----चयन----"
                                onChange={value => handleInputChange1('बीमा-कंपनी', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="hero">Hero</option>

                            </Select>
                        </Form.Item>


                    </Form>
                    <Form

                        onFinish={handleFormSubmit}
                        name="basic"
                        // layout="inline"
                        labelCol={{
                            flex: "0 0 200px", // Set a fixed width for label column
                        }}
                        wrapperCol={{
                            flex: "1", // Allow wrapper column to take up remaining space
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >





                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="चेसिस नंबर"
                            name="चेसिस-नंबर"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange2('चेसिस-नंबर', e.target.value)} />

                        </Form.Item>

                        <Form.Item

                            style={{ marginBottom: "8px", }}
                            label="वाहन का प्रकार"
                            name="वाहन-का-प्रकार"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select

                                placeholder="----चयन----"
                                onChange={value => handleInputChange2('वाहन-का-प्रकार', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="bike">Bike</option>
                            </Select>
                        </Form.Item>
                        <Form.Item

                            style={{ marginBottom: "8px", }}
                            label="निर्माता"
                            name="निर्माता"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select

                                placeholder="----चयन----"
                                onChange={value => handleInputChange2('निर्माता', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="bajaj">Bajaj</option>
                            </Select>
                        </Form.Item>
                        <Form.Item

                            style={{ marginBottom: "8px", }}
                            label="निर्माण वर्ष"
                            name="निर्माण-वर्ष"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select

                                placeholder="----चयन----"
                                onChange={value => handleInputChange2('निर्माण-वर्ष', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="2010"> 2010</option>
                            </Select>
                        </Form.Item>
                        <Form.Item

                            style={{ marginBottom: "8px", }}
                            label="मॉडल"
                            name="मॉडल"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select

                                placeholder="----चयन----"
                                onChange={value => handleInputChange2('मॉडल', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="super">Super</option>
                            </Select>
                        </Form.Item>

                        <Form.Item

                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button style={{marginTop:"30px"}} type="primary" htmlType="submit">
                                जोड़ें
                            </Button>
                        </Form.Item>
                    </Form>


                </div>

                <Table
                    
                    columns={columns} dataSource={upnamList.map((item, index) => ({ ...item, index }))} />
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
    )
}

export default VehicleInfoForm;
