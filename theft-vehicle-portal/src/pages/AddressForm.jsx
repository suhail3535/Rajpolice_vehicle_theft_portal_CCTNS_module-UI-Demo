
import React, { useState } from 'react';
import "./form.css"
import "./table.css"
import {
    DeleteOutlined
} from '@ant-design/icons';
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button, Stack, Flex, InputGroup, InputLeftAddon, Checkbox } from '@chakra-ui/react';
import { Modal } from 'antd';
import { Table, Space } from 'antd';

const AddressForm = () => {
    const [formData, setFormData] = useState({
        houseNumber: '',
        streetName: '',
        colonyAreaRegion: '',
        villageCityTown: '',
        tehsilBlockMandal: '',
        country: '',
        state: '',
        district: '',
        policeStation: '',
        pinCode: '',
        modify: '',
        // Add more fields as needed
    });

    const handleAddUpnam = () => {
        const { houseNumber, streetName, city } = formData;
        if (houseNumber!== '' && streetName !== '' && city !== '') {
            const newUpnamList = [...upnamList, formData];
            setUpnamList(newUpnamList);
            setFormData({
                houseNumber: '',
                streetName: '',
                colonyAreaRegion: '',
                villageCityTown: '',
                tehsilBlockMandal: '',
                country: '',
                state: '',
                district: '',
                policeStation: '',
                pinCode: '',
                modify: '',

                // Reset other fields as needed
            });
        }
        alert("updated")
    };
    const [upnamList, setUpnamList] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const columns = [
        {
            title: 'क्र.सं',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'मकान सं',
            dataIndex: 'houseNumber',
            key: 'houseNumber',
        },
        {
            title: 'गली का नाम',
            dataIndex: 'streetName',
            key: 'streetName',
        },
        {
            title: 'कॉलोनी / इलाक़ा / क्षेत्र',
            dataIndex: 'colonyAreaRegion',
            key: 'colonyAreaRegion',
        },
        {
            title: 'गाँव / शहर / नगर',
            dataIndex: 'villageCityTown',
            key: 'villageCityTown',
        },
        {
            title: 'तहसील / ब्लॉक / मंडल',
            dataIndex: 'tehsilBlockMandal',
            key: 'tehsilBlockMandal',
        },
        {
            title: 'देश',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'राज्य',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'जिला',
            dataIndex: 'district',
            key: 'district',
        },
        {
            title: 'पुलिस स्टेशन',
            dataIndex: 'policeStation',
            key: 'policeStation',
        },
        {
            title: 'पिन कोड',
            dataIndex: 'pinCode',
            key: 'pinCode',
        },
        {
            title: 'संशोधित करे',
            dataIndex: 'modify',
            key: 'modify',
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




    const handleDelete = (index) => {
        const updatedUpnamList = [...upnamList];
        updatedUpnamList.splice(index, 1);
        setUpnamList(updatedUpnamList);
    };




    return (
        <>

            <div style={{ width: "100%" }}>
                <p style={{ fontWeight: "bold", margin: "10px 10px 0px 10px" }}>स्थायी पता</p>
                <div className='main_container_forms'>

                    <div className='form1'>
                        <Stack spacing={2}>
                            <FormControl >
                                <FormLabel>
                                    मकान सं</FormLabel>
                                <Input name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} placeholder='मकान सं' size='sm' />

                            </FormControl>
                            <FormControl>
                                <FormLabel>गली का नाम</FormLabel>
                                <Input name="streetName" value={formData.streetName} onChange={handleInputChange} placeholder='गली का नाम' size='sm' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>कॉलोनी / इलाक़ा /क्षेत्र</FormLabel>
                                <Input name="colonyAreaRegion" value={formData.colonyAreaRegion} onChange={handleInputChange} placeholder='कॉलोनी / इलाक़ा /क्षेत्र' size='sm' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>ग्राम / नगर / शहर</FormLabel>
                                <Input name="villageCityTown" value={formData.villageCityTown} onChange={handleInputChange} placeholder='ग्राम / नगर / शहर' size='sm' />

                            </FormControl>
                            <FormControl >
                                <FormLabel>तहसील / ब्लॉक / मंडल</FormLabel>
                                <Input name="tehsilBlockMandal" value={formData.tehsilBlockMandal} onChange={handleInputChange} placeholder='तहसील / ब्लॉक / मंडल' size='sm' />

                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>वर्तमान पता</FormLabel>
                                <span style={{ marginRight: "10px", fontWeight: "bold" }}>  वर्तमान के लिए भी वही</span>
                                <Checkbox >हां</Checkbox>
                                <Checkbox style={{ marginLeft: "10px" }}>नहीं</Checkbox>


                            </FormControl>
                        </Stack>
                    </div>

                    <div className='form1'>
                        <Stack spacing={2}>
                            <FormControl isRequired>
                                <FormLabel>
                                    देश
                                </FormLabel>
                                <Select name="country" value={formData.country} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value='भारत'>भारत</option>

                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>

                                    राज्य</FormLabel>
                                <Select name="state" value={formData.state} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="राजस्थान">राजस्थान</option>
                                    <option value="दिल्ली">दिल्ली</option>
                                    <option value="महाराष्ट्र">महाराष्ट्र</option>
                                    <option value="उत्तर प्रदेश">उत्तर प्रदेश</option>
                                    <option value="केरल">केरल</option>

                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>

                                    जिला</FormLabel>
                                <Select name="district" value={formData.district} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="डीग">डीग</option>
                                    <option value="डीडवाना-कुचामन">डीडवाना-कुचामन</option>
                                    <option value="डूंगरपूर">डूंगरपूर</option>
                                    <option value="दूदू">दूदू</option>
                                    <option value="दौसा">दौसा</option>
                                    <option value="धौलपुर">धौलपुर</option>

                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>

                                    पुलिस स्टेशन</FormLabel>
                                <Select name="policeStation" value={formData.policeStation} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="भरतपुर">भरतपुर</option>
                                    <option value="भिवाड़ी">भिवाड़ी</option>
                                    <option value="भीलवाड़ा">भीलवाड़ा</option>
                                    <option value="शासकीय रेलवे पुलिस जोधपुर">शासकीय रेलवे पुलिस जोधपुर</option>
                                    <option value="शासकीय रेलवे पुलिस, अजमेर">शासकीय रेलवे पुलिस, अजमेर</option>
                                    <option value="शाहपुरा">शाहपुरा</option>
                                    <option value="सलूम्&zwj;बर">सलूम्&zwj;बर</option>


                                </Select>
                            </FormControl>
                            <FormControl >
                                <FormLabel>पिन कोड</FormLabel>
                                <Input name="pinCode" value={formData.pinCode} onChange={handleInputChange} placeholder='पिन कोड' size='sm' />

                            </FormControl>

                        </Stack>
                    </div>

                </div>
                <p style={{ fontWeight: "bold", margin: "10px 10px 0px 10px" }}>वर्तमान पता</p>

                <div className='main_container_forms'>

                    <div className='form1'>
                        <Stack spacing={2}>
                            <FormControl >
                                <FormLabel>
                                    मकान सं</FormLabel>
                                <Input name="houseNumber" value={formData.streetName} onChange={handleInputChange} placeholder='मकान सं' size='sm' />

                            </FormControl>
                            <FormControl>
                                <FormLabel>गली का नाम</FormLabel>
                                <Input name="streetName" value={formData.streetName} onChange={handleInputChange} placeholder='गली का नाम' size='sm' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>कॉलोनी / इलाक़ा /क्षेत्र</FormLabel>
                                <Input name="colonyAreaRegion" value={formData.colonyAreaRegion} onChange={handleInputChange} placeholder='कॉलोनी / इलाक़ा /क्षेत्र' size='sm' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>ग्राम / नगर / शहर</FormLabel>
                                <Input name="villageCityTown" value={formData.villageCityTown} onChange={handleInputChange} placeholder='ग्राम / नगर / शहर' size='sm' />

                            </FormControl>
                            <FormControl >
                                <FormLabel>तहसील / ब्लॉक / मंडल</FormLabel>
                                <Input name="tehsilBlockMandal" value={formData.tehsilBlockMandal} onChange={handleInputChange} placeholder='तहसील / ब्लॉक / मंडल' size='sm' />

                            </FormControl>

                        </Stack>
                    </div>

                    <div className='form1'>
                        <Stack spacing={2}>
                            <FormControl isRequired>
                                <FormLabel>
                                    देश
                                </FormLabel>
                                <Select name="country" value={formData.country} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value='भारत'>भारत</option>

                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>

                                    राज्य</FormLabel>
                                <Select name="state" value={formData.state} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="राजस्थान">राजस्थान</option>
                                    <option value="दिल्ली">दिल्ली</option>
                                    <option value="महाराष्ट्र">महाराष्ट्र</option>
                                    <option value="उत्तर प्रदेश">उत्तर प्रदेश</option>
                                    <option value="केरल">केरल</option>

                                </Select>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>

                                    जिला</FormLabel>
                                <Select name="district" value={formData.district} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="डीग">डीग</option>
                                    <option value="डीडवाना-कुचामन">डीडवाना-कुचामन</option>
                                    <option value="डूंगरपूर">डूंगरपूर</option>
                                    <option value="दूदू">दूदू</option>
                                    <option value="दौसा">दौसा</option>
                                    <option value="धौलपुर">धौलपुर</option>

                                </Select>
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>

                                    पुलिस स्टेशन</FormLabel>
                                <Select name="policeStation" value={formData.policeStation} onChange={handleInputChange} placeholder='-----चयन-----' size='sm'>
                                    <option value="भरतपुर">भरतपुर</option>
                                    <option value="भिवाड़ी">भिवाड़ी</option>
                                    <option value="भीलवाड़ा">भीलवाड़ा</option>
                                    <option value="शासकीय रेलवे पुलिस जोधपुर">शासकीय रेलवे पुलिस जोधपुर</option>
                                    <option value="शासकीय रेलवे पुलिस, अजमेर">शासकीय रेलवे पुलिस, अजमेर</option>
                                    <option value="शाहपुरा">शाहपुरा</option>
                                    <option value="सलूम्&zwj;बर">सलूम्&zwj;बर</option>


                                </Select>
                            </FormControl>
                            <FormControl >
                                <FormLabel>पिन कोड</FormLabel>
                                <Input name="pinCode" value={formData.pinCode} onChange={handleInputChange} placeholder='पिन कोड' size='sm' />

                            </FormControl>

                        </Stack>
                    </div>


                </div>
                <div>

                </div>
                <div className='reset_frm_btn'>
                    <Button style={{ marginTop: "32px" }} colorScheme='blue' size='sm' onClick={handleAddUpnam}>सहेजे</Button>
                    <Button style={{ marginTop: "32px" }} colorScheme='blue' size='sm' onClick={handleAddUpnam}>रिक्त करें</Button>

                </div>
                <Table columns={columns} dataSource={upnamList.map((item, index) => ({ ...item, index }))} />


            </div>

        </>
    )
}

export default AddressForm;
