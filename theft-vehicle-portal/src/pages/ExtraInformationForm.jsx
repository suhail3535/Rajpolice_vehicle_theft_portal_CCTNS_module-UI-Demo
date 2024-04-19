
import  { useState } from 'react';
import "./form.css"
import "./table.css"
import {
    DeleteOutlined
} from '@ant-design/icons';
import { ToastContainer, toast } from "react-toastify";

import { useToast, Box } from '@chakra-ui/react'
import { Button, Space, Checkbox, Alert, Modal, Select, Form, Input, Table } from 'antd';
const ExtraInfoRorm = () => {
    // const toast = useToast()
    const [formData, setFormData] = useState({});
    const [upnamList, setUpnamList] = useState([]);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleFormSubmit = () => {
        const newUpnamList = [...upnamList, formData];
        setUpnamList(newUpnamList);
        setFormData("");
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
            title: 'पहचान का प्रकार',
            dataIndex: 'पहचान का प्रकार',
            key: 'पहचान का प्रकार',
        },
        {
            title: 'आईडी कार्ड संख्‍या',
            dataIndex: 'आईडी कार्ड संख्या',
            key: 'आईडी कार्ड संख्या',
        },
        {
            title: 'आईडी जारी करने का स्थान',
            dataIndex: 'आईडी जारी करने का स्थान',
            key: 'आईडी जारी करने का स्थान',
        },
        {
            title: 'आईडी जारी करने की तिथि(दिनांक/माह/वर्ष)',
            dataIndex: 'आईडी जारी करने की तिथि(दिनांक/माह/वर्ष)',
            key: 'आईडी जारी करने की तिथि(दिनांक/माह/वर्ष)',
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
                            label="व्यवसाय"
                            name="व्यवसाय"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your business!',
                                },
                            ]}
                        >
                            <Select
                                placeholder="----चयन----"
                                onChange={value => handleInputChange('व्यवसाय', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="1">अकादमी सदस्य</option><option value="81">अचल संपत्ति व्यापारी</option><option value="137">अध्यक्ष</option><option value="93">अध्यापक</option><option value="140">अन्य</option><option value="72">अर्ध चिकित्सा स्टाफ</option><option value="162">आकस्मिक कार्यकर्ता</option><option value="54">आयातक</option><option value="38">इंजीनियर / अभियंता</option><option value="149">उधमी</option><option value="55">उधोगपति</option><option value="3">एजेंट / अभिकर्ता</option><option value="20">कंपनी कार्यपालक</option><option value="21">कंप्यूटर व्यवसायी</option><option value="25">कर्मी</option><option value="8">कलाकार</option><option value="7">कारीगर</option><option value="14">कारोबार</option><option value="41">किसान</option><option value="132">कुक</option><option value="77">कुली</option><option value="23">कूरियर</option><option value="15">केबल आपरेटर</option><option value="18">क्लीनर ट्रक</option><option value="17">क्लीनर बस</option><option value="69">खान कर्मचारी</option><option value="71">खानाबदोश</option><option value="89">खिलाड़ी</option><option value="53">गृह स्वामिनी</option><option value="129">गैर शासकीय कर्मचारी</option><option value="102">घड़ीसाज</option><option value="29">घरेलू नौकर</option><option value="139">घरेलू सहायक</option><option value="112">चपरासी</option><option value="116">चालक</option><option value="110">चालक - आटोरिक्शा</option><option value="31">चालक &ndash; कार</option><option value="32">चालक &ndash; कार्ट</option><option value="33">चालक &ndash; टैक्सी</option><option value="34">चालक &ndash; ट्रक</option><option value="30">चालक &ndash; बस</option><option value="148">चिकित्सक</option><option value="66">चिकित्सा व्यवसायी</option><option value="36">चुने हुए प्रतिनिधि</option><option value="90">छात्र</option><option value="92">जमादार</option><option value="103">जुलाहा</option><option value="56">जेल स्टाफ</option><option value="142">ज्वैलर्स</option><option value="123">ट्रैक्टर चालक</option><option value="22">ठेकेदार</option><option value="78">डाक कर्मी</option><option value="94">तकनीशियन/यंत्रविद्</option><option value="105">दर्जी</option><option value="12">दलाल</option><option value="86">दुकान का कर्मचारी</option><option value="87">दुकानदार</option><option value="68">दूधवाला</option><option value="95">दूरसंचार कर्मी</option><option value="60">धोबी</option><option value="154">नर्स (परिचारिका)</option><option value="74">नलसाज</option><option value="121">नाई</option><option value="106">निजी कार्यालय में कार्यरत</option><option value="39">निर्यातक</option><option value="141">नौकरीपेशा</option><option value="57">न्यायिक अधिकारी</option><option value="152">पत्रकार</option><option value="143">परिचर </option><option value="109">पर्यटक</option><option value="135">पर्यवेक्षक</option><option value="73">पायलट</option><option value="155">पुजारी</option><option value="75">पुलिस अधिकारी</option><option value="145">प्रतिनिधि</option><option value="136">प्रबंधक</option><option value="126">प्रारूप तैयार करने वाला</option><option value="156">प्रोफेसर</option><option value="115">प्रोफेसर/प्राध्यापक</option><option value="133">फायरमैन</option><option value="48">फेरी वाला</option><option value="40">फैक्टरी मजदूर</option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="राष्ट्रीयता हेतु देश"
                            name="राष्ट्रीयता हेतु देश"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your nationality country!',
                                },
                            ]}
                        >
                            <Select
                                placeholder="भारत"
                                onChange={value => handleInputChange('राष्ट्रीयता हेतु देश', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="80">भारत</option><option value="7">अंगोला</option><option value="12">अजरबैजन</option><option value="216">अज्ञात</option><option value="6">अन्डोरा</option><option value="188">अपर वाल्टा</option><option value="2">अफगानिस्तान</option><option value="3">अफ्रीका</option><option value="1">अबुधाबी / दुबई</option><option value="8">अर्जेन्टिना</option><option value="5">अल्जीरिया</option><option value="4">अल्बेनिया</option><option value="87">आइवरी कॉस्ट</option><option value="79">आइसलैण्ड</option><option value="84">आयरलैंड</option><option value="9">आर्मीनिया</option><option value="11">आस्ट्रिया</option><option value="10">आस्ट्रेलिया</option><option value="209">इंग्लैंड</option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="पहचान का प्रकार"
                            name="पहचान का प्रकार"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your identification type!',
                                },
                            ]}
                        >
                            <Select
                                placeholder="----चयन----"
                                onChange={value => handleInputChange('पहचान का प्रकार', value)}
                                // onChange={onGenderChange}
                                allowClear
                            >
                                <option value="0"> -----चयन-----</option>
                                <option value="पासपोर्ट">पासपोर्ट</option><option value="चालक अनुज्ञप्ति">चालक अनुज्ञप्ति</option><option value="राशन कार्ड">राशन कार्ड</option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            style={{ marginBottom: "8px" }}
                            label="आईडी कार्ड संख्‍या "
                            name="आईडी कार्ड संख्‍या"
                            rules={[
                                {
                                    // required: true,
                                    message: 'Please input your ID card number!',
                                },
                            ]}
                        >
                            <Input onChange={e => handleInputChange('आईडी कार्ड संख्या', e.target.value)} />

                        </Form.Item>
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
                    </Form>

                </div>
                <div className="detail_maindiv">

                </div>
                <Table columns={columns} dataSource={upnamList.map((item, index) => ({ ...item, index }))} />
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

export default ExtraInfoRorm;
