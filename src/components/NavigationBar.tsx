import React from 'react'
import {PersonCircle, BoxSeam, Bank, BoxArrowRight, List} from 'react-bootstrap-icons'
import './navigationBar.css'
import {Button, Dropdown, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NavigationBar = ({logout}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='navigationbar__container whiteBox d-none d-md-inline-flex'>
                <div className='navigationbar__icon_container' onClick={() => navigate("/action")}>
                    <PersonCircle className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar__icon_container' onClick={() => navigate("/inventory")}>
                    <BoxSeam className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar__icon_container'>
                    <Bank className='navigationbar__icon' size={25}/>
                </div>
                <div className='navigationbar_verticalLine'></div>
                <div className='navigationbar__icon_container' onClick={() => logout()}>
                    <BoxArrowRight className='navigationbar__icon' size={25}/>
                </div>
            </div>

            <Dropdown className="d-md-none" >
                <Dropdown.Toggle className="navigationbar__dropDownToggle">
                    <List className="navigationbar__icon" size={25}/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Inventory</Dropdown.Item>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Market</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    )
}

export default NavigationBar