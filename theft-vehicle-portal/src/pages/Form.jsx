

import React, { useState } from 'react';
import "./form.css"
import "./table.css"
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button, Stack, Flex, InputGroup, InputLeftAddon, Checkbox } from '@chakra-ui/react';

import { Button, Modal, Space } from 'antd';
export const ModelOpen = () => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Space>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        Modal.confirm({
                            title: 'Confirm',
                            content: 'Bla bla ...',
                            footer: (_, { OkBtn, CancelBtn }) => (
                                <>
                                    <Button>Custom Button</Button>
                                    <CancelBtn />
                                    <OkBtn />
                                </>
                            ),
                        });
                    }}
                >
                    Open Modal Confirm
                </Button>
            </Space>
            <Modal
                open={open}
                title="Title"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        <Button>Custom Button</Button>
                        <CancelBtn />
                        <OkBtn />
                    </>
                )}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};


const FormComponent = () => {
    const [upnam, setUpnam] = useState('');
    const [upnamList, setUpnamList] = useState([]);

    const handleAddUpnam = () => {
        if (upnam.trim() !== '') {
            const newUpnamList = [...upnamList, upnam];
            setUpnamList(newUpnamList);
            setUpnam('');
        }
    };

    const handleDelete = (index) => {
        const updatedUpnamList = [...upnamList];
        updatedUpnamList.splice(index, 1);
        setUpnamList(updatedUpnamList);
    };

    return (
        <div className='main_container_forms'>
            <div className='form1'>
                <Stack spacing={2}>
                    <FormControl isRequired>
                        <FormLabel>लिंग</FormLabel>
                        <Select placeholder='small size' size='sm'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>प्रथम नाम</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>मध्य नाम</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>अंतिम नाम</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>
                    <Stack direction="row">
                        <FormControl style={{ width: "420px" }}>
                            <FormLabel>उपनाम</FormLabel>
                            <Input type="text" size="sm" value={upnam} onChange={(e) => setUpnam(e.target.value)} />
                        </FormControl>
                        <Button style={{ marginTop: "32px" }} colorScheme='blue' size='sm' onClick={handleAddUpnam}>सहेजे</Button>
                    </Stack>
                    <div className="detail_maindiv">
                        <table>
                            <thead>
                                <tr>
                                    <th>क्र.सं</th>
                                    <th style={{ width: "400px" }}>उपनाम</th>
                                    <th>हटाएँ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {upnamList.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item}</td>
                                        <td>
                                            <Button colorScheme='red' size='sm' onClick={() => handleDelete(index)}>हटाएँ</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Stack>
            </div>
            <div className='form1'>
                <Stack spacing={2}>
                    <FormControl isRequired>
                        <FormLabel>वैवाहिक स्थिति</FormLabel>
                        <Select placeholder='small size' size='sm'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>


                    <Stack direction="row">
                        <FormControl style={{ width: "380px" }}>
                            <FormLabel>
                                मोबाईल नंबर
                            </FormLabel>
                            <InputGroup size='sm'>
                                <InputLeftAddon>+91</InputLeftAddon >
                                <Input size='sm' type='tel' placeholder='phone number' />
                            </InputGroup>
                        </FormControl>
                        <Button style={{ marginTop: "32px" }} colorScheme='blue' width="100px" size='sm' onClick={handleAddUpnam}>सत्यापित करें</Button>
                    </Stack>
                    <FormControl style={{ width: "380px" }}>
                        <FormLabel>
                            लैंडलाइन नंबर
                        </FormLabel>
                        <InputGroup size='sm'>
                            <InputLeftAddon>+91</InputLeftAddon >
                            <Input size='sm' type='tel' placeholder='phone number' />
                        </InputGroup>
                    </FormControl>
                    <Stack direction="row">
                        <FormControl style={{ width: "380px" }}>
                            <FormLabel>
                                ईमेल आईडी
                            </FormLabel>
                            <Input type="email" size="sm" />
                        </FormControl>
                        <Button style={{ marginTop: "32px" }} colorScheme='blue' width="100px" size='sm' onClick={handleAddUpnam}>सत्यापित करें</Button>
                    </Stack>
                    <Checkbox defaultChecked>क्या पीड़ित और शिकायतकर्ता एक ही हैं?</Checkbox>
                </Stack>
            </div>
            <div className='form1'>
                <Stack spacing={2}>
                    <FormControl isRequired>
                        <FormLabel>संबंध प्रकार</FormLabel>
                        <Select placeholder='small size' size='sm'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>संबंधी का नाम</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>संबंधी का उपनाम</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>श्रेणी</FormLabel>
                        <Select placeholder='small size' size='sm'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>
                </Stack>
            </div>
            <div className='form1'>
                <Stack spacing={2}>
                    <FormControl isRequired>
                        <FormLabel>
                            जन्म तिथि</FormLabel>
                        <Input placeholder='Select Date and Time' size='sm' type='datetime-local' />
                    </FormControl>
                    <Flex direction="row" width="270px" justifyContent="space-between" marginBottom={2}>
                        <FormControl style={{ width: "380px" }}>
                            <FormLabel>आयु (वर्ष/महीना)</FormLabel>
                            <Input htmlSize={4} width='auto' size="sm" />
                        </FormControl>
                        <FormControl style={{ width: "380px",marginTop:"31px" }}>
                            <Input htmlSize={4} width='auto' size="sm" />
                        </FormControl>
                    </Flex>




                    <FormControl>
                        <FormLabel>जन्म का वर्ष</FormLabel>
                        <Input placeholder='First name' size='sm' />
                    </FormControl>

                    <Flex direction="row" width="500px"  justifyContent="space-between" marginBottom={2}>
                        <FormControl style={{ width: "450px" }}>
                            <FormLabel>आयु सीमा(से - तक)</FormLabel>
                            <Input htmlSize={4} width='auto' size="sm" />
                        </FormControl>
                        <FormControl style={{ width: "380px", marginTop: "31px" }}>
                            <Input htmlSize={4} width='auto' size="sm" />
                        </FormControl>
                        <FormControl>

                            <Button style={{ marginTop: "32px", marginLeft: "130px" }} colorScheme='blue' size='sm' >रीसेट करें</Button>
                        </FormControl>

                    </Flex>

                </Stack>
            </div>
            <div className='empty_btn'>
                <button >रिक्त करें</button>
            </div>

        </div>
    )
}

export default FormComponent;
