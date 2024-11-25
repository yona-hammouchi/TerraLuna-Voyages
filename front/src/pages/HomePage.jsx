import React, { useState, useRef, useEffect } from 'react';
import { Button, AutoComplete, DatePicker, Space, Checkbox, Form, Skeleton } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import grece from '../assets/images/grece.jpg'
import Layout from '../components/Layout';
import Plane from '../assets/icons/Plane.svg';
import Stays from '../assets/icons/Stays.svg'
import Hotels from '../assets/icons/Hotels.svg'
import CardTravel from '../components/CardTravel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import axios from 'axios'

const HomePage = () => {

    const { RangePicker } = DatePicker;

    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [anotherOptions, setAnotherOptions] = useState([]);

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const mockVal = (str, repeat = 1) => ({
        value: str.repeat(repeat),
    });

    const getPanelValue = (searchText) => !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

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

    const sliderRef = useRef(null);
    const scrollAmount = 300;

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        axios
            .get('https://api.escuelajs.co/api/v1/products')
            .then((response) => {
                setData(response.data);
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            })
            .catch((error) => {
                setError('Une erreur s’est produite lors du chargement des données.');
                console.error(error);
                setLoading(false)
            })
    }, []);

    return (
        <>
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

            <div className="home_card_slide">
                <h2>Explore Our Popular Destinations</h2>
                <div>
                    <Button onClick={handlePrevious}><LeftOutlined /></Button>
                    <Button onClick={handleNext}><RightOutlined /></Button>
                </div>
            </div>

            {loading ? (
                <>
                    <Skeleton active />
                </>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <div className='containers_top' ref={sliderRef}>
                    {data.map((item) => (
                        <CardTravel
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.images[0]}
                            description={item.description}
                        />
                    ))}
                </div>
            )}

        </>
    );

};



export default HomePage;