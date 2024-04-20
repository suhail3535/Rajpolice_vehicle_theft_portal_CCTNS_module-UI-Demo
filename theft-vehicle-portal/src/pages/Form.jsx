
import React, { useState } from 'react';
import "./form.css"
import "./table.css"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button, Stack, Flex, InputGroup, InputLeftAddon, Checkbox } from '@chakra-ui/react';
import { Modal } from 'antd';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        mobile: '',
        email: '',
        upnam:''
    });
    const [formErrors, setFormErrors] = useState({});

    const [upnam, setUpnam] = useState('');
    const [upnamList, setUpnamList] = useState([]);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleAddUpnam = () => {
        if (upnam.trim() !== '') {
            const newUpnamList = [...upnamList, upnam];
            setUpnamList(newUpnamList);
            setUpnam('');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value ? '' : `Please enter ${name} field`,
        });
    };

    const handleDelete = (index) => {
        const updatedUpnamList = [...upnamList];
        updatedUpnamList.splice(index, 1);
        setUpnamList(updatedUpnamList);
    };

    const showModal = () => {
        if (!formData.mobile) {
            setFormErrors({
                ...formErrors,
                mobile: 'Please enter Mobile Number',
            });
            return;
        }
        setOpen(true);
    };

    const showModal2 = () => {
        if (!formData.email) {
            setFormErrors({
                ...formErrors,
                email: 'Please enter Email Address',
            });
            return;
        }
        setOpen2(true);
    };

    const handleOk2 = () => {
        setOpen2(false);
    };

    const handleCancel2 = () => {
        setOpen2(false);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const [open3, setOpen3] = useState(false);
    const showModal3 = () => {
        setOpen3(true);
    };
    const hideModal = () => {
        setOpen3(false);
    };

    return (
        <>
            <Modal
                open={open}
                title=""
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className='model_msg'>
                    <h1>
                        Mobile Number Verification
                    </h1>
                    <span className='model_msgp'></span>
                    <p>Mobile Number Verification Status: <span style={{ color: "rgb(53, 167, 133)" }}>OTP Verification</span></p>
                    <FormControl>
                        <Input placeholder='Enter Mobile OTP' size='md' />
                    </FormControl>
                    <button>PROCEED WITH MOBILE VERIFICATION</button>
                </div>
            </Modal>
            <Modal
                open={open2}
                title=""
                onOk={handleOk2}
                onCancel={handleCancel2}
                footer={null}
            >
                <div className='model_msg'>
                    <h1>
                        Email Address Verification
                    </h1>
                    <span className='model_msgp'></span>
                    <p>Email Address Verification Status: <span style={{ color: "rgb(53, 167, 133)" }}>OTP Verification</span></p>
                    <FormControl>
                        <Input placeholder='Enter Email OTP' size='md' />
                    </FormControl>
                    <button>PROCEED WITH EMAIL VERIFICATION</button>
                </div>
            </Modal>
            <Modal className='data_delete'
                title=""
                open={open3}
                onOk={hideModal}
                onCancel={hideModal}
                okText="हाँ"
                cancelText="नहीं"
            >
                <p>सभी आंकड़े खाली हो जाएंगे, क्या आप जारी रखना चाहते हैं</p>

            </Modal>

            <div className='main_container_forms'>
                <div className='form1'>

                        <FormControl isRequired>
                            <FormLabel style={{ marginBottom: "0px",fontSize:"15px" }}>लिंग</FormLabel>
                            <Select placeholder='-----चयन-----' size='sm'>
                                {/* <option value="">-----चयन-----</option> */}
                                <option value="">अज्ञात</option>
                                <option value="">पुरुष</option>
                                <option value="">महिला</option>
                                <option value="">
                                    हिजड़ा/किन्&zwj;नर
                                </option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>प्रथम नाम</FormLabel>
                            <Input placeholder='First name' size='sm' />
                        </FormControl>
                        <FormControl>
                            <FormLabel  style={{marginBottom:"0px",fontSize:"15px"}}>मध्य नाम</FormLabel>
                            <Input placeholder='First name' size='sm' />
                        </FormControl>
                        <FormControl>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>अंतिम नाम</FormLabel>
                            <Input placeholder='First name' size='sm' />
                        </FormControl>
                        <Stack direction="row">
                            <FormControl>
                                <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>उपनाम</FormLabel>
                                <Input type="text" size="sm" value={upnam} onChange={(e) => setUpnam(e.target.value)} />
                            </FormControl>
                        <Button className="saheje" colorScheme='blue' size='sm' onClick={handleAddUpnam}>सहेजे</Button>
                        </Stack>
                        <div className="detail_maindiv">
                            <table>
                                <thead>
                                    <tr>
                                        <th>क्र.सं</th>
                                        <th className='up'>उपनाम</th>
                                        <th>हटाएँ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upnamList.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}.</td>
                                            <td>{item}</td>
                                            <td>
                                                <Button colorScheme='red' size='sm' onClick={() => handleDelete(index)}>हटाएँ</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                </div>
                <div className='form1'>

                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>वैवाहिक स्थिति</FormLabel>
                            <Select placeholder='-----चयन-----' size='sm'>
                                <option value="">अलग- अलग</option>
                                <option value="">अविवाहित</option>
                                <option value="">तलाकशुदा</option>
                                <option value="">लिव इन रिलेशन</option>
                                <option value="">विधवा</option>
                                <option value="">विवाहित</option>
                            </Select>
                        </FormControl>
                        <div className="stack">
                            <FormControl >
                                <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>
                                    मोबाईल नंबर
                                </FormLabel>
                                <InputGroup size='sm'>
                                    <InputLeftAddon>+91</InputLeftAddon >
                                    <Input
                                        size='sm'
                                        type='tel'
                                        placeholder='phone number'
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button className="satya" colorScheme='blue'  size='sm' onClick={showModal}>सत्यापित करें</Button>
                        </div>
                            {formErrors.mobile && <div style={{color:"red"}}>{formErrors.mobile}</div>}
                        <FormControl >
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>
                                लैंडलाइन नंबर
                            </FormLabel>
                            <InputGroup size='sm'>
                                <InputLeftAddon>+91</InputLeftAddon >
                                <Input size='sm' type='tel' placeholder='phone number' />
                            </InputGroup>
                        </FormControl>
                        <div className='stack'>
                            <FormControl >
                                <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>
                                    ईमेल आईडी
                                </FormLabel>
                                <Input
                                    type="email"
                                    size="sm"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                        <Button className="satya"  colorScheme='blue'  size='sm' onClick={showModal2}>सत्यापित करें</Button>
                        </div>
                        {formErrors.email && <div style={{ color: "red" }}>{formErrors.email}</div>}
                        <Checkbox defaultChecked>क्या पीड़ित और शिकायतकर्ता एक ही हैं?</Checkbox>

                </div>
                <div className='form1'>

                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>संबंध प्रकार</FormLabel>
                            <Select placeholder='-----चयन-----' size='sm'>
                                <option value="">संबंध प्रकार</option>
                                <option value="">अभिभावक</option>
                                <option value="">पति</option>
                                <option value="">पत्नी</option>
                                <option value="">पिता</option>
                                <option value="">मां</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>संबंधी का नाम</FormLabel>
                            <Input placeholder='First name' size='sm' />
                        </FormControl>
                        <FormControl>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>संबंधी का उपनाम</FormLabel>
                            <Input placeholder='First name' size='sm' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>श्रेणी</FormLabel>
                            <Select placeholder='-----चयन-----' size='sm'>
                                {/* <option value="">-----चयन-----</option> */}
                                <option value="">
                                    अनुसूचित जनजाति
                                </option>
                                <option value="">अनुसूचित जाति</option>
                                <option value="">
                                    अन्य पिछड़ा वर्ग (ओबीसी)
                                </option>
                                <option value="">सामान्य</option>
                            </Select>
                        </FormControl>

                </div>
                <div className='form1'>

                        <FormControl isRequired>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>
                                जन्म तिथि</FormLabel>
                            <Input placeholder='Select Date and Time' size='sm' type='datetime-local' />
                        </FormControl>
                        <Flex className="aayu"  marginBottom={2}>
                            <FormControl >
                                <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>आयु (वर्ष/महीना)</FormLabel>
                                <Input htmlSize={4} width='auto' size="sm" />
                            </FormControl>
                            <FormControl >
                            <Input className="inputyear" htmlSize={4} width='auto' size="sm" />
                            </FormControl>
                        </Flex>
                        <FormControl>
                            <FormLabel style={{marginBottom:"0px",fontSize:"15px"}}>जन्म का वर्ष</FormLabel>
                        <Input placeholder='जन्म का वर्ष' size='sm' />
                        </FormControl>

                        <div className="controlflex" >
                            <FormControl >
                                <FormLabel  style={{marginBottom:"0px",fontSize:"15px"}}>आयु सीमा(से - तक)</FormLabel>
                            <Input htmlSize={6}  size="sm" />
                            </FormControl>
                            <FormControl className="inputyear" >
                            <Input htmlSize={6} size="sm" />
                            </FormControl>
                            <FormControl>
                          <Button colorScheme='blue' size='sm' onClick={showModal3} >रीसेट करें</Button>
                            </FormControl>

                        </div>


                </div>

                <div className='empty_btn'>
                    <button onClick={showModal3}> <span className='button-content'> रिक्त करें</span></button>
                </div>
            </div>
        </>
    )
}

export default FormComponent;


