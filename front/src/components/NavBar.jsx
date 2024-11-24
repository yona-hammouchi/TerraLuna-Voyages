import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <nav>
            <div className='nav_logo'>
                <img src={logo} alt="" />
            </div>

            <div className='nav_buttons'>
                <Button type="text" onClick={() => navigate('/')}>Home</Button>
                <Button type="text" onClick={() => navigate('/destinations')}>Destinations</Button>
                <Button type="text" onClick={() => navigate('/flights')}>Flights and Hotels</Button>
                <Button type="text" onClick={() => navigate('/favorite')}>Hearts</Button>
                <Button type="text" onClick={() => navigate('/profile')}>Profile</Button>
            </div>

        </nav>
    );
};

export default NavBar;