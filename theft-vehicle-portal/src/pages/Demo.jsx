import React, { useState } from 'react';
import { Input, Button, Form, Table } from 'antd';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState({
        id: '',
        name: '',
        age: ''
    });
    const [loading, setLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [showTable, setShowTable] = useState(false);

    const handleSearch = () => {
        setLoading(true);

        // Simulating API call with setTimeout
        setTimeout(() => {
            // Sample data
            const sampleData = [
                { id: '1', name: 'John', age: '25' },
                { id: '2', name: 'Alice', age: '30' },
                { id: '3', name: 'Bob', age: '40' }
            ];

            const foundData = sampleData.find(item => item.id === searchValue);
            if (foundData) {
                setData(foundData);
            } else {
                alert('No data found for the given ID');
            }

            setLoading(false);
        }, 1000);
    };
    const handleReset = () => {
        setSearchValue('');
        setData({
            id: '',
            name: '',
            age: ''
        });
    };
    const handleTableSubmit = () => {
        setTableData([...tableData, data]);
        setShowTable(true);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Aayu',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    return (
        <div>
            <h1>Search Data by ID</h1>
            <Form layout="vertical">
                <Form.Item label="Enter ID">
                    <Input
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        placeholder="Enter ID"
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
                <Form.Item label="ID">
                    <Input value={data.id} readOnly />
                </Form.Item>
                <Form.Item label="Name">
                    <Input value={data.name} readOnly />
                </Form.Item>
                <Form.Item label="Age">
                    <Input value={data.age} readOnly />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleTableSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>


            <Table dataSource={tableData} columns={columns} />
        </div>
    );
};

export default App;
