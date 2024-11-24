import React, { useState } from 'react';
import { Button, AutoComplete, DatePicker, Space, Checkbox, Form, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import grece from '../assets/images/grece.jpg'
import Layout from '../components/Layout';

const HomePage = () => {

    const { RangePicker } = DatePicker;

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [anotherOptions, setAnotherOptions] = useState([]);

    const mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
    });

    const getPanelValue = (searchText) =>
        !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    const onSelect = (data) => {
        console.log('onSelect', data);
    };
    const onChange = (data) => {
        setValue(data);
    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <header>

            <div className='background_home'>
                <h1>Let's Travel The World With Us</h1>
            </div>

            <div className='items_home'>
                <div className='items_btn'>

                    <Form className='form_home_center'
                        name="basic"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        layout='vertical'
                    >

                        <Form.Item
                            label="Départ"
                            name="dep"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please set your starting point!',
                                },
                            ]}
                        >
                            <AutoComplete
                                style={{
                                    width: 200,
                                }}
                                options={options}
                                onSelect={onSelect}
                                onSearch={(text) => setOptions(getPanelValue(text))}
                                placeholder="De?"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Destinations"
                            name="dest"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input destinations!',
                                },
                            ]}
                        >
                            <AutoComplete
                                style={{
                                    width: 200,
                                }}
                                options={options}
                                onSelect={onSelect}
                                onSearch={(text) => setOptions(getPanelValue(text))}
                                placeholder="Ou?"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your date!',
                                },
                            ]}
                        >
                            <RangePicker />
                        </Form.Item>

                        <Form.Item className='special_btn_form'>
                            <Button type='primary' htmlType="submit">Rechercher</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </header>
    );
};

export default HomePage;