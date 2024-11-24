import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { HeartOutlined, UserOutlined, MenuOutlined, } from '@ant-design/icons';
import { Avatar, Button, Drawer } from 'antd';


const NavBar = () => {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <nav>
            <div className='nav_logo'>
                <img src={logo} alt="" />
                <h1>TRAVLING</h1>
            </div>

            <Button type="text"><MenuOutlined className='favorite' id='burger' onClick={showDrawer} /></Button>

            <div className='nav_buttons'>
                <Button type="text" onClick={() => navigate('/')}>Home</Button>
                <Button type="text" onClick={() => navigate('/destinations')}>Destinations</Button>
                <Button type="text" onClick={() => navigate('/flights')}>Flights and Hotels</Button>
                <Button type="text" onClick={() => navigate('/favorite')}><HeartOutlined className='favorite' /></Button>
                <Button type="text" onClick={() => navigate('/profile')}><Avatar icon={<UserOutlined />} /></Button>
            </div>

            <Drawer onClose={onClose} open={open}>
                <div className='nav_drawer'>
                    <Button type="text" onClick={() => {
                        navigate('/')
                        onClose()
                    }}>Home</Button>
                    <Button type="text" onClick={() => {
                        navigate('/destinations')
                        onClose()
                    }}>Destinations</Button>
                    <Button type="text" onClick={() => {
                        navigate('/flights')
                        onClose()
                    }}>Flights and Hotels</Button>
                    <Button type="text" onClick={() => {
                        navigate('/favorite')
                        onClose()
                    }}><HeartOutlined className='favorite' /></Button>
                    <Button type="text" onClick={() => {
                        navigate('/profile')
                        onClose()
                    }}><Avatar icon={<UserOutlined />} /></Button>
                </div>

            </Drawer>
        </nav>
    );
};

export default NavBar;