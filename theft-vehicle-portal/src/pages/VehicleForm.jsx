import React, { useState } from 'react';
import { Input, Select, Button, Space, Form, Table, Drawer, Modal } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./form.css"
import "./table.css"
const VehicleForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState({
        index: '',
        regNumber: '',
        color: '',
        engineNum: '',
        details: '',
        insuComp: '',
        chesisNum: '',
        vehichleType: '',
        manufecture: '',
        year: '',
        model: ''
    });
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [open, setOpen] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const showModal = (index) => {
        setDeleteIndex(index);
        setConfirmDelete(true);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
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
            dataIndex: 'regNumber',
            key: 'regNumber',
        },
        {
            title: 'रंग',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'इंजन संख्या',
            dataIndex: 'engineNum',
            key: 'engineNum',
        },
        {
            title: 'विवरण',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'बीमा कंपनी',
            dataIndex: 'insuComp',
            key: 'insuComp',
        },
        {
            title: 'चेसिस नंबर',
            dataIndex: 'chesisNum',
            key: 'chesisNum',
        },
        {
            title: 'वाहन का प्रकार',
            dataIndex: 'vehichleType',
            key: 'vehichleType',
        },
        {
            title: 'निर्माता',
            dataIndex: 'manufecture',
            key: 'manufecture',
        },
        {
            title: 'निर्माण वर्ष',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'मॉडल',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: "संशोधित करे",
            dataIndex: "modify",
            key: "operation",
            render: (text, record, index) => (
                <Space size="middle">
                    <Button onClick={() => showModal(index)} type="danger" icon={<DeleteOutlined />} />
                    <Button onClick={() => showDrawer()} type="primary" icon={<EditOutlined />} />
                </Space>
            ),
        },
    ];

    const handleDelete = () => {
        const updatedTableData = [...tableData];
        updatedTableData.splice(deleteIndex, 1);
        setTableData(updatedTableData);
        setConfirmDelete(false);
        toast.success("विवरण सफलतापूर्वक हटा दिया गया  है!");

    };

    const handleCancelDelete = () => {
        setDeleteIndex(null);
        setConfirmDelete(false);
    };

    const handleSearch = () => {
        if (!searchValue) {

            toast.error("कृपया पंजीकरण संख्या भरें !");

            return;
        }
        setLoading(true);
        setTimeout(() => {
            // Sample data
            const sampleData = [
                {
                    index: '1',
                    regNumber: '100',
                    color: 'Red',
                    engineNum: '234567',
                    details: 'Skoda Superb, Petrol, Automatic, Sunroof',
                    insuComp: 'Bhartiya Bima',
                    chesisNum: '1234567',
                    vehichleType: 'Car',
                    manufecture: 'Skoda',
                    year: '2022',
                    model: 'Superb'
                },
                {
                    index: '2',
                    regNumber: '101',
                    color: 'White',
                    engineNum: '789012',
                    details: 'Toyota Corolla, Diesel, Manual',
                    insuComp: 'Bhartiya Bima',
                    chesisNum: '789012',
                    vehichleType: 'Car',
                    manufecture: 'Toyota',
                    year: '2021',
                    model: 'Corolla'
                },
                {
                    index: '3',
                    regNumber: '102',
                    color: 'Blue',
                    engineNum: '345678',
                    details: 'Maruti WagonR, Petrol, Manual',
                    insuComp: 'List General Insurance',
                    chesisNum: '345678',
                    vehichleType: 'SUV',
                    manufecture: 'Maruti Suzuki',
                    year: '2019',
                    model: 'WagonR'
                },
                {
                    index: '4',
                    regNumber: '103',
                    color: 'Yellow',
                    engineNum: '678901',
                    details: 'Honda City, Petrol, Manual',
                    insuComp: 'List General Insurance',
                    chesisNum: '678901',
                    vehichleType: 'Car',
                    manufecture: 'Honda',
                    year: '2018',
                    model: 'City'
                },
                {
                    index: '5',
                    regNumber: '104',
                    color: 'Black',
                    engineNum: '1234567',
                    details: 'Ford Aspire, Petrol, Automatic',
                    insuComp: 'Bhartiya Bima',
                    chesisNum: '1234567',
                    vehichleType: 'Car',
                    manufecture: 'Ford',
                    year: '2020',
                    model: 'Aspire'
                }
            ];

            const foundData = sampleData.find(item => item.regNumber === searchValue);
            if (foundData) {
                setData(foundData);
                toast.success("जानकारी सफलतापूर्वक जोड़ी गई !");
                console.log(foundData);
            } else {
                toast.error("जानकारी मौजूद नहीं है !");
                // alert('No data found for the given ID');
            }

            setLoading(false);
        }, 1000);

    };

    const handleReset = () => {
        setSearchValue('');
        setData({
            index: '',
            regNumber: '',
            color: '',
            engineNum: '',
            details: '',
            insuComp: '',
            chesisNum: '',
            vehichleType: '',
            manufecture: '',
            year: '',
            model: ''
        });
    };

    const handleTableSubmit = () => {
        if (!data.regNumber) {
            toast.warning("कृपया पहले खोज करें और फिर तालिका में डेटा जोड़ें");
            return;
        }
        const dataValues = Object.values(data);
        const emptyValues = dataValues.filter(value => value === '').length;
        if (emptyValues > 1) {
            toast.warning("कृपया पहले सभी फ़ील्ड को भरें और फिर तालिका में डेटा जोड़ें");
            return;
        }

        setTableData([...tableData, data]);
        toast.success("जानकारी सफलतापूर्वक जोड़ी गई !");
        handleReset()
    };

    return (
        <div style={{ width: "100%" }}>
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

            <Drawer width={500} title="Basic Drawer" onClose={onClose} open={open} >
                <div className='main_container_forms_vehi'>
                    <Form className='vehi_form'
                        name="combinedForm"
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item label="Enter Registration Number">
                            <Input
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder="Enter Registration Number"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={handleSearch} loading={loading}>
                                Search
                            </Button>
                            <Button style={{ marginLeft: '10px' }} onClick={handleReset}>
                                Reset
                            </Button>
                        </Form.Item>
                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Vehicle Registration Number"
                            >
                                <Input value={data.regNumber} />
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Color"
                            >
                                <Input value={data.color} />
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Engine Number"
                            >
                                <Input value={data.engineNum} />
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Details"
                            >
                                <Input value={data.details} />
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Insurance Company"
                            >
                                <Select value={data.insuComp} >
                                    <Select.Option value="Bhartiya Bima">Bhartiya Bima</Select.Option>
                                    <Select.Option value="List General Insurance">List General Insurance</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Chesis Number"
                            >
                                <Input value={data.chesisNum} />
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Vehicle Type"
                            >
                                <Select value={data.vehichleType} >
                                    <Select.Option value="Car">Car</Select.Option>
                                    <Select.Option value="SUV">SUV</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Manufacturer"
                            >
                                <Select value={data.manufecture}>
                                    <Select.Option value="Skoda">Skoda</Select.Option>
                                    <Select.Option value="Toyota">Toyota</Select.Option>
                                    <Select.Option value="Maruti Suzuki">Maruti Suzuki</Select.Option>
                                    <Select.Option value="Honda">Honda</Select.Option>
                                    <Select.Option value="Ford">Ford</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <div className='vehiinput'>
                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Manufacturing Year"
                            >
                                <Select value={data.year} >
                                    <Select.Option value="2022">2022</Select.Option>
                                    <Select.Option value="2021">2021</Select.Option>
                                    <Select.Option value="2019">2019</Select.Option>
                                    <Select.Option value="2018">2018</Select.Option>
                                    <Select.Option value="2020">2020</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                className='item'
                                style={{ marginBottom: "5px" }}
                                label="Model"
                            >
                                <Select value={data.model} >
                                    <Select.Option value="Superb">Superb</Select.Option>
                                    <Select.Option value="Corolla">Corolla</Select.Option>
                                    <Select.Option value="WagonR">WagonR</Select.Option>
                                    <Select.Option value="City">City</Select.Option>
                                    <Select.Option value="Aspire">Aspire</Select.Option>
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
                                <Button type="primary" onClick={handleTableSubmit}>
                                    Add
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>

                    {/* <Table dataSource={tableData} columns={columns} /> */}
                </div>
            </Drawer>



            <div className='main_container_forms_vehi'>
                <Form className='vehi_form'
                    name="combinedForm"
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <div className='vehiinput1'>
                        <Form.Item label="वाहन जानकारी खोजें" className='item'>
                            <Input
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                value={searchValue}
                                onChange={e => setSearchValue(e.target.value)}
                                placeholder="रजिस्ट्रेशन नंबर दर्ज करें"
                            />
                        </Form.Item>
                        <div className='itembtn'>
                            <Form.Item>
                                <Button type="primary" onClick={handleSearch} loading={loading}>
                                    खोजें
                                </Button>
                                <Button style={{ marginLeft: '10px' }} onClick={handleReset}>
                                    रीसेट
                                </Button>

                            </Form.Item>
                        </div>
                    </div>


                    <div className='vehiinput'>
                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="वाहन पंजीकरण संख्या"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value={data.regNumber} readOnly />
                        </Form.Item>

                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="रंग"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value={data.color} readOnly />
                        </Form.Item>
                    </div>

                    <div className='vehiinput'>
                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="इंजन संख्या"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value={data.engineNum} readOnly />
                        </Form.Item>

                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="विवरण"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input value={data.details} readOnly />
                        </Form.Item>
                    </div>

                    <div className='vehiinput'>
                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="वाहन का प्रकार"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select value={data.insuComp} disabled>
                                <Select.Option value="Bhartiya Bima">Bhartiya Bima</Select.Option>
                                <Select.Option value="List General Insurance">List General Insurance</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            className='item'
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{ marginBottom: "5px" }}
                            label="चेसिस नंबर"
                        >
                            <Input value={data.chesisNum} readOnly />
                        </Form.Item>
                    </div>

                    <div className='vehiinput'>
                        <Form.Item
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="वाहन का प्रकार"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select value={data.vehichleType} disabled>
                                <Select.Option value="Car">Car</Select.Option>
                                <Select.Option value="SUV">SUV</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            className='item'
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{ marginBottom: "5px" }}
                            label="निर्माता"
                        >
                            <Select value={data.manufecture} disabled>
                                <Select.Option value="Skoda">Skoda</Select.Option>
                                <Select.Option value="Toyota">Toyota</Select.Option>
                                <Select.Option value="Maruti Suzuki">Maruti Suzuki</Select.Option>
                                <Select.Option value="Honda">Honda</Select.Option>
                                <Select.Option value="Ford">Ford</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className='vehiinput'>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="
निर्माण वर्ष"
                        >
                            <Select value={data.year} disabled>
                                <Select.Option value="2022">2022</Select.Option>
                                <Select.Option value="2021">2021</Select.Option>
                                <Select.Option value="2019">2019</Select.Option>
                                <Select.Option value="2018">2018</Select.Option>
                                <Select.Option value="2020">2020</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            className='item'
                            style={{ marginBottom: "5px" }}
                            label="मॉडल"
                        >
                            <Select value={data.model} disabled>
                                <Select.Option value="Superb">Superb</Select.Option>
                                <Select.Option value="Corolla">Corolla</Select.Option>
                                <Select.Option value="WagonR">WagonR</Select.Option>
                                <Select.Option value="City">City</Select.Option>
                                <Select.Option value="Aspire">Aspire</Select.Option>
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
                            <Button type="primary" onClick={handleTableSubmit}>
                                Add
                            </Button>

                        </Form.Item>
                    </div>
                </Form>

                <Table style={{ marginTop: "20px" }} dataSource={tableData} columns={columns} />
            </div>

        </div>
    );
};

export default VehicleForm;
